import React, {useEffect, useState} from "react";
import Product from "../shop-product/sub-components/Product";
import "../../assets/css/product-detail.css"
import "../../assets/css/style-comment.css"
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";
import ProductImagesSlider from "./subcomponents/ProductImagesSlider";
import APIService from "../../../service/APIService";
import DetailItem from "./subcomponents/DetailItem";
import Rating from '@mui/material/Rating';
import {FaTrashCan} from "react-icons/fa6";
import {FaRegEdit} from "react-icons/fa";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollToTop from "../../components/general/ScrollToTop";
import Breadcrumb from "../../components/general/Breadcrumb";

export const SingleProduct = (props) => {
    const product = props?.product;
    const comments = props.comments;
    const [quantity, setQuantity] = useState(1);
    const [popupInfo, setPopupInfo] = useState({message: '', type: '', visible: false});
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteId, setFavoriteId] = useState('');
    const [rating, setRating] = useState(0);
    const [commentQuantity, setCommentQuantity] = useState(0);
    const [remainingQuantity, setRemainingQuantity] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (comments) {
            let ratingTotal = 0;
            comments.forEach(comment => {
                ratingTotal += comment.rating;
            })
            const rating = ratingTotal / comments.length;
            setRating(rating);
            setCommentQuantity(comments.length);
        }
        if (product.id) {
            checkRemainingQuantity();
        }
    }, [product])

    const handlePlus = () => {
        if (remainingQuantity > 0) {
            setQuantity((prevQuantity) => {
                const newQuantity = prevQuantity + 1;
                return newQuantity > remainingQuantity ? remainingQuantity : newQuantity;
            });
        }
    };

    const handleMinus = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity - 1;
            return newQuantity < 1 ? 1 : newQuantity;
        });
    };

    const handleBlur = () => {
        if (quantity === '') {
            setQuantity(1);
        }
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        const numberInput = parseInt(input, 10);

        if (input === '') {
            setQuantity('');
        } else if (!isNaN(numberInput)) {
            if (numberInput > remainingQuantity) {
                setQuantity(remainingQuantity);
            } else {
                setQuantity(numberInput);
            }
        }
    };

    const checkRemainingQuantity = async () => {
        try {
            const result = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/inventories/inventory/${product.id}`);
            setRemainingQuantity(result.remainingQuantity);
        } catch (error) {
            console.error(error);
        }
    }

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiService = new APIService(token);
    const addToCart = async () => {
        if (!user) {
            const errorMessage = 'Bạn cần đăng nhập trước khi thêm vào giỏ hàng!';
            setPopupInfo({message: errorMessage, type: 'error', visible: true});
        } else {
            const requestData = {product: {id: product.id}, quantity: quantity};
            try {
                const responseData = await apiService.sendData(`${process.env.REACT_APP_ENDPOINT_API}/cart/add`, requestData);
                setPopupInfo({message: responseData, type: 'success', visible: true});
            } catch (error) {
                if (error.response) {
                    setPopupInfo({message: error.response.data, type: 'error', visible: true});
                }
            }
        }
    };
    const handleBuyNow = () => {
        navigate('/checkout', {
            state: {product: product, quantity: quantity, subTotal: product.currentPrice * quantity, type: 'buy-now'}
        });
    }
    const addFavoriteProduct = async () => {
        if (!user) {
            const errorMessage = 'Bạn phải đăng nhập trước khi thêm vào yêu thích!';
            setPopupInfo({message: errorMessage, type: 'error', visible: true});
        } else {
            try {
                const result = await apiService.sendData(`${process.env.REACT_APP_ENDPOINT_API}/user/favorites/${product.id}`);
                const successMessage = result.message || 'Sản phẩm đã được thêm vào yêu thích!';
                setPopupInfo({message: successMessage, type: 'success', visible: true});
                setIsFavorite(true);

            } catch (error) {
                console.error("Error adding favorite product");
            }
        }
    }
    const deleteFavoriteProduct = async () => {
        try {
            await apiService.deleteData(`${process.env.REACT_APP_ENDPOINT_API}/user/favorites/${favoriteId}`);
            const successMessage = 'Sản phẩm đã được xóa khỏi yêu thích!';
            setPopupInfo({message: successMessage, type: 'success', visible: true});
            setIsFavorite(false);

        } catch (error) {
            console.error("Error deleting favorite product");
        }
    }
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/user/favorites`);
                const favoriteProduct = result.find(favorite => favorite.product?.id === product.id);
                const isFavoriteProduct = favoriteProduct ? true : false;
                const favoriteProductId = favoriteProduct ? favoriteProduct.id : null;
                setFavoriteId(favoriteProductId);
                setIsFavorite(isFavoriteProduct)
            } catch (error) {
                console.error("Error fetching favorite products")
            }
        }
        if (user) {
            fetchProducts();
        }
    }, [product.id, isFavorite])

    const hidePopup = () => {
        setPopupInfo((prevInfo) => ({...prevInfo, visible: false}));
    };

    return (
        <>
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


            <div className="single-product-container border my-4 py-4">
                <div className="row single-product-wrapper m-0">
                    <div className="bookworm-product-gallery col-lg-5">
                        <ProductImagesSlider images={product?.images}/>
                    </div>
                    <div className="summary entry-summary col-lg-7 pl-lg-0">
                        <div className="summary entry-summary">
                            <div className="summary__inner px-lg-4">
                                <h1 className="product_title entry-title">{product.title}</h1>
                                <div
                                    className="rating-author_info font-size-2 mb-4 d-flex flex-wrap align-items-center">
                                    <div className="d-flex align-items-center">
                                        <Rating name="size-small" value={rating} readOnly size="small"/>
                                        <Link to="#"><p className="ml-2 mb-0"
                                                        style={{color: "#CDCFD0"}}>({commentQuantity} Đánh giá)</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="price-label">
                                    {product.currentPrice !== product.oldPrice ? (
                                        <span className="price d-flex justify-content-start align-items-center">
                                    <p className="current-price mr-2">
                                        <span className="price">{formatCurrency(product.currentPrice)}</span>
                                    </p>
                                    <p className="old-price">
                                        <span className="price">{formatCurrency(product.oldPrice)}</span>
                                    </p>
                                </span>
                                    ) : (<span className="price d-flex justify-content-start align-items-center">
                                    <p className="current-price mr-2">
                                        <span className="price">{formatCurrency(product.oldPrice)}</span>
                                    </p>
                                </span>)}
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                    <div className="lgdBsd"><p className="label">Số
                                        Lượng</p>
                                        <div className="group-input">
                                            <button disabled={quantity === 1} onClick={handleMinus}><i
                                                className="fa-solid fa-minus"></i></button>
                                            <input type="text" value={quantity}
                                                   className="input"
                                                   onChange={handleInputChange}
                                                   onBlur={handleBlur}
                                                   min={1}
                                                   max={remainingQuantity}
                                            />
                                            <button onClick={handlePlus}><i className="fa-solid fa-plus"></i></button>
                                            {remainingQuantity !== 0 && (
                                                <div style={{
                                                    marginLeft: '15px',
                                                    color: '#757575'
                                                }}>{remainingQuantity} sản phẩm có sẵn</div>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-groups">
                                    <button type="button" className="add_cart_btn" disabled={remainingQuantity === 0}
                                            onClick={addToCart}>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        {remainingQuantity === 0 ? 'hết hàng' : 'thêm vào giỏ hàng'}
                                    </button>
                                    <button type="button" disabled={remainingQuantity === 0} className="buy_now_btn"
                                            onClick={handleBuyNow}>
                                        <i className="fa-solid fa-wallet"></i>
                                        mua ngay
                                    </button>
                                </div>
                                {!isFavorite ? (<div className="add-wishlist-button mt-4">
                                        <Link to="" rel="nofollow" onClick={addFavoriteProduct}
                                              className="add_to_wishlist single_add_to_wishlist"
                                              data-title="Add to wishlist">
                                            <i className="fa-regular fa-heart"></i> <span
                                            className="text">Thêm vào yêu thích</span>
                                        </Link>
                                    </div>) :
                                    (<div className="add-wishlist-button mt-4">
                                        <Link style={{color: '#f75454'}} to="" rel="nofollow"
                                              onClick={deleteFavoriteProduct}
                                              className="add_to_wishlist single_add_to_wishlist"
                                              data-title="Add to wishlist">
                                            <i className="fa-solid fa-heart"></i> <span
                                            className="text">Yêu thích</span>
                                        </Link>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop/>
        </>
    )
}
export const Information = ({detail}) => {
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {
        if (detail) {
            setProductDetails(detail);
        }
    }, [detail])
    return (
        <div className="woocommerce-tabs wc-tabs-wrapper mx-lg-auto">
            <div className="classic-nav">
                <div
                    className="border p-3 my-4 woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab font-size-2"
                    id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
                    <h4 className="font-size-3">Mô tả sản phẩm</h4>
                    <div dangerouslySetInnerHTML={{__html: productDetails.description}}/>
                </div>
                <div
                    className="border p-3 my-4 woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab font-size-2"
                    id="tab-additional_information" role="tabpanel"
                    aria-labelledby="tab-title-additional_information">
                    <h4 className="font-size-3">Thông tin sản phẩm</h4>
                    <div className="table-responsive">
                        <table
                            className="woocommerce-product-attributes shop_attributes table table-hover table-borderless">
                            {productDetails.productSku && (
                                <DetailItem name={"Mã sản phẩm"} value={productDetails.productSku}/>)}
                            {productDetails.supplier && (
                                <DetailItem name={"Nhà cung cấp"} value={productDetails.supplier}/>)}
                            {productDetails.publisher && (
                                <DetailItem name={"Nhà xuất bản"} value={productDetails.publisher}/>)}
                            {productDetails.publishYear && (
                                <DetailItem name={"Năm xuất bản"} value={productDetails.publishYear}/>)}
                            {productDetails.author && (<DetailItem name={"Tác giả"} value={productDetails.author}/>)}
                            {productDetails.brand && (<DetailItem name={"Thương hiệu"} value={productDetails.brand}/>)}
                            {productDetails.origin && (<DetailItem name={"Xuất xứ"} value={productDetails.origin}/>)}
                            {productDetails.color && (<DetailItem name={"Màu sắc"} value={productDetails.color}/>)}
                            {productDetails.weight && (
                                <DetailItem name={"Trọng lượng"} value={productDetails.weight}/>)}
                            {productDetails.size && (<DetailItem name={"Kích cỡ"} value={productDetails.size}/>)}
                            {productDetails.quantityOfPage && productDetails.quantityOfPage !== -1 && (
                                <DetailItem name={"Số trang"} value={productDetails.quantityOfPage}/>)}
                        </table>
                    </div>
                </div>
                <Comment/>
            </div>
        </div>
    )
}
export const Comment = () => {
    const [isLogin, setIsLogin] = useState(false);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [value, setValue] = React.useState(2);
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = React.useState();
    const [rating, setRating] = useState(0);
    const [isBought, setIsBought] = useState(false);
    const apiService = new APIService();
    const {id} = useParams();
    const [content, setContent] = useState('');
    const token = user ? user.token : null;
    const idUser = user ? user.id : null;
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const data = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/comment/product/${id}`);
                setCommentCount(data.length);
                setComments(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchComments();
    }, []);

    const [fiveStarComments, setFiveStarComments] = useState(0);
    const [fourStarComments, setFourStarComments] = useState(0);
    const [threeStarComments, setThreeStarComments] = useState(0);
    const [twoStarComments, setTwoStarComments] = useState(0);
    const [oneStarComments, setOneStarComments] = useState(0);

    useEffect(() => {
        if (comments.length > 0) {
            setFiveStarComments(comments.filter(comment => comment.rating === 5).length);
            setFourStarComments(comments.filter(comment => comment.rating === 4).length);
            setThreeStarComments(comments.filter(comment => comment.rating === 3).length);
            setTwoStarComments(comments.filter(comment => comment.rating === 2).length);
            setOneStarComments(comments.filter(comment => comment.rating === 1).length);
            let ratingTotal = 0;
            comments.forEach(comment => {
                ratingTotal += comment.rating;
            })
            setRating((ratingTotal / comments.length).toFixed(1));
        } else {
            setRating(0);
        }
    }, [comments])

    useEffect(() => {
        const isBoughtYet = async () => {
            try {
                const order = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/orders/product/${id}/user/${idUser}`);
                const comment = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/comment/auth/${idUser}/product/${id}`);
                if (order.length > comment.length) {
                    setIsBought(true);
                } else {
                    setIsBought(false);
                }
            } catch (error) {
                console.error("Error fetching comment:", error);
                setIsBought(false);
            }
        };
        isBoughtYet();
    }, []);

    const updateListComment = async () => {
        try {
            const data = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/comment/product/${id}`);
            setComments(data);
        } catch (error) {
            console.error("Error update comment:", error);
        }
    };
    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${process.env.REACT_APP_ENDPOINT_API}/comment/add/${id}`, {
                rate: value,
                detail: content
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            updateListComment();
            console.log("Product increased successfully:", response.data);
            setIsFormSubmitted(true);
        } catch (error) {
            console.error("Error increasing product:", error);
        }
    };
    useEffect(() => {
        if (isFormSubmitted) {
            setValue(2);
            setContent('');
            setIsFormSubmitted(false);
        }
    }, [isFormSubmitted]);
    useEffect(() => {
        if (user) {
            setIsLogin(true)
        }
    }, [user]);
    return (
        <div
            className="border p-3 my-4 woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab font-size-2"
            id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
            <h4 className="font-size-3">Đánh giá khách hàng</h4>
            <div className="row mb-8 advanced-review-rating">
                <div className="d-flex align-items-center mb-4 pl-3">
                    <span className="font-size-15 font-weight-bold">{rating}</span>
                    <div className="ml-3 h6 mb-0">
                                                        <span className="font-weight-normal">
                                                            {commentCount} đánh giá </span>
                        <div className="text-yellow-darker">
                            <Rating name="read-only" value={rating} readOnly/>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <ul className="list-unstyled p-0">
                        <li className="py-2">
                            <a className="row align-items-center mx-gutters-2 font-size-2">
                                <div className="col-auto">
                                    <span className="text-dark">5 sao</span>
                                </div>
                                <div className="col px-0">
                                    <div className="progress bg-white-100" style={{height: "7px"}}>
                                        <div className="progress-bar bg-yellow-darker" role="progressbar"
                                             style={{width: fiveStarComments > 0 ? "100%" : "0%"}} aria-valuenow="100"
                                             aria-valuemin="0"
                                             aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-2 text-right zero"><span
                                    className="text-secondary">{fiveStarComments}</span></div>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="row align-items-center mx-gutters-2 font-size-2">
                                <div className="col-auto">
                                    <span className="text-dark">4 sao</span>
                                </div>
                                <div className="col px-0">
                                    <div className="progress bg-white-100" style={{height: "7px"}}>
                                        <div className="progress-bar bg-yellow-darker" role="progressbar"
                                             style={{width: fourStarComments ? "100%" : "0%"}} aria-valuenow="100"
                                             aria-valuemin="0"
                                             aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-2 text-right"><span
                                    className="text-secondary">{fourStarComments}</span>
                                </div>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="row align-items-center mx-gutters-2 font-size-2">
                                <div className="col-auto">
                                    <span className="text-dark">3 sao</span>
                                </div>
                                <div className="col px-0">
                                    <div className="progress bg-white-100" style={{height: "7px"}}>
                                        <div className="progress-bar bg-yellow-darker" role="progressbar"
                                             style={{width: threeStarComments ? "100%" : "0%"}} aria-valuenow="100"
                                             aria-valuemin="0"
                                             aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-2 text-right zero"><span
                                    className="text-secondary">{threeStarComments}</span></div>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="row align-items-center mx-gutters-2 font-size-2">
                                <div className="col-auto">
                                    <span className="text-dark">2 sao</span>
                                </div>
                                <div className="col px-0">
                                    <div className="progress bg-white-100" style={{height: "7px"}}>
                                        <div className="progress-bar bg-yellow-darker" role="progressbar"
                                             style={{width: twoStarComments ? "100%" : "0%"}} aria-valuenow="100"
                                             aria-valuemin="0"
                                             aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-2 text-right zero"><span
                                    className="text-secondary">{twoStarComments}</span></div>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="row align-items-center mx-gutters-2 font-size-2">
                                <div className="col-auto">
                                    <span className="text-dark">1 sao</span>
                                </div>
                                <div className="col px-0">
                                    <div className="progress bg-white-100" style={{height: "7px"}}>
                                        <div className="progress-bar bg-yellow-darker" role="progressbar"
                                             style={{width: oneStarComments ? "100%" : "0%"}} aria-valuenow="100"
                                             aria-valuemin="0"
                                             aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-2 text-right zero"><span
                                    className="text-secondary">{oneStarComments}</span></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h4 className="font-size-3 mb-8 d-none">1-5 of 1 review </h4>
            <div id="reviews">
                {comments.map(comment => (
                    <CommentItem
                        id={comment.id}
                        username={comment.user.username}
                        rating={comment.rating}
                        content={comment.cmtDetail}
                        createdAt={comment.created_at}
                        token={token}
                        updateListComment={updateListComment}
                    />
                ))}
                <div id="review_form_wrapper">
                    <div id="review_form">
                        <div id="respond" className="comment-respond">
                            <h4 id="reply-title" className="comment-reply-title font-size-3 mb-4">Viết đánh
                                giá
                            </h4>
                            {isLogin ? (
                                isBought ? (
                                    <form onSubmit={handleAddComment}
                                          className="form-comment">
                                        <label htmlFor="rating" style={{fontSize: "21px"}}>Đánh giá của bạn</label>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            size={"large"}
                                        />
                                        <p className="comment-form-comment">
                                        <textarea id="comment" name="comment" cols={45} rows={8}
                                                  maxLength={65525} required value={content}
                                                  onChange={e => setContent(e.target.value)}/>
                                        </p>
                                        <button name="submit" type="submit" id="submit" className="button-comment"
                                        >Gửi đánh giá
                                        </button>
                                    </form>
                                ) : (
                                    <p className="must-log-in">Bạn cần mua hàng trước khi viết đánh giá.</p>
                                )
                            ) : (
                                <p className="must-log-in">Bạn phải <a
                                    href={"/sign-in"}>Đăng nhập</a> để viết
                                    đánh giá.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const CommentItem = ({id, username, rating, content, createdAt, token, updateListComment}) => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [sameUser, setSameUser] = useState(false);
    const [value, setValue] = React.useState(2);
    const [showEditForm, setShowEditForm] = useState(false);
    const [newContent, setNewContent] = useState('');
    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_ENDPOINT_API}/comment/delete/${id}`);
            alert("Xóa binh luận thành công!");
            updateListComment();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };
    const handleEditClick = () => {
        setShowEditForm(prevState => !prevState);
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${process.env.REACT_APP_ENDPOINT_API}/comment/update/${id}`, {
                rate: value,
                detail: newContent
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            updateListComment();
            console.log("Updated comment:", response);
            setShowEditForm(false);
        } catch (error) {
            console.error("Error update comment:", error);
        }
    };
    useEffect(() => {
        if (user && user.username === username) {
            setSameUser(true)
        }
    }, []);
    return (
        <ul className="commentlist list-unstyled mb-8" key={id}>
            <li className="review byuser comment-author-nilofer even thread-even depth-1 mb-4 pb-5 border-bottom"
                id="li-comment-95">
                <div id="comment-95" className="comment_container" style={{display: "flex"}}>
                    <div className="comment-text" style={{width: "970px"}}>
                        <div className="d-md-flex align-items-center mb-3">
                            <h6 className="mb-0 mr-3">{username}</h6>
                            <div className="text-yellow-darker">
                                <Rating name="read-only" value={rating} readOnly/>
                            </div>
                        </div>
                        <div className="description mb-4 text-lh-md">
                            <p>{content}</p>
                        </div>
                        <div className="text-gray-600">{createdAt}</div>
                    </div>
                    {sameUser ? (
                        <div className="delete-comment" style={{alignItems: "center", display: "flex"}}>
                            <FaRegEdit size={"25px"} className={"edit-comment"} onClick={handleEditClick}/>
                            <FaTrashCan size={"25px"} className={"trashcan"} onClick={handleDelete}/>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </li>
            {showEditForm && (
                <li className="review byuser comment-author-nilofer even thread-even depth-1 mb-4 pb-5 border-bottom"
                    id={`edit-comment-${id}`}>
                    <form onSubmit={handleUpdate} className="form-comment">
                        <label htmlFor="rating" style={{fontSize: "21px"}}>Chỉnh sửa đánh giá</label>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            size={"large"}
                        />
                        <p className="comment-form-comment">
                            <textarea
                                id="comment"
                                name="comment"
                                cols={45}
                                rows={8}
                                maxLength={65525}
                                required
                                value={newContent}
                                onChange={e => {
                                    setNewContent(e.target.value)
                                }}
                            />
                        </p>
                        <button name="submit" type="submit" id="submit" className="button-comment">Chỉnh sửa đánh giá
                        </button>
                    </form>
                </li>
            )}
        </ul>
    )
}
export const SideBar = () => {
    const apiService = new APIService();
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/products/latest`)
                setLatestProducts(result);
            } catch (error) {
                console.error('Error fetching latest products', error);
            }
        }
        fetchData();
    }, [])
    return (
        <div id="secondary" className="sidebar wi5dget-area order-1" role="complementary">
            <div id="widgetAccordion">
                <div id="woocommerce_products-2" className="widget p-4d875 border my-4 woocommerce widget_products">
                    <h4 className="font-size-3 mb-4">Sản phẩm mới</h4>
                    <ul className="product_list_widget">
                        {latestProducts.map(product => (<li key={product.id} className="mb-5">
                            <div className="media">
                                <div className="media d-md-flex">
                                    <Link to={`/product-detail/${product.id}`}
                                          className="d-block">
                                        <img width="150" height="200"
                                             src={product.image}
                                             className="img-fluid" alt style={{maxWidth: "60px"}} loading="lazy"/>
                                    </Link>
                                    <div className="media-body ml-3 pl-1">
                                        <h6 className="font-size-2 text-lh-md font-weight-normal crop-text-2"><Link
                                            to={`/product-detail/${product.id}`}>
                                            {product.title}</Link></h6>
                                        <span className="price d-flex justify-content-start align-items-center">
                                    <p className="current-price mr-2">
                                        <span className="price"
                                              style={{fontSize: "14px"}}>{formatCurrency(product.currentPrice)}</span>
                                    </p>
                                    <p className="old-price pb-1">
                                        <span className="price"
                                              style={{fontSize: "11px"}}>{formatCurrency(product.oldPrice)}</span>
                                    </p>
                                </span>
                                    </div>
                                </div>
                            </div>
                        </li>))}
                    </ul>
                </div>
                <div id="bookworm_features_block_widget-2"
                     className="widget p-4d875 border mb-5 widget_bookworm_features_block_widget">
                    <div className="site-features">
                        <ul className="list-unstyled my-0 list-features">
                            <li className="list-feature p-4d875 ">
                                <div className="media d-md-block d-xl-flex text-center text-xl-left">
                                    <div
                                        className="feature__icon font-size-10 text-primary text-lh-xs mb-md-3 mb-lg-0 mr-xl-4">
                                        <i className="flaticon-delivery"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="feature__title h6 mb-1 text-dark">Giao Hàng Miễn Phí</h4>
                                        <p className="feature__subtitle m-0 text-dark">Đơn Hàng Trên 800.000đ</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-feature p-4d875 border-top ">
                                <div className="media d-md-block d-xl-flex text-center text-xl-left">
                                    <div
                                        className="feature__icon font-size-10 text-primary text-lh-xs mb-md-3 mb-lg-0 mr-xl-4">
                                        <i className="flaticon-credit"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="feature__title h6 mb-1 text-dark">Thanh Toán An Toàn</h4>
                                        <p className="feature__subtitle m-0 text-dark">100% Thanh Toán An Toàn</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-feature p-4d875 border-top ">
                                <div className="media d-md-block d-xl-flex text-center text-xl-left">
                                    <div
                                        className="feature__icon font-size-10 text-primary text-lh-xs mb-md-3 mb-lg-0 mr-xl-4">
                                        <i className="flaticon-warranty"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="feature__title h6 mb-1 text-dark">Đảm Bảo Hoàn Lại Tiền</h4>
                                        <p className="feature__subtitle m-0 text-dark">Trong Vòng 30 Ngày</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-feature p-4d875 border-top ">
                                <div className="media d-md-block d-xl-flex text-center text-xl-left">
                                    <div
                                        className="feature__icon font-size-10 text-primary text-lh-xs mb-md-3 mb-lg-0 mr-xl-4">
                                        <i className="flaticon-help"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="feature__title h6 mb-1 text-dark">Hỗ Trợ 24/7</h4>
                                        <p className="feature__subtitle m-0 text-dark">Trong Vòng 1 Ngày Làm Việc</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const RelatedProducts = ({categoryId}) => {
    const {id} = useParams();
    const apiService = new APIService();
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/products/category/${categoryId}`);
                const relatedProducts = result.filter(product => product.id.toString() !== id.toString());
                setRelatedProducts(relatedProducts);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        }
        fetchProducts();
    }, [categoryId, id])
    return (
        <section className="related products space-bottom-3">
            <div className="container">
                <header className="mb-5 d-md-flex justify-content-between align-items-center">
                    <h2 className="font-size-5 mb-3 mb-md-0">Sản phẩm liên quan</h2>
                </header>
                <Carousel responsive={responsive}>
                    {relatedProducts.map(product => (
                        <div key={product.id} className="card mb-0 mx-2 no-gutters"><Product info={product}/></div>))}
                </Carousel>
            </div>
        </section>
    )
}
export const Detail = () => {
    const apiService = new APIService();
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [categoryId, setCategoryId] = useState(null);

    const fetchData = async () => {
        try {
            const result = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/products/${id}`);
            setProduct(result)
            setCategoryId(result.category?.id)
        } catch (error) {
            console.error('Error fetching product', error);
        }
    }
    useEffect(() => {
        fetchData();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [id])
    return (
        <div>
            <Breadcrumb/>
            <div className="container">
                <div className="row">
                    <div id="primary" className="content-area order-1">
                        <main id="main" className="site-main" role="main">
                            <div id="product-71"
                                 className="product type-product post-71 status-publish first instock product_cat-mystery product_cat-thriller-suspense has-post-thumbnail taxable shipping-taxable purchasable product-type-variable single-product__content single-product__v4">
                                <SingleProduct product={product} comments={product?.comments}/>
                                <Information detail={product?.detail}/>
                            </div>
                        </main>
                    </div>
                    <SideBar/>
                </div>
                {categoryId && (<RelatedProducts categoryId={categoryId}/>)}
            </div>
        </div>
    )
}
export default Detail;