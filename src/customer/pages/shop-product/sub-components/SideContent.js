import React, {useState} from "react";
import FeaturedProduct from "./FeaturedProduct";
import Category from "./Category";
import FilterByPrice from "./FilterByPrice";

const SideContent = (props) => {
    const {categoryId, subCategoryId1, subCategoryId2} = props;
    return (
        <div id="secondary" className="sidebar widget-area order-1" role="complementary">
            <div id="widgetAccordion">
                <Category {...{ categoryId, subCategoryId1, subCategoryId2 }}/>
                <FilterByPrice/>
                <FeaturedProduct/>
            </div>
        </div>
    );
}
export default SideContent;