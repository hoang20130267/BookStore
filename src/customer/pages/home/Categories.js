import {useEffect, useState} from "react";
import APIService from "../../../service/APIService";
import {Link} from "react-router-dom";

export const Categories = () => {
    const apiService = new APIService();
    const [firstCategories, setFirstCategories] = useState([]);
    const [first, setFirst] = useState({});
    const [secondCategories, setSecondCategories] = useState([]);
    const [second, setSecond] = useState({});
    const [thirdCategories, setThirdCategories] = useState([]);
    const [third, setThird] = useState({});
    console.log(first)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultCate1 = await apiService.fetchData(`http://localhost:8080/api/categories/2/subcategories`);
                setFirstCategories(resultCate1.slice(0, 6));
                setFirst(resultCate1[0]);
                const resultCate2 = await apiService.fetchData(`http://localhost:8080/api/categories/14/subcategories`);
                setSecondCategories(resultCate2.slice(0, 6));
                setSecond(resultCate2[0])
                const resultCate3 = await apiService.fetchData(`http://localhost:8080/api/categories/21/subcategories`);
                setThirdCategories(resultCate3.slice(0, 6))
                setThird(resultCate3[0])
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="wp-block-bwgb-product-categories__inner container">
            <header
                className="bwgb-products-category__block-header d-md-flex justify-content-between align-items-center mb-5">
                <h2 className="bwgb-product-category__block-title font-size-7 mb-3 mb-md-0 mb-3 mb-md-0">Danh mục nổi
                    bật</h2><Link to={`/product-list/${first.parentCategory?.parentCategory?.id}`}
                                  className="h-primary d-block bwgb-products-category__block-action-text bwgb-product-category__block-title"><span>Tất cả danh mục</span><i
                className="fa-solid fa-caret-right ml-1"></i></Link></header>
            <div className="wp-block-bwgb-product-categories__content">
                <div>
                    <div
                        className="row no-gutters row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-wd-3 border-top border-left">
                        <div className="col">
                            <div className="position-relative h-100">
                                <div className="border-bottom border-right p-4 p-lg-7 h-100">
                                    {first && (
                                        <h6 className="font-size-3 mb-3 pb-1 bwgb-products-category__category-title">
                                            {first.parentCategory?.name} </h6>)}
                                    <ul className="list-unstyled m-0 p-0 bwgb-products-category__category-list">
                                        {firstCategories.map(category => (
                                            <li key={category.id} className="cat-item cat-item-157"><Link
                                                to={`/product-list/${category.parentCategory?.parentCategory?.id}/${category.parentCategory?.id}/${category.id}`}>{category.name}</Link>
                                            </li>))}
                                    </ul>
                                    <div
                                        className="d-flex d-md-block justify-content-end position-md-absolute bottom-0 right-md-30 product-category__icon">
                                        <i className="fa-solid fa-utensils text-tangerine__1 font-size-17"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="position-relative h-100">
                                <div className="border-bottom border-right p-4 p-lg-7 h-100">
                                    {second && (
                                        <h6 className="font-size-3 mb-3 pb-1 bwgb-products-category__category-title">
                                            {second.parentCategory?.name}
                                        </h6>)}
                                    <ul className="list-unstyled m-0 p-0 bwgb-products-category__category-list">
                                        {secondCategories.map(category => (
                                            <li key={category.id} className="cat-item cat-item-157"><Link
                                                to={`/product-list/${category.parentCategory?.parentCategory?.id}/${category.parentCategory?.id}/${category.id}`}>{category.name}</Link>
                                            </li>))}
                                    </ul>
                                    <div
                                        className="d-flex d-md-block justify-content-end position-md-absolute bottom-0 right-md-30 product-category__icon">
                                        <i className="fa-regular fa-heart bwgb-products-category__icon-2 text-chili__1 font-size-17"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="position-relative h-100">
                                <div className="border-bottom border-right p-4 p-lg-7 h-100">
                                    {third && (
                                        <h6 className="font-size-3 mb-3 pb-1 bwgb-products-category__category-title">
                                            {third.parentCategory?.name} </h6>)}
                                    <ul className="list-unstyled m-0 p-0 bwgb-products-category__category-list">
                                        {thirdCategories.map(category => (
                                            <li key={category.id} className="cat-item cat-item-157"><Link
                                                to={`/product-list/${category.parentCategory?.parentCategory?.id}/${category.parentCategory?.id}/${category.id}`}>{category.name}</Link>
                                            </li>))}
                                    </ul>
                                    <div
                                        className="d-flex d-md-block justify-content-end position-md-absolute bottom-0 right-md-30 product-category__icon">
                                        <i className="fa-solid fa-stethoscope bwgb-products-category__icon-3 text-carolina__1 font-size-17"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
