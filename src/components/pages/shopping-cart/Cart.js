import "./../../../assets/css/style-cart.css"
import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../general/Breadcrumb";

export const ProductsInCart = () => {
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
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="" alt=""
                                             style={{width: "85px", height: "85px", objectFit: "cover"}}/>
                                        <h5>Đắc nhân tâm</h5>
                                    </td>
                                    <td className="shoping__cart__price" style={{paddingTop: "60px"}}>
                                        150.000đ
                                    </td>
                                    <td className="shoping__cart__quantity" style={{paddingTop: "50px"}}>
                                        <div className="">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total" style={{paddingTop: "60px"}}>
                                        150.000đ
                                    </td>
                                    <td className="shoping__cart__item__close" style={{paddingTop: "60px"}}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="#" className="primary-btn cart-btn">TIẾP TỤC MUA SẮM</a>
                            <a href="#" className="primary-btn cart-btn cart-btn-right"><span
                                className="icon_loading"></span>
                                &nbsp; Cập nhật giỏ hàng</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                                <h5>Mã giảm giá</h5>
                                <form action="#">
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
                                <li>Tạm tính <span>150.000 Đồng</span></li>
                                <li>Tổng tiền <span>150.000 Đồng</span></li>
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