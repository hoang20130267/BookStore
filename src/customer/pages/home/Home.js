import {Banner} from "./Banner";
import {TopSeller} from "./TopSeller";
import {TopBook} from "./TopBook";
import {Advertise} from "./Advertise";
import {Categories} from "./Categories";
import {Features} from "./Features";
import "react-multi-carousel/lib/styles.css";
import ScrollToTop from "../../components/general/ScrollToTop";

export const Home = () => {
    return (
        <main id="main" className="site-main" role="main">
            <div id="post-152" className=" article__page post-152 page type-page status-publish hentry">
                <div className="article__content article__content--page">
                    <div className="page__content">
                        <div className="wp-block-bwgb-template bwgb-template" id="bwgb-e84cf01">
                            <Banner/>
                            <TopSeller/>
                            <TopBook/>
                            <Advertise/>
                            <Categories/>
                            <Features/>
                            <ScrollToTop/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}