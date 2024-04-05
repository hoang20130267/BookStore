import {useLocation, useParams} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {useEffect, useState} from "react";
import {blogDetail} from "../../../store/apiRequest";

export const BlogContent = () => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await blogDetail();
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };
        fetchBlog();
    }, []);
    return (
        <div className="article-post max-width-940 mx-auto bg-white position-relative">
            <div className="article-post__inner mt-n10 mt-md-n13 pt-5 pt-lg-7 px-0 px-md-5 pl-xl-10 pr-xl-8 mb-8">
                <div className="ml-xl-4">
                    <div className="mb-5 mb-lg-7">
                        <div className="mb-2 text-primary">
                            <a href=""
                               className="font-size-3 text-primary">Children&#039;s Books</a>, <a
                            href=""
                            className="font-size-3 text-primary">Science &amp; Math</a>
                        </div>
                        <h6 className="font-size-10 mb-3 crop-text-2 font-weight-medium text-lh-1dot4">
                            {blog.title}
                        </h6>
                        <div className="single-post-meta text-secondary-gray-700">
                            <a href="https://bookworm.madrasthemes.com/2020/08/19/american-dirt-invites-readers-into-the-journey-of-mexican-migrants/"
                               className="post-date text-secondary-gray-700">{blog.created_at}</a>
                        </div>
                    </div>
                    <div className="mb-7">
                        <div className="entry-content">
                            <p>{blog.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Author = () => {
    return (
        <div className="col-lg-9 px-0 px-md-5 mx-auto">
            <div className=" px-md-5 pl-xl-10 pr-xl-4">
                <div className="ml-xl-4">
                    <div className="pb-7 tag-links"><span className="sr-only">Tags: </span>
                        <div className="d-flex flex-wrap"><a href="https://bookworm.madrasthemes.com/tag/arts/"
                                                             rel="tag">Arts</a> <a
                            href="https://bookworm.madrasthemes.com/tag/books/" rel="tag">Books</a> <a
                            href="https://bookworm.madrasthemes.com/tag/kids/" rel="tag">Kids</a> <a
                            href="https://bookworm.madrasthemes.com/tag/romance/" rel="tag">Romance</a></div>
                    </div>
                    <div className="mb-7 mt-0">
                        <div className="mb-7">
                            <div className="sharedaddy sd-sharing-enabled">
                                <div className="robots-nocontent sd-block sd-social sd-social-icon sd-sharing"><span
                                    className="sharing-title font-size-2 text-gray-600 font-weight-normal ml-1 mr-md-3 mr-xl-5">Share
                                                this:</span>
                                    <div className="sd-content">
                                        <ul>
                                            <li><a href="blog-detail#"
                                                   className="sharing-anchor sd-button share-more"><span>Share</span></a>
                                            </li>
                                            <li className="share-end"></li>
                                        </ul>
                                        <div className="sharing-hidden">
                                            <div className="inner" style={{display: "none"}}>
                                                <ul>
                                                    <li className="share-twitter"><a rel="nofollow noopener noreferrer"
                                                                                     data-shared="sharing-twitter-1358"
                                                                                     className="share-twitter share-icon no-text btn py-2 width-175 mb-3 mb-xl-0 mr-md-1 pr-1 text-white font-size-2 bg-twitter"
                                                                                     href="https://bookworm.madrasthemes.com/2020/08/19/american-dirt-invites-readers-into-the-journey-of-mexican-migrants/?share=twitter"
                                                                                     target="_blank"
                                                                                     title="Click to share on Twitter"><span></span><span
                                                        className="sharing-screen-reader-text">Click to
                                                                        share on Twitter (Opens in new
                                                                        window)</span></a></li>
                                                    <li className="share-facebook"><a rel="nofollow noopener noreferrer"
                                                                                      data-shared="sharing-facebook-1358"
                                                                                      className="share-facebook share-icon no-text btn py-2 width-175 mb-3 mb-xl-0 mr-md-1 pr-1 text-white font-size-2 bg-facebook"
                                                                                      href="https://bookworm.madrasthemes.com/2020/08/19/american-dirt-invites-readers-into-the-journey-of-mexican-migrants/?share=facebook"
                                                                                      target="_blank"
                                                                                      title="Click to share on Facebook"><span></span><span
                                                        className="sharing-screen-reader-text">Click to
                                                                        share on Facebook (Opens in new
                                                                        window)</span></a></li>
                                                    <li className="share-pinterest"><a
                                                        rel="nofollow noopener noreferrer"
                                                        data-shared="sharing-pinterest-1358"
                                                        className="share-pinterest share-icon no-text btn py-2 width-175 mb-3 mb-xl-0 mr-md-1 pr-1 text-white font-size-2 bg-pinterest"
                                                        href="https://bookworm.madrasthemes.com/2020/08/19/american-dirt-invites-readers-into-the-journey-of-mexican-migrants/?share=pinterest"
                                                        target="_blank"
                                                        title="Click to share on Pinterest"><span></span><span
                                                        className="sharing-screen-reader-text">Click to
                                                                        share on Pinterest (Opens in new
                                                                        window)</span></a></li>
                                                    <li className="share-end"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 pb-1">
                            <div className="bg-gray-200 py-3 py-md-5 px-3 px-md-6">

                                <div className="d-md-flex align-items-center">
                                    <a className="d-block text-center text-md-left mb-3 mb-md-0"
                                       href="https://bookworm.madrasthemes.com/author/nilofer/">
                                        <img width="120" height="120"
                                             src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img11.jpg"
                                             className="avatar avatar-120 photo img-fluid rounded-circle max-width-120 height-120 mr-md-4"
                                             alt decoding="async"
                                             srcSet="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img11.jpg 140w, https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img11-100x100.jpg 100w, https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img11-24x24.jpg 24w, https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img11-48x48.jpg 48w, https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img11-96x96.jpg 96w"
                                             sizes="(max-width: 120px) 100vw, 120px"/> </a>
                                    <div className="text-center text-md-left">
                                        <h6 className="font-weight-medium font-size-3"><a
                                            href="https://bookworm.madrasthemes.com/author/nilofer/" rel="author">Andrea
                                            Gard</a></h6>
                                        <p className="font-size-2 mb-0">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt.</p>
                                        <ul className="list-unstyled mb-0 d-md-flex">
                                        </ul>
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
export const BlogDetail = () => {
    const location = useLocation();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await blogDetail();
                setBlog(response);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };
        fetchBlog();
    }, []);
    return (
        <div>
            <Breadcrumb location={location}/>
            <div className="bookworm-single-post my-5 mb-lg-6 pb-xl-1">
                <div className="container">
                    <div className="container__inner">
                        <article id="post-1358"
                                 className="article article__single post-1358 post type-post status-publish format-standard has-post-thumbnail hentry category-childrens-books category-science-math tag-arts tag-books tag-kids tag-romance">
                            <img width="1400" height="650"
                                 src={blog.image}
                                 className="img-fluid d-block mx-auto wp-post-image" alt decoding="async"
                                 fetchPriority="high"
                                 srcSet="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13.jpg 1400w, https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13-300x139.jpg 300w, https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13-1024x475.jpg 1024w, https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-13-768x357.jpg 768w"
                                 sizes="(max-width: 1400px) 100vw, 1400px"/>
                            <BlogContent/>
                            <Author/>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogDetail;