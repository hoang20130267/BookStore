import {Link, useLocation, useParams} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {useEffect, useState} from "react";
import { CiClock1 } from "react-icons/ci";
import APIService from "../../../service/APIService";
import ScrollToTop from "../../components/general/ScrollToTop";

const apiService = new APIService();
export const BlogContent = ({ title, content, created_at, category }) => {
    return (
        <div className="article-post max-width-940 mx-auto bg-white position-relative">
            <div className="article-post__inner mt-n10 mt-md-n13 pt-5 pt-lg-7 px-0 px-md-5 pl-xl-10 pr-xl-8 mb-8">
                <div className="ml-xl-4">
                    <div className="mb-5 mb-lg-4">
                        <div className="mb-2 text-primary">
                            <Link to="" className="font-size-3 text-primary">{category}</Link>
                        </div>
                        <h6 className="font-size-10 mb-3 crop-text-2 font-weight-medium text-lh-1dot4">
                            {title}
                        </h6>
                        <div className="single-post-meta text-secondary-gray-700">
                            <CiClock1 style={{marginRight:"10px", marginBottom:"2px"}}/>
                            {created_at}
                        </div>
                    </div>
                    <div className="mb-7">
                        <div className="entry-content" dangerouslySetInnerHTML={{ __html: content }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Author = ({creator, email}) => {
    return (
        <div className="col-lg-9 px-0 px-md-5 mx-auto">
            <div className=" px-md-5 pl-xl-10 pr-xl-4">
                <div className="ml-xl-4">
                    <div className="mb-7 mt-0">
                        <div className="mb-4 pb-1">
                            <div className="bg-gray-200 py-3 py-md-5 px-3 px-md-6">

                                <div className="d-md-flex align-items-center">
                                    <a className="d-block text-center text-md-left mb-3 mb-md-0"
                                       href="https://bookworm.madrasthemes.com/author/nilofer/">
                                        <img width="120" height="120"
                                             src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDcaqhuc9hsM1FwGMd7AJFWyR13l42gfF-LqoC3PgcQ&s"}
                                             className="avatar avatar-120 photo img-fluid rounded-circle max-width-120 height-120 mr-md-4"
                                             alt decoding="async"
                                             sizes="(max-width: 120px) 100vw, 120px"/> </a>
                                    <div className="text-center text-md-left">
                                        <h6 className="font-weight-medium font-size-3">
                                            {creator}
                                            </h6>
                                        <p className="font-size-2 mb-0">
                                            Email : {email}
                                        </p>
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
    const {id} = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await apiService.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/blog/${id}`);
                setBlog(response);
                console.log("blog : "+response + "response : "+response.data)
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };
        fetchBlog();
    }, [id]);
    return (
        <div>
            <Breadcrumb/>
            <div className="bookworm-single-post my-5 mb-lg-6 pb-xl-1">
                <div className="container">
                    <div className="container__inner">
                        <article id="post-1358"
                                 className="article article__single post-1358 post type-post status-publish format-standard has-post-thumbnail hentry category-childrens-books category-science-math tag-arts tag-books tag-kids tag-romance">
                            <img width="1400" height="650"
                                 src={blog.image}
                                 className="img-fluid d-block mx-auto wp-post-image" alt decoding="async"
                                 fetchPriority="high"
                                 style={{maxHeight: '650px', objectFit: 'cover'}}
                                 sizes="(max-width: 1400px) 100vw, 1400px"/>
                            <BlogContent
                                title={blog.title}
                                content={blog.content}
                                created_at={blog.createdAt}
                                category={blog.blogCate ? blog.blogCate.name : ''}
                            />
                            <Author
                                creator={blog.createdBy ? blog.createdBy.username : ''}
                                email={blog.createdBy ? blog.createdBy.email : ''}
                            />
                        </article>
                    </div>
                </div>
            </div>
            <ScrollToTop/>
        </div>
    )
}
export default BlogDetail;