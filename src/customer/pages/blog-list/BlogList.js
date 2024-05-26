import React from "react";
import {useLocation} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import BlogTabMenu from "./subcomponents/BlogTabMenu";
import ScrollToTop from "../../components/general/ScrollToTop";

const BlogList = () => {
    const location = useLocation();
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="container mb-5 mb-lg-8 pb-xl-1 mt-5 pt-xl-1 mt-lg-7">
                <BlogTabMenu/>
            </div>
            <ScrollToTop/>
        </>
    )
}
export default BlogList;