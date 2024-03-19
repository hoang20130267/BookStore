export const PageLink = () => {
    return (
        <div className="page-header border-bottom">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center py-4">
                    <nav className="woocommerce-breadcrumb font-size-2"><a className="h-primary"
                    >Home</a><span
                        className="breadcrumb-separator mx-2"><i
                        className="fas fa-angle-right"></i></span><a className="h-primary"
                    >My Account</a><span
                        className="breadcrumb-separator mx-2"><i className="fas fa-angle-right"></i></span>My Orders
                    </nav>
                </div>
            </div>
        </div>
    )
}
export const MyOrders = () => {
    return (
        <div>
            <PageLink/>
            <div className="container rounded bg-white mt-5 mb-5" style={{margin: "50px 100px 50px"}}>
                <form method="post" encType="multipart/form-data" className="infor_user">
                    <div className="row">
                        <div className="col-md-8 checkout__order" style={{margin: "30px 170px"}}>
                            <table className="table table-sm fs--1 mb-0">
                                <thead>
                                <tr>
                                    <th className="sort align-middle pe-5" scope="col" data-sort="total-spent"
                                        style={{width: "20%"}}>Mã Đơn
                                    </th>
                                    <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                        style={{width: "20%"}}>Tổng tiền
                                    </th>
                                    <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                        style={{width: "20%"}}>Ngày đặt
                                    </th>
                                    <th className="sort align-middle " scope="col" data-sort="total-orders"
                                        style={{width: "25%"}}>Trạng thái
                                    </th>
                                    <th className="sort align-middle " scope="col" data-sort="total-orders"
                                        style={{width: "20%"}}>Chi tiết
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="list" id="table-latest-review-body">
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs--1 align-middle ps-0 py-3">
                                        <p className="mb-0 text-1100 fw-bold">015</p>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap pe-5">
                                        <p className="mb-0 ms-3 text-1100 fw-bold">150.000đ</p>
                                    </td>
                                    <td className="email align-middle white-space-nowrap pe-5">20/3/2024</td>
                                    <td className="email align-middle white-space-nowrap pe-5">
                                        <p style={{color: "#22ff00"}}>Hoàn thành</p>

                                    </td>
                                    <td className="email align-middle white-space-nowrap pe-5"><a
                                        className="fw-semi-bold text-1100" href="">Xem</a></td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs--1 align-middle ps-0 py-3">
                                        <p className="mb-0 text-1100 fw-bold">015</p>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap pe-5">
                                        <p className="mb-0 ms-3 text-1100 fw-bold">150.000đ</p>
                                    </td>
                                    <td className="email align-middle white-space-nowrap pe-5">20/3/2024</td>
                                    <td className="email align-middle white-space-nowrap pe-5">
                                        <p style={{color: "blue"}}>Đang xử lý</p>

                                    </td>
                                    <td className="email align-middle white-space-nowrap pe-5"><a
                                        className="fw-semi-bold text-1100" style={{color:"red"}}>Xem</a></td>
                                </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default MyOrders;