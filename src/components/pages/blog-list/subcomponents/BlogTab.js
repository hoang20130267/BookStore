import React from "react";
import BlogItem from "./BlogItem";
import Pagination from "../../../general/Pagination";

const BlogTab = () => {
    return (
        <>
            <div className="tab-pane fade active show" id="all_cats" role="tabpanel"
                 aria-labelledby="tab-all_cats">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                </div>
            </div>
            <Pagination/>
        </>
    );
}
export default BlogTab;