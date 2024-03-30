import React from "react";
import {Link} from "react-router-dom";

const BlogItem = () => {
    return (
        <article
            className="col blog-grid post-1358 post type-post status-publish format-standard has-post-thumbnail hentry category-childrens-books category-science-math tag-arts tag-books tag-kids tag-romance">
            <div className="mb-6">
                <Link className="d-block mb-3"
                   to="/blog-detail">
                    <img width="445" height="300"
                         src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13-445x300.jpg"
                         className="img-fluid w-100 rounded wp-post-image"
                         alt="&#8216;American Dirt&#8217; Invites Readers into the Journey of Mexican Migrants"
                         sizes="(max-width: 445px) 100vw, 445px"
                    /> </Link>
                <div className="mb-1 text-primary">
                    <a href="https://bookworm.madrasthemes.com/category/childrens-books/"
                       className="small">Children&#039;s Books</a>, <a
                    href="https://bookworm.madrasthemes.com/category/science-math/"
                    className="small">Science &amp; Math</a>
                </div>
                <h2 className="entry-title h5 crop-text-2 font-weight-medium text-lh-md mb-3"><a
                    href="https://bookworm.madrasthemes.com/2020/08/19/american-dirt-invites-readers-into-the-journey-of-mexican-migrants/"
                    rel="bookmark">&#8216;American Dirt&#8217; Invites Readers into the Journey of
                    Mexican Migrants</a></h2>
                <p className="text-muted mb-4">It’s nice to win awards. Last night, the Ueno team in
                    Reykjavík came home from the Icelandic Web Awards.</p>
                <div className="text-secondary-gray-700 post-meta">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ml-1">August 19, 2020</span>
            </div>
        </div>
</article>
)
    ;
}
export default BlogItem;