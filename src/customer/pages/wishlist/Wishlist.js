import {Link} from "react-router-dom";
export const PageLink = () => {
    return (
        <div className="page-header border-bottom">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center py-4">
                    <nav className="woocommerce-breadcrumb font-size-2"><a className="h-primary"
                                                                           href="https://bookworm.madrasthemes.com">Home</a><span
                        className="breadcrumb-separator mx-2"><i
                        className="fas fa-angle-right"></i></span>Wishlist
                    </nav>
                </div>
            </div>
        </div>
    )
}
export const ProductsInWishlist = () => {
    return (
        <section className="shoping-cart spad" style={{ margin: "0 90px 0 90px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                <tr>
                                    <th className="shoping__product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th style={{paddingLeft: "120px"}}>Thích</th>
                                    <th style={{paddingLeft: "200px"}}>Bỏ thích</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="src/customer/pages/wishlist/Wishlist" alt=""
                                             style={{width: "85px", height: "85px", objectFit: "cover"}}/>
                                            <a href="src/customer/pages/wishlist/Wishlist">
                                                <h5>
                                                    Đắc Nhân Tâm
                                                </h5>
                                            </a>
                                    </td>
                                    <td className="shoping__cart__price" style={{paddingLeft: "10px", paddingTop:"60px"}}>
                                        150.000₫
                                    </td>
                                    <td className="shoping__cart__total" style={{paddingLeft: "130px", paddingTop:"60px"}}>
                                        <i className="fa fa-heart">
                                        </i></td>
                                    <td className="shoping__cart__item__close"style={{paddingRight: "80px", paddingTop:"60px"}}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export const Wishlist = () => {
    return (
        <div>
            <PageLink/>
            <ProductsInWishlist/>
        </div>
    )
}
export default Wishlist;