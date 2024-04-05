import React from "react";
import {Link} from "react-router-dom";

const BlogItem = ({ title, image, content, created_at }) => {
    const shortenContent = (content, maxLength) => {
        if (content.length <= maxLength) {
            return content;
        } else {
            return content.substring(0, maxLength) + '...';
        }
    };
    return (
        <article className="col blog-grid post-1358 post type-post status-publish format-standard has-post-thumbnail hentry category-childrens-books category-science-math tag-arts tag-books tag-kids tag-romance">
            <div className="mb-6">
                <Link className="d-block mb-3" to={`/blog-detail`}>
                    <img
                        style={{width: "445px", height: "300px"}}
                        src={image}
                        className="img-fluid w-100 rounded wp-post-image"
                        alt={title}
                        sizes="(max-width: 445px) 100vw, 445px"
                    />
                </Link>
                {/* Hiển thị title */}
                <h2 className="entry-title h5 crop-text-2 font-weight-medium text-lh-md mb-3">
                    <Link to={`/blog-detail`} rel="bookmark">{title}</Link>
                </h2>
                {/* Hiển thị content */}
                <p className="text-muted mb-4">{shortenContent(content, 100)}</p>
                <div className="text-secondary-gray-700 post-meta">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ml-1">{created_at}</span>
                </div>
            </div>
        </article>
);
}
export default BlogItem;