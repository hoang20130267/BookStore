import React, {useEffect, useState} from "react";
import BlogItem from "./BlogItem";
import Pagination from "../../../components/general/Pagination";
import {listBlogs} from "../../../../store/apiRequest";

const BlogTab = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await listBlogs();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);
    return (
        <>
            <div className="tab-pane fade active show" id="all_cats" role="tabpanel"
                 aria-labelledby="tab-all_cats">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {blogs.map(blog => (
                        <BlogItem
                            id={blog.id}
                            title={blog.title}
                            image={blog.image}
                            content={blog.content}
                            created_at={blog.created_at}
                        />
                    ))}
                </div>
            </div>
            <Pagination/>
        </>
    );
}
export default BlogTab;