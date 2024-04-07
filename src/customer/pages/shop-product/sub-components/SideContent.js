import React, {useState} from "react";
import FeaturedProduct from "./FeaturedProduct";
import Category from "./Category";
import FilterByPrice from "./FilterByPrice";

const SideContent = () => {
    return (
        <div id="secondary" className="sidebar widget-area order-1" role="complementary">
            <div id="widgetAccordion">
                <Category/>
                <FilterByPrice/>
                <FeaturedProduct/>
            </div>
        </div>
    );
}
export default SideContent;