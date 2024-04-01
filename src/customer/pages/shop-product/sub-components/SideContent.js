import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import Category from "./Category";
import FilterByPrice from "./FilterByPrice";

const SideContent = () => {
    return (
        <div id="secondary" className="sidebar widget-area order-1" role="complementary">
            <div id="widgetAccordion">
                <Category/>
                <FilterByPrice/>
                <div id="woocommerce_products-3" className="widget border p-4d875 woocommerce widget_products">
                    <div className="widget-head" id="widgetHeading-woocommerce_products-3">
                        <a className="d-flex align-items-center justify-content-between text-dark"
                           href="shop-product/sub-components#" data-toggle="collapse"
                           data-target="#widget-collapse-woocommerce_products-3" aria-expanded="true"
                           aria-controls="widget-collapse-woocommerce_products-3">
                            <h3 className="widget-title font-weight-medium font-size-3 mb-0">Sản phẩm nổi bật</h3>
                            <svg className="mins" width="15px" height="2px">
                                <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                                      d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z">
                                </path>
                            </svg>
                            <svg className="plus" width="15px" height="15px">
                                <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                                      d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div id="widget-collapse-woocommerce_products-3"
                         className="mt-4 widget-content collapse show"
                         aria-labelledby="widgetHeading-woocommerce_products-3">
                        <ul className="product_list_widget">
                            <FeaturedProduct/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideContent;