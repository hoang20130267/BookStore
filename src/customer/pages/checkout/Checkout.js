import Breadcrumb from "../../components/general/Breadcrumb";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "../../assets/css/style-checkout.css"
import React, {useEffect, useState} from "react";
import ApiService from "../../../service/APIService";
import APIService from "../../../service/APIService";
import formatCurrency from "../../../utils/formatCurrency";
import {isEmpty} from "react-admin";
import axios from "axios";

export const Coupon = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <h6><span className="icon_tag_alt"></span> Bạn có mã giảm giá ? <a
                    href="src/customer/pages/checkout/Checkout#">Nhấn vào đây</a> để nhận mã
                    giảm giá
                </h6>
            </div>
        </div>
    )
}
export const InputInfor = ({cartItems, subTotal}) => {
    const [ticked, setTicked] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [shippingCost, setShippingCost] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('cashondelivery');
    const [note, setNote] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hnumSname, setHnumSname] = useState('');
    const [wardCommune, setWardCommune] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [countyDistrict, setCountyDistrict] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [provinceCity, setProvinceCity] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
    const [placeOrderButtonEnabled, setPlaceOrderButtonEnabled] = useState(false);
    const [popupInfo, setPopupInfo] = useState({message: '', type: '', visible: false});
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiServiceWithToken = new ApiService(token);
    const {discount} = useParams();
    const [discountPercent, setDiscountPercent] = useState(0);
    const [discountId, setDiscountId] = useState(0);
    const navigate = useNavigate();

    const fetchAddresses = async () => {
        try {
            const result = await apiServiceWithToken.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/user/addresses`);
            setAddresses(result);
            const defaultAddress = result.find(address => address.default === true);
            if (defaultAddress) {
                setSelectedAddress(defaultAddress.id);
                setSelectedWard(defaultAddress.wardCode);
                setSelectedDistrict(defaultAddress.districtId);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchAddresses();
    }, []);

    const checkPlaceOrderButton = () => {
        setPlaceOrderButtonEnabled(confirm && cartItems.length > 0 && !isEmpty(selectedAddress));
    }

    useEffect(() => {
        checkPlaceOrderButton();
    }, [confirm, cartItems, selectedAddress])

    const checkSaveButton = () => {
        setSaveButtonEnabled(!isEmpty(fullName) && !isEmpty(phoneNumber) && !isEmpty(provinceCity) &&
            !isEmpty(countyDistrict) && !isEmpty(wardCommune) && !isEmpty(hnumSname));
    };
    useEffect(() => {
        checkSaveButton();
    }, [fullName, phoneNumber, provinceCity, countyDistrict, wardCommune, hnumSname])

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_GHN_ADDRESS}/province`, {
                    headers: {
                        token: `${process.env.REACT_APP_GHN_TOKEN}`,
                        'Content-Type': 'application/json'
                    }
                });
                setProvinces(response.data.data);
            } catch (error) {
                console.error('Error fetching province', error);
            }
        }
        fetchProvinces();
    }, [])

    const fetchDistrict = async (selectedProvince) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_GHN_ADDRESS}/district?province_id=${selectedProvince}`, {
                headers: {
                    token: `${process.env.REACT_APP_GHN_TOKEN}`,
                    'Content-Type': 'application/json'
                },
            });
            setDistricts(response.data.data)
        } catch (error) {
            console.error('Error fetching province', error);
        }
    }

    const fetchWard = async (selectedDistrict) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_GHN_ADDRESS}/ward?district_id=${selectedDistrict}`, {
                headers: {
                    token: `${process.env.REACT_APP_GHN_TOKEN}`,
                    'Content-Type': 'application/json'
                },
            });
            setWards(response.data.data)
        } catch (error) {
            console.error('Error fetching province', error);
        }
    }
    const handleProvinceChange = async (e) => {
        const selectedValue = parseInt(e.target.value);
        if (selectedValue !== '') {
            await fetchDistrict(selectedValue);
            const selectedProvince = provinces.find(province => province.ProvinceID === selectedValue);
            if (selectedProvince) {
                setSelectedDistrict('');
                setSelectedWard('');
                setSelectedProvince(selectedProvince.ProvinceID);
                setProvinceCity(selectedProvince.ProvinceName);
            } else {
                setProvinceCity('');
            }
        }
    }

    const handleDistrictChange = async (e) => {
        const selectedValue = parseInt(e.target.value);
        if (selectedValue !== '') {
            await fetchWard(selectedValue);
            const selectedDistrict = districts.find(district => district.DistrictID === selectedValue);

            if (selectedDistrict) {
                setSelectedWard('');
                setSelectedDistrict(selectedDistrict.DistrictID);
                setCountyDistrict(selectedDistrict.DistrictName);
            } else {
                setCountyDistrict('');
            }
        }
    }

    const handleWardChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue !== '') {
            const selectedWard = wards.find(ward => ward.WardCode === selectedValue);

            if (selectedWard) {
                setSelectedWard(selectedWard.WardCode);
                setWardCommune(selectedWard.WardName);
                CalculateFee(selectedWard.DistrictID, selectedWard.WardCode)
            } else {
                setWardCommune('');
            }
        }
    }
    const addAddress = async () => {
        const request = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            provinceCity: provinceCity,
            countyDistrict: countyDistrict,
            wardCommune: wardCommune,
            hnumSname: hnumSname,
            districtId: selectedDistrict,
            wardCode: selectedWard
        }
        try {
            const response = await apiServiceWithToken.sendData(`${process.env.REACT_APP_ENDPOINT_API}/user/addresses`, request)
            console.log("Address created successfully", response)
            setTicked(false);
        } catch (error) {
            console.error("Error creating address");
        }
    }
    const handleButtonSave = async (e) => {
        e.preventDefault();
        await addAddress();
        await fetchAddresses();
    }
    const createOrder = async () => {
        const request = {
            shippingAddress: {id: selectedAddress},
            orderTotal: subTotal + shippingCost,
            totalQuantity: cartItems.length,
            paymentMethod: paymentMethod,
            status: {id: 1},
            shippingCost: shippingCost,
            note: note,
            promotion: {id: discountId}
        }
        try {
            const response = await apiServiceWithToken.sendData(`${process.env.REACT_APP_ENDPOINT_API}/orders`, request);
            console.log("Order created successfully", response);
            const successMessage = response.message || 'Đơn hàng đã được đặt thành công';
            setPopupInfo({message: successMessage, type: 'success', visible: true});
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data);
            }
        }
    }
    useEffect(() => {
        const getDiscountCode = async () => {
            if (discount) {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/promotion/code/${discount}`);
                    setDiscountPercent(response.data.discount);
                    setDiscountId(response.data.id)
                } catch (error) {
                    console.error("Error fetching code:", error);
                }
            } else {
                setDiscountId(0);
            }
        };
        getDiscountCode();
    }, []);

    const handleButtonPlaceOrder = async (e) => {
        e.preventDefault();
        await createOrder();
    }

    const hidePopup = () => {
        setPopupInfo((prevInfo) => ({...prevInfo, visible: false}));
        navigate('/user/order');
    };

    useEffect(() => {
        const buttons = Array.from(document.querySelectorAll('button.add_cart_btn'));
        buttons.forEach(button => button.addEventListener('click', handleButtonPlaceOrder));
        return () => {
            buttons.forEach(button => button.removeEventListener('click', handleButtonPlaceOrder));
        };
    }, []);

    const shortenContent = (content, maxLength) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(content, 'text/html');
        const textContent = htmlDoc.body.textContent || "";
        if (textContent.length <= maxLength) {
            return textContent;
        } else {
            return textContent.substring(0, maxLength) + '...';
        }
    };
    const CalculateFee = async (to_district_id, to_ward_code) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_GHN_SHIP}`, {
                service_type_id: 2,
                from_district_id: 1542,
                to_district_id: parseInt(to_district_id),
                to_ward_code: to_ward_code,
                weight: 200,
                length: 1,
                width: 19,
                height: 10,
                service_id: null,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    token: process.env.REACT_APP_GHN_TOKEN
                }
            });
            setShippingCost(response.data.data.total);
        } catch (error) {
            console.log(error);
        }
    }
    const handleAddressChange = async (e) => {
        const selectedId = e.target.value;
        try {
            const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/user/addresses/${selectedId}`);
            const address = response.data;
            setSelectedAddress(address.id);
            setSelectedDistrict(address.districtId);
            setSelectedWard(address.wardCode);
        } catch (error) {
            console.error("Error fetching code:", error);
        }
    }
    useEffect(() => {
        if (selectedDistrict && selectedWard) {
            CalculateFee(selectedDistrict, selectedWard);
        }
    }, [selectedDistrict, selectedWard]);
    return (
        <>
            <form method="post">
                <div className="row">
                    <div className="col-lg-7 col-md-6">
                        <div id="checkout_block" className="checkout_block">
                            <div className="checkout_block_title">Địa chỉ giao hàng</div>
                            <div className="checkout_block_content">
                                <div className="checkout_block_list">
                                    {addresses.length > 0 ? (<ul id="checkout" className="checkout_block_list_items">
                                        {addresses.map(address => (
                                            <li key={address.id} className="checkout_block_list_item">
                                                <label className="label-radio">
                                                    <input
                                                        type="radio"
                                                        name="address"
                                                        value={address.id}
                                                        onChange={handleAddressChange}
                                                        defaultChecked={selectedAddress === address.id}
                                                    />
                                                    <span className="radio-fake"></span><span
                                                    className="label">{address.fullName}&nbsp;&nbsp;|&nbsp;&nbsp;{address.hnumSname}, {address.wardCommune}, {address.countyDistrict}, {address.provinceCity}&nbsp;&nbsp;|&nbsp;&nbsp;{address.phoneNumber}</span></label>
                                            </li>))}
                                    </ul>) : (<>Bạn chưa có địa chỉ giao hàng nào. Chọn <strong>Giao hàng đến địa chỉ
                                        khác</strong> để thêm địa chỉ.</>)}
                                </div>
                            </div>
                        </div>
                        <div className="checkout__input__checkbox">
                            <label htmlFor="diff-acc">
                                Giao hàng đến địa chỉ khác.
                                <input type="checkbox" id="diff-acc"
                                       checked={ticked}
                                       onChange={() => setTicked(!ticked)}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        {ticked && (<div style={{marginBottom: "20px"}}>
                            <form method="post" encType="multipart/form-data" className="infor_user">
                                <div className="row border py-3 m-0" style={{borderRadius: "10px"}}>
                                    <div className="col-md-6 border-right">
                                        <div className="p-3">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5 className="text-right">Thông tin liên hệ</h5>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-12"><label className="labels">Họ và tên</label>
                                                    <input type="text" id="fullname" className="form-control"
                                                           name="fullname"
                                                           placeholder="Nhập họ tên"
                                                           onChange={(e) => setFullName(e.target.value)}
                                                           required/>
                                                </div>
                                                <div className="col-md-12"><label className="labels"
                                                                                  style={{paddingTop: "10px"}}>Số
                                                    điện
                                                    thoại</label><input id="phone" type="text" className="form-control"
                                                                        name="phone"
                                                                        placeholder="Nhập số điện thoại tại đây"
                                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                                        maxLength={10}
                                                                        required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5 className="text-right">Địa chỉ</h5>
                                            </div>
                                            <div className="col-md-12">
                                                <label>Tỉnh/Thành phố:</label>
                                                <select id="province" className="pdw"
                                                        onChange={handleProvinceChange}>
                                                    <option value="">Tỉnh/Thành phố</option>
                                                    {provinces.map(province => (
                                                        <option key={province.ProvinceID} value={province.ProvinceID}
                                                                selected={selectedProvince === province.ProvinceID}>
                                                            {province.ProvinceName}
                                                        </option>
                                                    ))}
                                                </select>
                                                <br/>
                                                <label>Quận/Huyện:</label>
                                                <select id="district" className="pdw" onChange={handleDistrictChange}>
                                                    <option value="">Quận/Huyện</option>
                                                    {districts.map(district => (
                                                        <option key={district.DistrictID} value={district.DistrictID}
                                                                selected={selectedDistrict === district.DistrictID}>
                                                            {district.DistrictName}
                                                        </option>))}
                                                </select>
                                                <br/>
                                                <label>Phường/Xã:</label>
                                                <select id="ward" className="pdw" onChange={handleWardChange}>
                                                    <option value="">Phường/Xã</option>
                                                    {wards.map(ward => (
                                                        <option key={ward.WardCode} value={ward.WardCode}
                                                                selected={selectedWard === ward.WardCode}>
                                                            {ward.WardName}
                                                        </option>))}
                                                </select>
                                                <br/>
                                                <input type="text" id="soNha" className="form-control"
                                                       placeholder="Số nhà, Tên đường"
                                                       onChange={(e) => setHnumSname(e.target.value)}
                                                />
                                                <br/>
                                                <div id="error" style={{textAlign: "center", color: "red"}}></div>
                                            </div>
                                            <p style={{
                                                color: "red",
                                                textAlign: "center",
                                                textTransform: "none",
                                                paddingTop: "5px"
                                            }}>
                                            </p>
                                            <div className="mt-3 text-center">
                                                <button
                                                    disabled={!saveButtonEnabled}
                                                    onClick={handleButtonSave}
                                                    className="btn btn-primary profile-button"
                                                    type="submit">Lưu địa chỉ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>)}
                        <div id="checkout_block" className="checkout_block">
                            <div className="checkout_block_title">Phương thức vận chuyển</div>
                            <div className="checkout_block_content">
                                <div className="checkout_block_list">
                                    <ul id="checkout" className="checkout_block_list_items">
                                        <li className="checkout_block_list_item">
                                            <label className="label-radio">
                                                <input
                                                    type="radio"
                                                    name="shipping_cost_normal"
                                                    value={shippingCost}
                                                    // onChange={(e) => setShippingCost(e.target.value)}
                                                    defaultChecked={true}
                                                />
                                                <span className="radio-fake"></span><strong className="label">Giao hàng
                                                tiêu
                                                chuẩn:&nbsp;&nbsp;
                                                <span>{formatCurrency(shippingCost)}</span></strong></label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="checkout_block" className="checkout_block">
                            <div className="checkout_block_title">Phương thức thanh toán</div>
                            <div className="checkout_block_content">
                                <div className="checkout_block_list">
                                    <ul id="checkout" className="checkout_block_list_items">
                                        <li className="checkout_block_list_item">
                                            <label className="label-radio">
                                                <input
                                                    type="radio"
                                                    name="paymentmethod"
                                                    value="cashondelivery"
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    defaultChecked={paymentMethod === 'cashondelivery'}
                                                />
                                                <span className="radio-fake"></span>
                                                <span className="label">Thanh toán bằng tiền mặt khi nhận hàng.</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="checkout__input">
                            <p>Ghi chú</p>
                            <input onChange={(e) => setNote(e.target.value)} type="text"
                                   maxLength={150} placeholder="Ghi chú về đơn hàng của bạn."/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="checkout__order">
                            <h4>Hóa đơn của bạn</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th className="title">Sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th style={{textAlign: 'right'}}>Tổng tiền</th>
                                </tr>
                                </thead>
                                {cartItems.map(item => (<tr>
                                    <td title={item.product.title}>{shortenContent(item.product.title, 23)}</td>
                                    <td style={{textAlign: 'center'}}>x{item.quantity}</td>
                                    <td style={{textAlign: 'right'}}>{formatCurrency(item.product.currentPrice * item.quantity)}</td>
                                </tr>))}
                            </table>
                            {discountPercent > 0 && (
                                <div className="checkout__order__products">Mã giảm giá<span>- {discountPercent}%</span>
                                </div>
                            )}
                            <div className="checkout__order__subtotal">Tạm tính <span>{formatCurrency(subTotal)}</span>
                            </div>
                            <div className="checkout__order__shipping">Phí vận
                                chuyển <span>{formatCurrency(shippingCost)}</span></div>
                            <div className="checkout__order__total">Tổng
                                tiền <span>{formatCurrency(subTotal + shippingCost)}</span></div>
                            <div className="checkout__input__checkbox">
                                <label htmlFor="acc-or">
                                    <p>Xác nhận thông tin<span>*</span></p>
                                    <input type="checkbox" id="acc-or" required={true}
                                           onChange={() => setConfirm(!confirm)}/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <p>Tôi xác nhận thông tin đơn hàng và những thông tin tôi đã nhập là chính xác.</p>
                            <button disabled={!placeOrderButtonEnabled} onClick={handleButtonPlaceOrder} type="submit"
                                    className="site-btn">Mua hàng
                            </button>

                            <div
                                className={`popup popup--icon -success js_success-popup ${popupInfo.visible && popupInfo.type === 'success' ? 'popup--visible' : ''}`}>
                                <div className="popup__background"></div>
                                <div className="popup__content">
                                    <h3 className="popup__content__title">
                                        Thành công
                                    </h3>
                                    <p style={{marginBottom: "10px"}}>{popupInfo.message}</p>
                                    <p>
                                        <button className="button-popup button--success" data-for="js_success-popup"
                                                onClick={hidePopup}>Ẩn thông báo
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`popup popup--icon -error js_error-popup ${popupInfo.visible && popupInfo.type === 'error' ? 'popup--visible' : ''}`}>
                                <div className="popup__background"></div>
                                <div className="popup__content">
                                    <h3 className="popup__content__title">
                                        Thất bại
                                    </h3>
                                    <p style={{marginBottom: "10px"}}>{popupInfo.message}</p>
                                    <p>
                                        <button className="button-popup button--error" data-for="js_error-popup"
                                                onClick={hidePopup}>Ẩn thông báo
                                        </button>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export const Checkout = () => {
    const location = useLocation();
    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiServiceToken = new APIService(token);
    const {discount} = useParams();
    const [discountPercent, setDiscountPercent] = useState(0);

    useEffect(() => {
        const getDiscountCode = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/promotion/code/${discount}`);
                setDiscountPercent(response.data.discount);
            } catch (error) {
                console.error("Error fetching code:", error);
            }
        };
        getDiscountCode();
    }, []);
    const fetchCart = async () => {
        try {
            if (user) {
                const result = await apiServiceToken.fetchData(`${process.env.REACT_APP_ENDPOINT_API}/cart/items`);
                setCart(result);
                let totalAmount = 0;
                result.forEach(item => {
                    totalAmount += item.quantity * item.product.currentPrice;
                });
                if (discountPercent > 0) {
                    totalAmount -= totalAmount * discountPercent / 100;
                }
                setSubTotal(totalAmount);
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchCart();
    }, [user, cart, discountPercent]);

    return (
        <div>
            <Breadcrumb/>
            <section className="checkout spad">
                <div className="container">
                    <Coupon/>
                    <div className="checkout__form">
                        <h4>Thông tin thanh toán</h4>
                        <InputInfor cartItems={cart} subTotal={subTotal}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Checkout;