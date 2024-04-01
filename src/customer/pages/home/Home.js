import {Banner} from "./Banner";
import {TopSeller} from "./TopSeller";
import {TopBook} from "./TopBook";
import {NewBooks} from "./NewBooks";
import {Advertise} from "./Advertise";
import {Categories} from "./Categories";
import {Features} from "./Features";
import { Helmet } from 'react-helmet';

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
                            <NewBooks/>
                            <Advertise/>
                            <Categories/>
                            <Features/>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                {/*<script src="./../../assets/js/jquery.min" id="jquery-core-js"></script>*/}
                {/*<script src="./../../assets/js/jquery-migrate.min" id="jquery-migrate-js"></script>*/}
                {/*<script src="./../../assets/js/bootstrap.min" id="bootstrap-js"></script>*/}
                {/*<script src="./../../assets/js/hs.core" id="hs-core-js"></script>*/}
                {/*<script src="./../../assets/js/hs.unfold" id="hs-unfold-js"></script>*/}
                {/*<script src="./../../assets/js/bookworm" id="bookworm-js-js"></script>*/}
            </Helmet>
        </main>
    )
}