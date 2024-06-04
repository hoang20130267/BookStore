import Breadcrumb from "../../components/general/Breadcrumb";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import APIService from "../../../service/APIService";
import formatCurrency from "../../../utils/formatCurrency";
import axios from "axios";

export const OrderDetail = () => {
    const location = useLocation();
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [orderDetails, setOrderDetails] = useState([]);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiService = new APIService(token);
    const [promotion, setPromotion] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.fetchData(`http://localhost:8080/api/orders/${id}`);
                setOrder(result);
                if (result.orderDetails) {
                    setOrderDetails(result.orderDetails);
                }
                if(result.promotion){
                    setPromotion(result.promotion.discount);
                }
            } catch (error) {
                console.log('Error fetching data', error)
            }
        }
        fetchData();
    }, [orderDetails]);
    console.log(promotion)
    return (
        <div>
            <Breadcrumb location={location}/>
            <div className="container rounded bg-white mt-5 mb-5">
                <form method="post" encType="multipart/form-data" className="infor_user">
                    <div className="row">
                        <div className="col-md-8 checkout__order" style={{margin: "auto"}}>
                            <div className="col-lg-12 col-md-6">
                                <div className="checkout__order">
                                    <h4 style={{textAlign: "center"}}>Chi tiết hóa đơn</h4>

                                    <table className="table table-sm fs--1 mb-0">
                                        <thead>
                                        <tr>
                                            <th className="sort align-middle pe-5" scope="col" data-sort="total-spent"
                                                style={{width: "20%"}}>Mã SP
                                            </th>
                                            <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                                style={{width: "40%"}}>Tên Sản Phẩm
                                            </th>
                                            <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                                style={{width: "20%"}}>Số Lượng
                                            </th>
                                            <th className="sort align-middle " scope="col" data-sort="total-orders"
                                                style={{width: "20%", textAlign: "right"}}>Giá

                                            </th>
                                        </tr>
                                        </thead>
                                        <input id="idTransport" value="" type="text"
                                               style={{display: "none"}}/>
                                        <tbody class="list" id="table-latest-review-body">
                                        {orderDetails.map(orderDetail => (<tr key={orderDetail.id}
                                                                              class="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td class="fs--1 align-middle ps-0 py-3">{orderDetail.product?.detail?.productSku}</td>
                                            <td class="customer align-middle white-space-nowrap pe-5">
                                                {orderDetail.product?.title}
                                            </td>
                                            <td class="email align-middle white-space-nowrap pe-5"
                                                style={{textAlign: "center"}}>{orderDetail.quantity}
                                            </td>
                                            <td class="email align-middle white-space-nowrap pe-5"
                                                style={{textAlign: "right"}}>
                                                {formatCurrency(orderDetail.totalMoney)}
                                            </td>
                                        </tr>))}
                                        </tbody>
                                    </table>
                                    {promotion ? <div>Áp dụng voucher: <span
                                        style={{float: "right"}}>{promotion}%</span></div> : null}
                                    {promotion> 0 ? <div>Giá được giảm: <span
                                        style={{float: "right"}}>{formatCurrency(orderDetails[0].totalMoney * promotion / 100)}</span> </div> : null}
                                    <div style={{borderTop: "1px solid #e1e1e1"}}>Phí vận chuyển: <span style={{float: "right"}}
                                                               id="fee">{formatCurrency(order.shippingCost)}</span>
                                    </div>
                                    <div>Tạm tính: <span
                                        style={{float: "right"}}>
                                        {formatCurrency(order.orderTotal)}
                                    </span></div>
                                    <input value="" id="provisional" style={{display: "none"}}/>
                                    <div>Phương thức thanh toán: <span
                                        style={{float: "right"}}>{order.paymentMethod?.name}</span></div>
                                    <div>Địa chỉ giao hàng: <span
                                        style={{float: "right"}}>{order.shippingAddress?.wardCommune}, {order.shippingAddress?.countyDistrict}
                                        , {order.shippingAddress?.provinceCity}                                        </span>
                                    </div>
                                    <div>Ghi chú đơn hàng: <span style={{float: "right"}}>{order.note}
                                        </span></div>
                                    <div className="checkout__order__total text-right">Tổng tiền <span
                                        id="tongtien"></span>
                                        {formatCurrency(order.orderTotal)}
                                    </div>
                                    <div class="site-btn" style={{
                                        backgroundColor: "yellowgreen",
                                        borderRadius: "5px",
                                        float: "right"
                                    }}>
                                        {order.status?.name}
                                    </div>
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