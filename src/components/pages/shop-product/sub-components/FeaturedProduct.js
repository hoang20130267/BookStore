import React from "react";
import {Link} from "react-router-dom";

const FeaturedProduct = () =>{
    return(
        <li className="mb-5">
            <div className="media">
                <div className="media d-md-flex">
                    <Link to="/product-detail"
                       className="d-block">
                        <img width="150" height="200"
                             src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/9-150x200.jpg"
                             className="img-fluid" alt style={{maxWidth: "60px"}}
                             loading="lazy"/>
                    </Link>
                    <div className="media-body ml-3 pl-1">
                        <h6 className="font-size-2 text-lh-md font-weight-normal crop-text-2">
                            <Link to="/product-detail">
                                Until the End of Time: Mind, Matter, and Our Search
                                for
                                Meaning in an Evolving Universe </Link></h6>
                        <span className="woocommerce-Price-amount amount"><span
                            className="woocommerce-Price-currencySymbol">&#036;</span>12.99</span>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default FeaturedProduct;