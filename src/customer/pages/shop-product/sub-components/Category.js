import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import APIService from "../../../../service/APIService";

const apiService = new APIService();
const Category = (props) => {
    const {categoryId, subCategoryId1, subCategoryId2} = props;
    const [isShown, setIsShown] = useState(true);

    const handleToggle = () => {
        setIsShown(!isShown)
    }

    return (
        <div id="woocommerce_product_categories-2"
             className="widget border p-4d875 woocommerce widget_product_categories">
            <div className="widget-head" id="widgetHeading-woocommerce_product_categories-2">
                <Link className="d-flex align-items-center justify-content-between text-dark"
                      to="" data-toggle="collapse"
                      data-target="#widget-collapse-woocommerce_product_categories-2"
                      aria-expanded="true"
                      aria-controls="widget-collapse-woocommerce_product_categories-2" onClick={handleToggle}>
                    <h3 className="widget-title font-weight-medium font-size-3 mb-0">Danh mục</h3>
                    <svg className={`mins ${isShown ? 'd-block' : 'd-none'}`} width="15px" height="2px">
                        <path fill="rgb(22, 22, 25)"
                              d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z">
                        </path>
                    </svg>
                    <svg className={`plus ${isShown ? '' : 'd-block'}`} width="15px" height="15px">
                        <path fill="rgb(22, 22, 25)"
                              d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z">
                        </path>
                    </svg>
                </Link>
            </div>
            {isShown && (<div id="widget-collapse-woocommerce_product_categories-2"
                              className="mt-4 widget-content collapse show"
                              aria-labelledby="widgetHeading-woocommerce_product_categories-2">
                <CategoriesList {...{categoryId, subCategoryId1, subCategoryId2}}/>
            </div>)}
        </div>
    );
}
const CategoryItem = ({category, subMainCategories, subCategories}) => {
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [listVisibility, setListVisibility] = useState({});

    const handleItemClick = (subCateId) => {
        setSelectedSubCategory(subCateId);
        const updatedListVisibility = {};
        for (const subCate of subMainCategories) {
            updatedListVisibility[subCate.id] = subCate.id === subCateId ? 'block' : 'none';
        }
        setListVisibility(updatedListVisibility)
    };


    return (
        <>
            <li className={`cat-item cat-item-${category.id}`}>
                <Link to={`/product-list/${category.id}`}>
                    {category.name}
                </Link>
                <ul className={`children ml-3 d-block`}>
                    {subMainCategories.map(subCate => (
                        <li key={subCate.id}
                            className={`cat-item cat-item-${subCate.id}`}
                            style={{display: listVisibility[subCate.id]}}
                            onClick={() => handleItemClick(subCate.id)}>
                            <Link to={`/product-list/${category.id}/${subCate.id}`}
                                  className={`${selectedSubCategory === subCate.id ? 'active' : ''}`}>
                                {subCate.name}
                            </Link>
                            {selectedSubCategory === subCate.id && (
                                <ul key={subCate.id} className={`children ml-3 d-block`}>
                                    {subCategories.map(child => (
                                        <li key={child.id} className={`cat-item cat-item-${child.id}`}>
                                            <Link to={`/product-list/${category.id}/${subCate.id}/${child.id}`}>
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>)}
                        </li>
                    ))}
                </ul>
            </li>
        </>
    );

};

const CategoriesList = (props) => {
    const [parentCategory, setParentCategory] = useState({});
    const [subMainCategories, setSubMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parentResult = await apiService.fetchData(`${process.env.REACT_APP_API_ENDPOINT}/categories/${props.categoryId}`);
                setParentCategory(parentResult);
                const subMainResult = await apiService.fetchData(`${process.env.REACT_APP_API_ENDPOINT}/categories/${props.categoryId}/subcategories`);
                setSubMainCategories(subMainResult);
                const subResult = await apiService.fetchData(`${process.env.REACT_APP_API_ENDPOINT}/categories/${props.subCategoryId1}/subcategories`);
                setSubCategories(subResult);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [props.categoryId, props.subCategoryId1, props.subCategoryId2]);

    return (
        <ul className="product-categories">
            <CategoryItem category={parentCategory} subMainCategories={subMainCategories}
                          subCategories={subCategories} sub1={props.subCategoryId1}/>
        </ul>
    );
};
export default Category;