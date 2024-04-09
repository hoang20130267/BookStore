import "../../assets/css/style-cart.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import React, {useEffect, useState} from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector} from "react-redux";
import axios from "axios";

export const Item = ({id, idProduct, name,image, price, quantity, token, updateCart}) => {
    const handleIncrease = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/api/cart/add/${idProduct}`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            updateCart();
            console.log("Product increased successfully:", response.data);
        } catch (error) {
            console.error("Error increasing product:", error);
        }
    };
    const handleDecrease = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/cart/decrease/${id}`);
            console.log("Product increased successfully:", response.data);
            updateCart();
        } catch (error) {
            console.error("Error increasing product:", error);
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
            <td className="shoping__cart__item" style={{display:"flex"}}>
                <img src={image} alt=""
                     style={{width: "85px", height: "85px", objectFit: "cover"}}/>
                <p>{name}</p>
            </td>
            <td className="shoping__cart__price" style={{paddingTop: "60px"}}>
                {price}đ
            </td>
            <td className="shoping__cart__quantity" style={{paddingTop: "50px"}}>
                <div className="value-button" id="decrease"
                     onClick={handleDecrease}>-
                </div>
                <input type="number" id="number"  value={quantity}/>
                <div className="value-button" id="increase"
                     onClick={handleIncrease}>+
                </div>
            </td>
            <td className="shoping__cart__total" style={{paddingTop: "60px"}}>
                {quantity * price}đ
            </td>
            <td className="shoping__cart__item__close" style={{paddingTop: "60px"}}>
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
                subtotalAmount += item.quantity * item.product.current_price;
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
                                <tbody>
                                {cart.map(cart => (
                                    <Item
                                        id={cart.id}
                                        idProduct={cart.product.id}
                                        name={cart.product.title}
                                        image={cart.product.image}
                                        price={cart.product.current_price}
                                        quantity={cart.quantity}
                                        token={token}
                                        updateCart={updateCart}
                                    />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="shopping-cart#" className="primary-btn cart-btn">TIẾP TỤC MUA SẮM</a>
                            <a href="shopping-cart#" className="primary-btn cart-btn cart-btn-right"><span
                                className="icon_loading"></span>
                                &nbsp; Cập nhật giỏ hàng</a>
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
                                <li>Tạm tính <span>{total} Đồng</span></li>
                                <li>Tổng tiền <span>{total} Đồng</span></li>
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