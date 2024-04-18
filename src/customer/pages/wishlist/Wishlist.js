import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {useEffect, useState} from "react";
import APIService from "../../../service/APIService";
import formatCurrency from "../../../utils/formatCurrency";

export const ProductsInWishlist = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiService = new APIService(token);
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const result = await apiService.fetchData("http://localhost:8080/api/user/favorites");
            setFavoriteProducts(result);
        } catch (error) {
            console.log("Error fetching favorite products")
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])
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
                                    <th style={{paddingLeft: "120px"}}>Thích</th>
                                    <th style={{paddingLeft: "200px"}}>Bỏ thích</th>
                                </tr>
                                </thead>
                                <tbody>
                                {favoriteProducts.map(favorite => (<tr>
                                    <td key={favorite.id} className="shoping__cart__item">
                                        <img src={favorite.product?.image} alt=""
                                             style={{width: "85px", height: "85px", objectFit: "cover"}}/>
                                        <Link to={`/product-detail/${favorite.product?.id}`}>
                                            <h5>
                                                {favorite.product?.title}
                                            </h5>
                                        </Link>
                                    </td>
                                    <td className="shoping__cart__price"
                                        style={{paddingLeft: "10px", paddingTop: "60px"}}>
                                        {formatCurrency(favorite.product?.currentPrice)}
                                    </td>
                                    <td className="shoping__cart__total"
                                        style={{paddingLeft: "130px", paddingTop: "60px"}}>
                                        <i className="fa fa-heart">
                                        </i></td>
                                    <td className="shoping__cart__item__close"
                                        style={{paddingRight: "80px", paddingTop: "60px"}}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </td>
                                </tr>))}
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
    const location = useLocation();
    return (
        <div>
            <Breadcrumb location={location}/>
            <ProductsInWishlist/>
        </div>
    )
}
export default Wishlist;