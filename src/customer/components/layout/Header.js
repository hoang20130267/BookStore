import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import UserMenu from "../general/UserMenu";
import React, {useCallback, useEffect, useState} from "react";
import APIService from "../../../service/APIService";
import {FaSearch} from "react-icons/fa";
import "../../assets/css/searchbar.css";
import formatCurrency from "../../../utils/formatCurrency";
import axios from "axios";
import {logOut} from "../../../store/apiRequest";
import {IoMdMenu} from "react-icons/io";

const apiService = new APIService();

export const SearchBar = ({setResults}) => {
    const [keyword, setKeyword] = useState("");
    const [hasResults, setHasResults] = useState(true);
    const fetchSearchProduct = (value) => {
        fetch(`${process.env.REACT_APP_ENDPOINT_API}/products/all`)
            .then((response) => response.json())
            .then(json => {
                const result = json.filter(product =>
                    value &&
                    product &&
                    product.title &&
                    product.title.toLowerCase().includes(value.toLowerCase())
                );
                setHasResults(result.length > 0);
                setResults(result);
            });
    }

    const handleSearch = (value) => {
        setKeyword(value)
        fetchSearchProduct(value)
    }
    return (
        <>
            <div className="input-wrapper">
                <FaSearch id="#search-icon"/>
                <input type="text" className="searchInput" placeholder="Tìm kiếm..."
                       value={keyword} onChange={(e) => handleSearch(e.target.value)}/>
            </div>
            {!hasResults && keyword.length > 0 &&
                <div className="search-results">
                    <p className="result-notfound">Không tìm thấy sản phẩm</p>
                </div>
            }
        </>
    )
}
export const SearchResults = ({results}) => {
    return (
        <div className="search-results">
            {results.map((product) => (
                <Link className="result" to={`/product-detail/${product.id}`} key={product.id}>
                    <img src={product.image} alt={product.title} className="imageSearch"/>
                    <p>
                        {product.title}
                    </p>
                </Link>
            ))}
        </div>
    )
}
export const SideBarSearch = ({setResults}) => {
    const [keyword, setKeyword] = useState("");
    const [hasResults, setHasResults] = useState(true);
    const fetchSearchProduct = (value) => {
        fetch(`${process.env.REACT_APP_ENDPOINT_API}/products/all`)
            .then((response) => response.json())
            .then(json => {
                const result = json.filter(product =>
                    value &&
                    product &&
                    product.title &&
                    product.title.toLowerCase().includes(value.toLowerCase())
                );
                setHasResults(result.length > 0);
                setResults(result);
            });
    }
    const handleSearch = (value) => {
        setKeyword(value)
        fetchSearchProduct(value)
    }
    return (
        <>
            <div className="input-wrapper-sidebar">
                <FaSearch id="#search-icon"/>
                <input type="text" className="searchInput" placeholder="Tìm kiếm..."
                       value={keyword} onChange={(e) => handleSearch(e.target.value)}/>
            </div>
            {!hasResults && keyword.length > 0 &&
                <div className="search-results-sidebar">
                    <p className="result-notfound-sidebar">Không tìm thấy sản phẩm</p>
                </div>
            }
        </>
    )
}
export const SidebarSearchResults = ({results}) => {
    return (
        <div className="search-results-sidebar">
            {results.map((product) => (
                <Link className="result-sidebar" to={`/product-detail/${product.id}`} key={product.id}>
                    <img src={product.image} alt={product.title} className="imageSearch"/>
                    <p>
                        {product.title}
                    </p>
                </Link>
            ))}
        </div>
    )
}
const Sidebar = ({isOpen, toggleSidebar}) => {
    const [mainCategories, setMainCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState({});
    const [showSubCategories, setShowSubCategories] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/categories/all`);
                const parent = result.find(cat => cat.parentCategory === null);
                setParentCategory(parent);
                const mainCategories = result.filter(cat => cat.parentCategory && cat.parentCategory.id === parent.id);
                setMainCategories(mainCategories);
            } catch (error) {
                console.error("Error fetching categories", error);
            }
        };
        fetchData();
    }, []);

    const toggleSubCategories = () => {
        setShowSubCategories(!showSubCategories);
    };

    return (
        <div className={`show-left-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="search-box">
                <SideBarSearch setResults={setResults}/>
                <SidebarSearchResults results={results}/>
            </div>
            <ul>
                <li><Link to={"/"}>Trang Chủ</Link></li>
                <li>
                    <span onClick={toggleSubCategories} style={{cursor: 'pointer'}}>Danh mục sản phẩm</span>
                    <ul className={`left-sidebar-menu-dropdown ${showSubCategories ? 'show' : ''}`}>
                        {mainCategories.map(category => (
                            <li key={category.id}>
                                <Link to={`/product-list/${parentCategory.id}/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li><Link to={"/blog-list/0"}>Tin Tức</Link></li>
                <li><Link to={"/contact"}>Liên Hệ</Link></li>
            </ul>
            <button className="close-btn" onClick={toggleSidebar}>X</button>
        </div>
    );
};
export const Header = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [token, setToken] = useState(user?.token);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mainCategories, setMainCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState({});
    const [results, setResults] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [popupInfo, setPopupInfo] = useState({message: '', type: '', visible: false});

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const checkToken = useCallback(async () => {
        if (user) {
            setToken(user.token);
            try {
                await axios.post(`${process.env.REACT_APP_ENDPOINT_API}/auth/checkToken/${token}`);
                console.log("Token is valid");
            } catch (error) {
                const errorMessage = 'Hết phiên đăng nhập!';
                setPopupInfo({message: errorMessage, type: 'error', visible: true});
                logOut(dispatch, user.id, navigate, user.token);
                localStorage.removeItem('currentUser');
                setToken(null);
                navigate("/sign-in");
            }
        }
    }, [user, dispatch, navigate]);

    useEffect(() => {
        const interval = setInterval(checkToken, 60000);
        return () => clearInterval(interval);
    }, [checkToken]);


    const hidePopup = () => {
        setPopupInfo((prevInfo) => ({...prevInfo, visible: false}));
    };

    useEffect(() => {
        const fetchCart = async () => {
            if (user) {
                try {
                    setToken(user.token);
                    const result = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/cart/items`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setCart(result.data);
                    let totalAmount = 0;
                    result.data.forEach(item => {
                        totalAmount += item.quantity * item.product.currentPrice;
                    });
                    setTotal(totalAmount);
                } catch (error) {
                    console.error("Failed to fetch cart items", error);
                }
            }
        }
        fetchCart();
    }, [user])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/categories/all`)
                const parent = result.find(cat => cat.parentCategory === null);
                setParentCategory(parent)
                const mainCategories = result.filter(cat => cat.parentCategory && cat.parentCategory.id === parent.id);
                setMainCategories(mainCategories);
            } catch (error) {

            }
        };
        fetchData();
    }, [])

    const handleMouseClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };
    const handleMouseLeave = () => {
        setIsMenuOpen(false);
    };
    return (
        <header id="site-header" className="site-header site-header__v12 pb-1">
            <div
                className={`popup popup--icon -error js_error-popup ${popupInfo.visible && popupInfo.type === 'error' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Lỗi
                    </h3>
                    <p style={{marginBottom: "10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--error" data-for="js_error-popup"
                                onClick={hidePopup}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>
            <div className="masthead">
                <div className="bg-punch-light">
                    <div className="container">
                        <div className="d-flex align-items-center position-relative flex-wrap">
                            <div className={"left-sidebar"}>
                                <IoMdMenu className="left-sidebar-icon" size={30} onClick={toggleSidebar}/>
                                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
                            </div>
                            <div className="site-branding pr-md-7 mx-md-0">
                                <h1 className="beta site-title site-title text-uppercase font-weight-bold font-size-5 m-0 ">
                                    GoldLeaf</h1>
                            </div>
                            <SearchBar setResults={setResults}/>
                            <SearchResults results={results}/>
                            <div className="d-flex align-items-center header-icons-links">
                                {user ? (
                                    <>
                                        <div
                                            className="normal-user position-relative mt-4 pb-4"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link id="sidebarNavToggler-my_account">
                                                <div
                                                    className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                                                    <i className="fa-solid fa-user font-size-5 text-dark"></i>
                                                    <div className="ml-2 d-none d-lg-block text-dark">
                                                        <span
                                                            className="text-secondary-gray-1090 font-size-1">Xin chào </span>
                                                        <div>{user.username}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                            {isMenuOpen && <UserMenu/>}
                                        </div>
                                        <div
                                            className="responsive-user position-relative mt-4 pb-4"
                                            onClick={handleMouseClick}
                                        >
                                            <Link id="sidebarNavToggler-my_account">
                                                <div
                                                    className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                                                    <i className="fa-solid fa-user font-size-5 text-dark"></i>
                                                    <div className="ml-2 d-none d-lg-block text-dark">
                                                        <span
                                                            className="text-secondary-gray-1090 font-size-1">Xin chào </span>
                                                        <div>{user.username}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                            {isMenuOpen && <UserMenu/>}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="position-relative mt-4 pb-4">
                                            <Link id="sidebarNavToggler-my_account" to="sign-in">
                                                <div
                                                    className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                                                    <i className="fa-solid fa-user font-size-5 text-dark"></i>
                                                    <div className="ml-2 d-none d-lg-block text-dark">
                                        <span className="text-secondary-gray-1090 font-size-1">
                                            Đăng nhập </span>
                                                        <div>Tài khoản</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>

                            <Link id="sidebarNavToggler-my_cart" to="/cart"
                                  className="sidebarNav-my_cart d-block nav-link text-dark">
                                <div
                                    className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                                    <span
                                        className="position-absolute width-16 height-16 rounded-circle d-flex align-items-center justify-content-center font-size-n9 left-0 top-0 ml-n2 mt-n1 text-white bg-dark">
                                        <span className="cart-contents-count">
                                            {cart.length}
                                        </span> </span>
                                    <Link to={"/cart"}>
                                        <i className="fa-solid fa-cart-shopping font-size-5 text-dark"></i>
                                    </Link>
                                    <div className="ml-2 d-none d-lg-block text-dark">
                                        <span className="text-secondary-gray-1090 font-size-1">
                                            Giỏ hàng </span>
                                        <div><span className="cart-contents-total">
                                                <span
                                                    className="woocommerce-Price-amount amount">{formatCurrency(total)}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom py-1 d-xl-block">
                <div className="container">
                    <div className="d-md-flex align-items-center position-relative">
                        <div className="site-navigation mx-auto">
                            <nav className="header__menu">
                                <ul>
                                    <li><Link to={"/"}>Trang Chủ</Link></li>
                                    <li><Link to={`/product-list/${parentCategory.id}`}>Danh mục sản phẩm</Link>
                                        <ul className="header__menu__dropdown">
                                            {mainCategories.map(category => (
                                                <li key={category.id}><Link
                                                    to={`/product-list/${parentCategory.id}/${category.id}`}>{category.name}</Link>
                                                </li>))}
                                        </ul>
                                    </li>
                                    <li><Link to={"/blog-list/0"}>Tin Tức</Link></li>
                                    <li><Link to={"/contact"}>Liên Hệ</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
