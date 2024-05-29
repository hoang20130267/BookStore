import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import UserMenu from "../general/UserMenu";
import {useEffect, useState} from "react";
import APIService from "../../../service/APIService";
import {FaSearch} from "react-icons/fa";
import "../../assets/css/searchbar.css";
import formatCurrency from "../../../utils/formatCurrency";

const apiService = new APIService();

export const SearchBar = ({setResults}) => {
    const [keyword, setKeyword] = useState("");
    const [hasResults, setHasResults] = useState(true);
    const fetchSearchProduct = (value) => {
        fetch("http://localhost:8080/api/products/all")
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
            <div className="input-wrapper d-flex" style={{marginLeft: "224px"}}>
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

export const Header = () => {
    const user = useSelector(state => state.auth.login.currentUser);
    const token = user ? user.token : null;
    const apiServiceToken = new APIService(token);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mainCategories, setMainCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState({});
    const [results, setResults] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (user) {
                    const result = await apiServiceToken.fetchData("http://localhost:8080/api/cart/items");
                    setCart(result);
                    let totalAmount = 0;
                    result.forEach(item => {
                        totalAmount += item.quantity * item.product.currentPrice;
                    });
                    setTotal(totalAmount);
                }
            } catch (error) {

            }
        }
        fetchCart();
    }, [user, cart])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.fetchData(`http://localhost:8080/api/categories/all`)
                const parent = result.find(cat => cat.parentCategory === null);
                setParentCategory(parent)
                const mainCategories = result.filter(cat => cat.parentCategory && cat.parentCategory.id === parent.id);
                setMainCategories(mainCategories);
            } catch (error) {

            }
        };
        fetchData();
    }, [])


    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };
    const handleMouseLeave = () => {
        setIsMenuOpen(false);
    };
    return (
        <header id="site-header" className="site-header site-header__v12 pb-1">
            <div className="masthead">
                <div className="bg-punch-light">
                    <div className="container">
                        <div className="d-flex align-items-center position-relative flex-wrap">
                            <div className="site-branding pr-md-7 mx-md-0">
                                <h1 className="beta site-title site-title text-uppercase font-weight-bold font-size-5 m-0 ">
                                    <Link to="/" style={{marginLeft: "20px"}}>GoldLeaf</Link></h1>
                            </div>
                            <SearchBar setResults={setResults}/>
                            <SearchResults results={results}/>
                            <div className="d-flex align-items-center ml-auto header-icons-links">
                                {user ? (
                                    <>
                                        <div className="position-relative mt-4 pb-4"
                                             onMouseEnter={handleMouseEnter}
                                             onMouseLeave={handleMouseLeave}>
                                            <Link id="sidebarNavToggler-my_account">
                                                <div
                                                    className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                                                    <i className="fa-solid fa-user font-size-5 text-dark"></i>
                                                    <div className="ml-2 d-none d-lg-block text-dark">
                                        <span className="text-secondary-gray-1090 font-size-1">
                                            Xin chào </span>
                                                        <div>{user.username}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                            {isMenuOpen && (<UserMenu/>)}
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
                                  className="d-block nav-link text-dark ml-4">
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
                                                <span className="woocommerce-Price-amount amount">{formatCurrency(total)}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom py-1 d-none d-xl-block">
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
