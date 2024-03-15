import React from "react";

const NotFound = () => {
    return (
        <>
            <div className="page-header border-bottom">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center py-4">
                        <nav className="woocommerce-breadcrumb font-size-2"><a className="h-primary"
                                                                               href="https://bookworm.madrasthemes.com">Home</a><span
                            className="breadcrumb-separator mx-2"><i className="fas fa-angle-right"></i></span>Error 404
                        </nav>
                    </div>
                </div>
            </div>
            <main id="content" role="main">
                <div className="container">
                    <div className="space-bottom-1 space-top-xl-2 space-bottom-xl-4">
                        <div className="d-flex flex-column align-items-center pt-lg-7 pb-lg-4 pb-lg-6">
                            <div className="font-weight-medium font-size-200 font-size-xs-170 text-lh-sm mt-xl-1">404
                            </div>
                            <h6 className="font-size-4 font-weight-medium mb-2">Woops, looks like this page does not
                                exist</h6>
                            <span className="font-size-2 mb-6">You could either go back or go to homepage</span>
                            <div className="d-flex align-items-center flex-column">
                                <a href="javascript:history.back()"
                                   className="btn btn-dark rounded-0 btn-wide height-60 width-250 font-weight-medium d-flex align-items-center justify-content-center">
                                    Go Back </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default NotFound;