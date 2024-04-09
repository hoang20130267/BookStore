import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import Product from "./sub-components/Product";
import "../../assets/css/style-product.css"
import Breadcrumb from "../../components/general/Breadcrumb";
import SideContent from "./sub-components/SideContent";
import Pagination from "../../components/general/Pagination";
import APIService from "../../../service/APIService";

const apiService = new APIService();
const ProductList = () => {
    const location = useLocation();
    const params = useParams();
    const lastParam = params['*'].split('/').pop();
    const [products, setProducts] = useState([]);
    console.log(process.env.REACT_APP_API_ENDPOINT);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.fetchData(`http://localhost:8080/api/products/category/${lastParam}`);
                const first24Products = result.slice(0, 24);
                setProducts(first24Products);

            } catch (error) {
                console.error('Error fetching products', error);
            }
        }
        fetchData();
    }, [lastParam])
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="site-content space-bottom-3 mt-8">
                <div className="container">
                    <div className="row">
                        <div id="primary" className="content-area order-2">
                            <main id="main" className="site-main" role="main">
                                <div className="container p-0">
                                    <div
                                        className="shop-control-bar d-lg-flex justify-content-between align-items-center mb-5 text-center text-md-left">
                                        <div className="wp-block-bwgb-products-carousel__inner"
                                             style={{fontSize: "18px", fontWeight: 500}}>
                                            Tất cả sản phẩm
                                        </div>
                                        <div className="shop-control-bar__right d-md-flex align-items-center">
                                            <p className="woocommerce-result-count mr-3">
                                                Sắp xếp theo: </p>
                                            <form className="woocommerce-ordering mb-4 m-md-0" method="get">
                                                <select name="orderby"
                                                        className="orderby js-select dropdown-select"
                                                        aria-label="Shop order"
                                                        data-style="border-bottom shadow-none outline-none py-2">
                                                    <option value="menu_order" defaultValue>Mặc định
                                                    </option>
                                                    <option value="popularity">A&rarr;Z</option>
                                                    <option value="rating">Z&rarr;A</option>
                                                    <option value="price">Giá tăng dần</option>
                                                    <option value="price-desc">Giá giảm dần</option>
                                                    <option value="date">Mới nhất</option>
                                                </select>
                                                <input type="hidden" name="paged" value="1"/>
                                            </form>
                                            <form method="POST" action
                                                  className="number-of-items ml-md-4 mb-4 m-md-0 d-none d-xl-block">
                                                <select name="ppp"
                                                        className="dropdown-select orderby"
                                                        data-style="border-bottom shadow-none outline-none py-2">
                                                    <option value="24">24 sản phẩm</option>
                                                    <option value="26">36 sản phẩm</option>
                                                    <option value="48">48 sản phẩm</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-view">
                                    <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-lg-4 row-cols-wd-4 border-top border-left mb-6">
                                        {products.map(product => (<Product key={product.id} info={product}/>))}
                                    </ul>
                                    <Pagination/>
                                </div>
                            </main>
                        </div>
                        <SideContent/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductList;
