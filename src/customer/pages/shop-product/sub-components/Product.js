import React, {useState} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";
import formatCurrency from "../../../../utils/formatCurrency";
import PopupNotification from "../../../components/general/PopupNotification";
import APIService from "../../../../service/APIService";
import ModalRequiresLogin from "../../../components/general/ModalRequiresLogin";

const Product = (props) => {
    const navigate = useNavigate();
    const productInfo = props.info;
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiService = new APIService(token);
    const [showPopup, setShowPopup] = useState(false);
    const [popupInfo, setPopupInfo] = useState('');
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

    const handleButtonClick = (detail) => {
        setPopupInfo(detail);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const handleCloseCartModal = () => {
        setIsCartModalOpen(false);
    }

    const handleCloseWishlistModal = () => {
        setIsWishlistModalOpen(false);
    }

    const addToCart = async () => {
        if (!user) {
            setIsCartModalOpen(true);
        } else {
            const requestData = {product: {id: productInfo.id}, quantity: 1};
            try {
                const responseData = await apiService.sendData(`http://localhost:8080/api/cart/add`, requestData);
                console.log('Sản phẩm đã được thêm vào giỏ hàng:', responseData);
                handleButtonClick("Sản phẩm đã được thêm vào Giỏ hàng");
            } catch (error) {
                console.error('Lỗi khi thêm vào giỏ hàng:', error);
            }
        }
    };

    const addFavoriteProduct = async () => {
        if (!user) {
            setIsWishlistModalOpen(true);
        } else {
            try {
                const result = await apiService.sendData(`http://localhost:8080/api/user/favorites/${productInfo.id}`);
                console.log("Product added to wishlist successfully", result);
                handleButtonClick("Sản phẩm đã được thêm vào Yêu thích");
            } catch (error) {
                console.error("Error adding favorite product");
            }
        }
    }

    return (
        <li className="add-to-wishlist-after_add_to_cart product type-product post-108 status-publish first instock product_cat-cookbooks product_cat-cooking-education-reference product_cat-c has-post-thumbnail taxable shipping-taxable purchasable product-type-simple col">
            <div className="bookworm-product-grid">
                <div className="product__inner overflow-hidden p-3">
                    <div className="position-relative d-block">
                        <div className="woocommerce-loop-product__header">
                            <Link to={`/product-detail/${productInfo.id}`}
                                  className="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img
                                src={productInfo.image}
                                className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                alt decoding="async"/></Link>
                        </div>
                        <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark  text-height-2">
                                <Link to={`/product-detail/${productInfo.id}`}
                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                    {productInfo.title}</Link>
                            </h2>
                            <div className="price-label">
                                <span className="price d-flex justify-content-start align-items-center">
                                    <p className="current-price mr-2">
                                        <span className="price">{formatCurrency(productInfo.currentPrice)}</span>
                                    </p>
                                    <p className="old-price">
                                        <span className="price">{formatCurrency(productInfo.oldPrice)}</span>
                                    </p>
                                </span>
                            </div>
                            <div className="rate d-flex align-items-center">
                                <div className="star-container">
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
                                <Link to="" data-quantity="1" onClick={addToCart}
                                      className="button product_type_simple add_to_cart_button ajax_add_to_cart text-uppercase text-dark h-dark font-weight-medium mr-auto"
                                      title="Thêm vào giỏ hàng">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                            <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                <div className="yith-wcwl-add-button">
                                    <Link to="" onClick={addFavoriteProduct}
                                          className="add_to_wishlist single_add_to_wishlist"
                                          title="Thêm vào yêu thích">
                                        <i className="fa-regular fa-heart"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <ModalRequiresLogin isOpen={isCartModalOpen}
                                            onClose={handleCloseCartModal}
                                            toDo={"thêm vào Giỏ hàng"}/>
                        <ModalRequiresLogin isOpen={isWishlistModalOpen}
                                            onClose={handleCloseWishlistModal}
                                            toDo={"thêm vào Yêu thích"}/>
                        {showPopup && <PopupNotification info={popupInfo} onClose={handleClosePopup}/>}
                    </div>
                </div>
            </div>
        </li>);
}
export default Product;
