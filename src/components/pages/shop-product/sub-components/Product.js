import React from "react";
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <li className="add-to-wishlist-after_add_to_cart product type-product post-108 status-publish first instock product_cat-cookbooks product_cat-cooking-education-reference product_cat-c has-post-thumbnail taxable shipping-taxable purchasable product-type-simple col">
            <div className="bookworm-product-grid">
                <div className="product__inner overflow-hidden p-3 p-md-4d875">
                    <div className="position-relative d-block">
                        <div className="woocommerce-loop-product__header">
                            <Link to="/product-detail"
                                  className="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img
                                width="150" height="200"
                                src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-300x449-1-150x200.jpg"
                                className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                alt decoding="async"/></Link>
                        </div>
                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark  text-height-2">
                                <Link to="/product-detail"
                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                    Buttermilk Graffiti: A Chef&#8217;s Journey to
                                    Discover
                                    America&#8217;s New Melting-Pot Cuisine </Link>
                            </h2>
                            <div className="price-label">
                                <span className="price d-flex justify-content-start align-items-center">
                                    <p className="current-price mr-2">
                                        <span className="price">130000</span>
                                    </p>
                                    <p className="old-price">
                                        <span className="price">150000</span>
                                    </p>
                                </span>
                            </div>
                            <div className="rate d-flex align-items-center">
                                <div className="star-container d-inline-block">
                                    <span className="checked"><i className="fa-solid fa-star"></i></span>
                                    <span className="checked"><i className="fa-solid fa-star"></i></span>
                                    <span className="checked"><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                </div>
                                <span className="ml-1 pt-1" style={{color: "#CDCFD0"}}>(2)</span>
                            </div>
                        </div>
                        <div
                            className="woocommerce-loop-product__hover product__hover d-flex align-items-center justify-content-between mt-2">
                            <div className="cart-fragment">
                                <a href="?add-to-cart=108" data-quantity="1"
                                   className="button product_type_simple add_to_cart_button ajax_add_to_cart text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                   title="Thêm vào giỏ hàng">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </a>
                            </div>
                            <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                <div className="yith-wcwl-add-button">
                                    <a href="?add_to_wishlist=108" className="add_to_wishlist single_add_to_wishlist"
                                       title="Thêm vào yêu thích">
                                        <i className="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>);
}
export default Product;