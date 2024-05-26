import "../../assets/css/style-cart.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import React, {useEffect, useState} from "react";
import {MdOutlineDelete} from "react-icons/md";
import axios from "axios";
import formatCurrency from "../../../utils/formatCurrency";

export const Item = ({id, productId, name, image, price, quantity, updateCart}) => {
    const handleIncrease = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/cart/increase/${id}`);
            console.log("Product increased successfully:", response.data);
            updateCart();
        } catch (error) {
            console.error("Error increasing product:", error);
        }
    };
    const handleDecrease = async () => {
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
            alert("Xóa sản phẩm ra khỏi giỏ hàng thành công");
            updateCart();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };
    return (
        <tr id={id}>
            <td className="shoping__cart__item" style={{display: "flex"}}>
                <Link to={`/product-detail/${productId}`}><img src={image} alt=""
                                                               style={{
                                                                   width: "85px",
                                                                   height: "85px",
                                                                   objectFit: "cover"
                                                               }}/></Link>
                <Link to={`/product-detail/${productId}`}><p>{name}</p></Link>
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
                console.error("Error fetching blogs:", error);
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
                                    <td colSpan={5} style={{paddingTop: '30px'}}>Bạn chưa có sản phẩm nào trong Giỏ hàng.</td>
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
                            <Link to={"/checkout"} className="primary-btn">CHUYỂN ĐẾN PHẦN THANH TOÁN</Link>
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