import "../../assets/css/style-cart.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import React, {useEffect, useState} from "react";
import {MdOutlineDelete} from "react-icons/md";
import axios from "axios";
import formatCurrency from "../../../utils/formatCurrency";
import APIService from "../../../service/APIService";

export const Item = ({id, productId, name, image, price, quantity, updateCart}) => {
    const [popupInfo, setPopupInfo] = useState({message: '', type: '', visible: false});
    const [remainingQuantity, setRemainingQuantity] = useState(null);
    const [notify, setNotify] = useState();
    const handleIncrease = async () => {
        if (quantity < remainingQuantity) {
            try {
                const response = await axios.put(`http://localhost:8080/api/cart/increase/${id}`);
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
            const response = await axios.put(`http://localhost:8080/api/cart/decrease/${id}`);
            console.log("Product decreased successfully:", response.data);
            updateCart();
        } catch (error) {
            console.error("Error decreasing product:", error);
        }
    };
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/cart/remove/${id}`);
            const successMessage = 'Xóa sản phẩm ra khỏi giỏ hàng thành công!';
            setPopupInfo({message: successMessage, type: 'success', visible: true});
            updateCart();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };
    const hidePopup = () => {
        setPopupInfo((prevInfo) => ({...prevInfo, visible: false}));
    };

    const checkRemainingQuantity = async () => {
        try {
            const result = await new APIService().fetchData(`http://localhost:8080/api/inventories/inventory/${productId}`);
            setRemainingQuantity(result.remainingQuantity);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        checkRemainingQuantity();
    }, []);


    useEffect(() => {
        const buttons = Array.from(document.querySelectorAll('button.add_cart_btn'));
        buttons.forEach(button => button.addEventListener('click', handleDelete));
        return () => {
            buttons.forEach(button => button.removeEventListener('click', handleDelete));
        };
    }, []);
    return (
        <tr id={id}>
            <td className="shoping__cart__item">
                <Link to={`/product-detail/${productId}`}><img src={image} alt=""
                                                               style={{
                                                                   width: "85px",
                                                                   height: "85px",
                                                                   objectFit: "cover"
                                                               }}/></Link>
                <Link to={`/product-detail/${productId}`} style={{maxWidth: '380px'}}>
                    <p>{name}</p>
                    <p style={{color: 'red'}}>{notify}</p>
                </Link>
            </td>
            <td className="shoping__cart__price">
                {formatCurrency(price)}
            </td>
            <td className="shoping__cart__quantity" style={{display: "flex", justifyContent: "center"}}>
                <div className="value-button" id="decrease"
                     onClick={handleDecrease}>-
                </div>
                <input type="number" id="number" value={quantity}/>
                <div className="value-button" id="increase"
                     onClick={handleIncrease}>+
                </div>
            </td>
            <td className="shoping__cart__total">
                {formatCurrency(quantity * price)}
            </td>
            <td className="shoping__cart__item__close">
                <MdOutlineDelete size={"30px"}
                                 onClick={handleDelete}
                />
            </td>

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
        </tr>
    )
}
export const ProductsInCart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    useEffect(() => {
        if (!user) {
            navigate("/sign-in");
        }
    }, [user, navigate]);
    const token = user ? user.token : null;
    useEffect(() => {
        const calculateTotals = () => {
            let subtotalAmount = 0;
            cart.forEach(item => {
                subtotalAmount += item.quantity * item.product.currentPrice;
            });
            setTotal(subtotalAmount);
        };

        calculateTotals();
    }, [cart]);
    const updateCart = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/cart/items", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching carts:", error);
        }
    };
    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/cart/items", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCart(response.data);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };
        fetchCarts();
    }, []);
    return (
        <section className="shoping-cart spad" style={{margin: "0 90px 0 90px"}}>
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
                                {cart.length > 0 ? (<tbody>
                                {cart.map(cart => (
                                    <Item
                                        key={cart.id}
                                        id={cart.id}
                                        productId={cart.product.id}
                                        name={cart.product.title}
                                        image={cart.product.image}
                                        price={cart.product.currentPrice}
                                        quantity={cart.quantity}
                                        updateCart={updateCart}
                                    />
                                ))}
                                </tbody>) : <tr>
                                    <td colSpan={5} style={{paddingTop: '30px'}}>Bạn chưa có sản phẩm nào trong Giỏ
                                        hàng.
                                    </td>
                                </tr>}
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
                                <form action="shopping-cart#">
                                    <input type="text" placeholder="Nhập mã giảm giá"/>
                                    <button type="submit" className="site-btn">APPLY</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout">
                            <h5>Tổng tiền giỏ hàng</h5>
                            <ul>
                                <li>Tạm tính <span>{formatCurrency(total)}</span></li>
                                <li>Tổng tiền <span>{formatCurrency(total)}</span></li>
                            </ul>
                            {cart.length > 0 ? (
                                    <Link to={"/checkout"} className="primary-btn">CHUYỂN ĐẾN PHẦN THANH TOÁN</Link>)
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
export const Cart = () => {
    const location = useLocation()
    return (
        <div>
            <Breadcrumb location={location}/>
            <ProductsInCart/>
        </div>
    )
}
export default Cart;