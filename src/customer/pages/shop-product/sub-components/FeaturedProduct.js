import React, {useState} from "react";
import {Link} from "react-router-dom";

const FeaturedProduct = () => {
    const [isShown, setIsShown] = useState(true);

    const handleToggle = () => {
        setIsShown(!isShown)
    }
    return (
        <div id="woocommerce_products-3" className="widget border p-4d875 woocommerce widget_products">
            <div className="widget-head" id="widgetHeading-woocommerce_products-3">
                <Link className="d-flex align-items-center justify-content-between text-dark"
                      to="" data-toggle="collapse"
                      data-target="#widget-collapse-woocommerce_products-3" aria-expanded="true"
                      aria-controls="widget-collapse-woocommerce_products-3" onClick={handleToggle}>
                    <h3 className="widget-title font-weight-medium font-size-3 mb-0">Sản phẩm nổi bật</h3>
                    <svg className="mins" width="15px" height="2px">
                        <path fillRule="evenodd" fill="rgb(22, 22, 25)"
                              d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z">
                        </path>
                    </svg>
                    <svg className="plus" width="15px" height="15px">
                        <path fillRule="evenodd" fill="rgb(22, 22, 25)"
                              d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z">
                        </path>
                    </svg>
                </Link>
            </div>
            {isShown && (<div id="widget-collapse-woocommerce_products-3"
                              className="mt-4 widget-content collapse show"
                              aria-labelledby="widgetHeading-woocommerce_products-3">
                <ul className="product_list_widget">
                    <FeaturedItem/>
                </ul>
            </div>)}
        </div>
    );
}

const FeaturedItem = () => {
    return (
        <li className="mb-5">
            <div className="media">
                <div className="media d-md-flex">
                    <Link to="/product-detail"
                          className="d-block">
                        <img width="150" height="200"
                             src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/9-150x200.jpg"
                             className="img-fluid" alt style={{maxWidth: "60px"}}
                             loading="lazy"/>
                    </Link>
                    <div className="media-body ml-3 pl-1">
                        <h6 className="font-size-2 text-lh-md font-weight-normal crop-text-2">
                            <Link to="/product-detail">
                                Until the End of Time: Mind, Matter, and Our Search
                                for
                                Meaning in an Evolving Universe </Link></h6>
                        <span className="price d-flex justify-content-start align-items-center">
                                    <p className="current-price mr-2">
                                        <span className="price" style={{fontSize: "14px"}}>130000</span>
                                    </p>
                                    <p className="old-price pb-1">
                                        <span className="price" style={{fontSize: "11px"}}>150000</span>
                                    </p>
                                </span>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default FeaturedProduct;