export const PageLink = () => {
    return (
        <div className="page-header border-bottom">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center py-4">
                    <nav className="woocommerce-breadcrumb font-size-2">
                        <a className="h-primary"
                             href="https://bookworm.madrasthemes.com">Home</a>
                        <span
                        className="breadcrumb-separator mx-2"><i
                        className="fas fa-angle-right"></i></span>
                        <a className="h-primary"
                             href="https://bookworm.madrasthemes.com/product-category/mystery/">My Account</a>
                        <span
                            className="breadcrumb-separator mx-2"><i
                            className="fas fa-angle-right"></i></span>
                        <a className="h-primary"
                           href="https://bookworm.madrasthemes.com/product-category/mystery/">My Orders</a>
                        <span className="breadcrumb-separator mx-2"><i className="fas fa-angle-right"></i></span>Order Detail
                    </nav>
                </div>
            </div>
        </div>
    )
}
export const OrderDetail = () => {
    return (
        <div>
            <PageLink/>
            <div className="container rounded bg-white mt-5 mb-5" >
                <form method="post" encType="multipart/form-data" className="infor_user">
                    <div className="row">
                        <div className="col-md-8 checkout__order" style={{margin: "auto"}}>
                            <div className="col-lg-12 col-md-6">
                                <div className="checkout__order">
                                    <h4 style={{textAlign:"center"}}>Chi tiết hóa đơn</h4>

                                    <table className="table table-sm fs--1 mb-0">
                                        <thead>
                                        <tr>
                                            <th className="sort align-middle pe-5" scope="col" data-sort="total-spent"
                                                style={{width:"20%"}}>Mã SP
                                            </th>
                                            <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                                style={{width:"40%"}}>Tên Sản Phẩm
                                            </th>
                                            <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                                style={{width:"20%"}}>Số Lượng
                                            </th>
                                            <th className="sort align-middle " scope="col" data-sort="total-orders"
                                                style={{width:"20%", textAlign: "right"}}>Giá

                                            </th>
                                        </tr>
                                        </thead>
                                        <input id="idTransport" value="" type="text"
                                               style={{display: "none"}}/>
                                        <tbody class="list" id="table-latest-review-body">
                                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td class="fs--1 align-middle ps-0 py-3">015</td>
                                            <td class="customer align-middle white-space-nowrap pe-5">Sách Đắc Nhân Tâm</td>
                                            <td class="email align-middle white-space-nowrap pe-5"
                                                style={{textAlign: "center"}}>1</td>
                                            <td class="email align-middle white-space-nowrap pe-5"
                                                style={{textAlign: "right"}}>
                                                150.000đ
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div style={{borderTop: "1px solid #e1e1e1"}}>Tạm tính: <span style={{float: "right"}}>
                                    100.000 ₫</span></div>
                                    <input value="" id="provisional" style={{display: "none"}}/>
                                    <div>Phí vận chuyển: <span style={{float: "right"}} id="fee"></span></div>
                                    <div>Phương thức thanh toán: <span
                                        style={{float: "right"}}>Thanh toán khi nhận hàng</span></div>
                                    <div>Ghi chú đơn hàng: <span style={{float: "right"}}>
                                        </span></div>
                                    <div className="checkout__order__total">Tổng tiền <span id="tongtien"></span>100.000đ
                                    </div>
                                    <div class="site-btn" style={{backgroundColor: "yellowgreen", borderRadius:"5px", float:"right"}}>Hoàn thành</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default OrderDetail;