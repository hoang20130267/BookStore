import "../../assets/css/style-cart.css"
import {Link, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import React, {useEffect, useState} from "react";
import {MdOutlineDelete} from "react-icons/md";
import axios from "axios";
import formatCurrency from "../../../utils/formatCurrency";
import APIService from "../../../service/APIService";

export const Item = ({id, productId, name, image, price, quantity, updateCart}) => {
    const [remainingQuantity, setRemainingQuantity] = useState(null);
    const [notify, setNotify] = useState('');
    const handleIncrease = async () => {
        if (quantity < remainingQuantity) {
            try {
                const response = await axios.put(`${process.env.REACT_APP_ENDPOINT_API}/cart/increase/${id}`);
                console.log("Product increased successfully:", response.data);
                updateCart();
            } catch (error) {
                console.error("Error increasing product:", error);
            }
        } else {
            setNotify(`*Số lượng yêu cầu cho ${quantity + 1} không có sẵn.`);
        }
    };
    const handleDecrease = async () => {
        setNotify('');
        try {
            const response = await axios.put(`${process.env.REACT_APP_ENDPOINT_API}/cart/decrease/${id}`);
            console.log("Product decreased successfully:", response.data);
            updateCart();
        } catch (error) {
            console.error("Error decreasing product:", error);
        }
    };
    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_ENDPOINT_API}/cart/remove/${id}`);
            updateCart();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const checkRemainingQuantity = async () => {
        try {
            const result = await new APIService().fetchData(`${process.env.REACT_APP_ENDPOINT_API}/inventories/inventory/${productId}`);
            setRemainingQuantity(result.remainingQuantity);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        checkRemainingQuantity();
    }, []);

    return (
        <tr id={id}>
            <td className="shoping-cart-item">
                <Link to={`/product-detail/${productId}`} className="image-link">
                    <img src={image} alt="" className="image"/>
                </Link>
                <Link to={`/product-detail/${productId}`} className="text-link">
                    <p className="name">{name}</p>
                    <p className="notify">{notify}</p>
                </Link>
            </td>
            <td className="shoping__cart__price">
                {formatCurrency(price)}
            </td>
            <td className="shoping__cart__price">
                <div className="value-button" id="decrease" onClick={handleDecrease}>
                    <p>-</p>
                </div>
                <input type="number" id="number" value={quantity} readOnly/>
                <div className="value-button" id="increase" onClick={handleIncrease}>
                    <p>+</p>
                </div>
            </td>
            <td className="shoping__cart__total">
                {formatCurrency(quantity * price)}
            </td>
            <td className="shoping__cart__item__close">
                <MdOutlineDelete className="delete-icon"
                                 onClick={handleDelete}
                />
            </td>
        </tr>
    )
}
const PromotionCodeList = ({onSelectCode}) => {
    const [promotionCodes, setPromotionCodes] = useState([]);

    const fetchPromotionCodes = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/promotion/all-by-code`);
            setPromotionCodes(response.data);
        } catch (error) {
            console.error("Error fetching promotion codes:", error);
        }
    };

    useEffect(() => {
        fetchPromotionCodes();
    }, []);

    return (
        <ul className="promotion-code-list">
            <li onClick={() => onSelectCode('')}>
                Không chọn mã
            </li>
            {promotionCodes.map((code) => (
                <li key={code.id} onClick={() => onSelectCode(code.code)}>
                    <span className="code-text">{code.code}</span>
                    <span className="discount-text">-{code.discount}%</span>
                </li>
            ))}
        </ul>
    );
};
export const ProductsInCart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [popupInfo, setPopupInfo] = useState({message: '', type: '', visible: false});
    const [showPromotionList, setShowPromotionList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!user) {
            navigate("/sign-in");
        }
    }, [user, navigate]);
    const token = user ? user.token : null;

    const calculateTotals = () => {
        let subtotalAmount = 0;
        cart.forEach(item => {
            subtotalAmount += item.quantity * item.product.currentPrice;
        });
        if (discount > 0) {
            const finalTotal = subtotalAmount - (subtotalAmount * discount / 100);
            setTotal(finalTotal);
        } else {
            setTotal(subtotalAmount);
        }
        setSubTotal(subtotalAmount);
    };

    useEffect(() => {
        calculateTotals();
    }, [cart, discount]);
    const updateCart = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/cart/items`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching carts:", error);
        }
    };
    const hidePopup = () => {
        setPopupInfo((prevInfo) => ({...prevInfo, visible: false}));
    };
    const applyDiscountCode = async (code) => {
        setDiscountCode(code);
        setShowPromotionList(false);
        try {
            await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/orders/promo/${code}/user/${user.id}`);
            const errorMessage = 'Bạn đã sử dụng mã giảm giá này rồi!';
            setDiscountCode('')
            setPopupInfo({message: errorMessage, type: 'error', visible: true});
        } catch (error) {
            if (error.response.status === 404) {
                const errorMessage = 'Mã giảm giá không hợp lệ!';
                setPopupInfo({message: errorMessage, type: 'error', visible: true});
            } else {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/promotion/code/${code}`);
                    try {
                        const response2 = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/promotion/checkDate/${code}`);
                        if (response2.data === "expired") {
                            const errorMessage = 'Mã giảm giá đã hết hạn!';
                            setPopupInfo({message: errorMessage, type: 'error', visible: true});
                        } else {
                            setDiscount(response.data.discount);
                            const successMessage = 'Áp dụng mã giảm giá thành công!';
                            setPopupInfo({message: successMessage, type: 'success', visible: true});
                        }
                    } catch (error) {
                        console.error("Error checking date:", error);
                    }
                } catch (error) {
                    const errorMessage = 'Mã giảm giá không hợp lệ!';
                    setPopupInfo({message: errorMessage, type: 'error', visible: true});
                }
            }
        }
    };

    const handlePromotionCodeSelect = (code) => {
        if (code === '') {
            setDiscountCode(null);
            setDiscount(0)
            setShowPromotionList(false);
        } else {
            applyDiscountCode(code);
        }
    };
    useEffect(() => {
        const fetchCarts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/cart/items`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCart(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };
        fetchCarts();
    }, []);
    return (
        <section className="shoping-cart spad">
            <div
                className={`popup popup--icon -success js_success-popup ${popupInfo.visible && popupInfo.type === 'success' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Thành công
                    </h3>
                    <p style={{marginBottom: "10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--success" data-for="js_success-popup"
                                onClick={hidePopup}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>

            <div
                className={`popup popup--icon -error js_error-popup ${popupInfo.visible && popupInfo.type === 'error' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Thất bại
                    </h3>
                    <p style={{marginBottom: "10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--error" data-for="js_error-popup"
                                onClick={hidePopup}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                <tr>
                                    <th className="shoping__product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                    <th></th>
                                </tr>
                                </thead>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={5} style={{paddingTop: '30px'}}>
                                            <div className="loader"></div>
                                        </td>
                                    </tr>
                                ) : (
                                    cart.length > 0 ? (
                                        <tbody>
                                        {cart.map(cartItem => (
                                            <Item
                                                key={cartItem.id}
                                                id={cartItem.id}
                                                productId={cartItem.product.id}
                                                name={cartItem.product.title}
                                                image={cartItem.product.image}
                                                price={cartItem.product.currentPrice}
                                                quantity={cartItem.quantity}
                                                updateCart={updateCart}
                                            />
                                        ))}
                                        </tbody>
                                    ) : (
                                        <tr>
                                            <td colSpan={5} style={{paddingTop: '30px'}}>Bạn chưa có sản phẩm nào trong
                                                Giỏ hàng.
                                            </td>
                                        </tr>
                                    )
                                )}
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <Link to="/product-list/1" className="primary-btn cart-btn">TIẾP TỤC MUA SẮM</Link>
                            <Link to="#" className="primary-btn cart-btn cart-btn-right"><span
                                className="icon_loading"></span>
                                &nbsp; Cập nhật giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                                <h5>Mã giảm giá</h5>
                                <button onClick={() => setShowPromotionList(!showPromotionList)}
                                        className="promo-button">Chọn mã giảm giá
                                </button>
                                {showPromotionList && (
                                    <PromotionCodeList onSelectCode={handlePromotionCodeSelect}/>
                                )}
                                {discount !== 0 && (
                                    <div className="selected-code">
                                        Mã giảm giá đã chọn: {discountCode}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout">
                            <h5>Tổng tiền giỏ hàng</h5>
                            <ul>
                                <li>Tạm tính <span>{formatCurrency(subTotal)}</span></li>
                                {discount > 0 ? (<li>Áp dụng mã giảm giá<span>{discount}%</span></li>) : null}
                                <li>Tổng tiền <span>{formatCurrency(total)}</span></li>
                            </ul>
                            {cart.length > 0 ? (
                                    <CheckoutButton discountCode={discountCode}/>)
                                :
                                (<Link to={"/product-list/1"} className="primary-btn">TIẾP TỤC MUA SẮM</Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const CheckoutButton = ({discountCode}) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout', {state: {discountCode}});
    };

    return (
        <button className="primary-btn" style={{width: "100%", border: "none", borderRadius: "4px"}}
                onClick={handleCheckout}>
            CHUYỂN ĐẾN PHẦN THANH TOÁN
        </button>
    );
};
export const Cart = () => {
    return (
        <div className={"container-cart"}>
            <Breadcrumb/>
            <ProductsInCart/>
        </div>
    )
}
export default Cart;