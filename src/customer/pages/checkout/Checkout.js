import Breadcrumb from "../../components/general/Breadcrumb";
import {useLocation} from "react-router-dom";
import "../../assets/css/style-checkout.css"
import React, {useEffect, useState} from "react";
import ApiService from "../../../service/APIService";
import formatCurrency from "../../../utils/formatCurrency";
import {isEmpty} from "react-admin";

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
export const InputInfor = () => {
    const [ticked, setTicked] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [shippingCost, setShippingCost] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [note, setNote] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hnumSname, setHnumSname] = useState('');
    const [wardCommune, setWardCommune] = useState('');
    const [countyDistrict, setCountyDistrict] = useState('');
    const [provinceCity, setProvinceCity] = useState('');
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiServiceWithToken = new ApiService(token);
    const apiService = new ApiService();


    console.log(selectedAddress)
    console.log(deliveryMethod)

    const fetchAddresses = async () => {
        try {
            const result = await apiServiceWithToken.fetchData(`http://localhost:8080/api/user/addresses`);
            setAddresses(result);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchAddresses();
    }, []);

    const checkSaveButton = () => {
        setSaveButtonEnabled(!isEmpty(fullName) && !isEmpty(phoneNumber) && !isEmpty(provinceCity) &&
            !isEmpty(countyDistrict) && !isEmpty(wardCommune));
    };
    useEffect(() => {
        checkSaveButton();
    }, [fullName, phoneNumber, provinceCity, countyDistrict, wardCommune])

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await apiService.fetchData(`https://vapi.vnappmob.com/api/province`);
                console.log(response.results)
                setProvinces(response.results)
            } catch (error) {
                console.error('Error fetching province', error);
            }
        }
        fetchProvinces();
    }, [])

    const fetchDistrict = async (selectedProvince) => {
        try {
            const response = await apiService.fetchData(`https://vapi.vnappmob.com/api/province/district/${selectedProvince}`);
            console.log(response.results)
            setDistricts(response.results)
        } catch (error) {
            console.error('Error fetching province', error);
        }
    }

    const fetchWard = async (selectedDistrict) => {
        try {
            const response = await apiService.fetchData(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`);
            console.log(response.results)
            setWards(response.results)
        } catch (error) {
            console.error('Error fetching province', error);
        }
    }
    const handleProvinceChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue !== '') {
            fetchDistrict(selectedValue);
            const selectedProvince = provinces.find(province => province.province_id === selectedValue);

            if (selectedProvince) {
                setProvinceCity(selectedProvince.province_name);
            } else {
                setProvinceCity('');
            }
        }
    }

    const handleDistrictChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue !== '') {
            fetchWard(selectedValue);
            const selectedDistrict = districts.find(district => district.district_id === selectedValue);

            if (selectedDistrict) {
                setCountyDistrict(selectedDistrict.district_name);
            } else {
                setCountyDistrict('');
            }
        }
    }

    const handleWardChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue !== '') {
            const selectedWard = wards.find(ward => ward.ward_id === selectedValue);

            if (selectedWard) {
                setWardCommune(selectedWard.ward_name);
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
        }
        try {
            const response = apiServiceWithToken.sendData("http://localhost:8080/api/user/addresses", request)
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
    return (
        <div className="col-lg-8 col-md-6">
            <div id="checkout_block" className="checkout_block">
                <div className="checkout_block_title">Địa chỉ giao hàng</div>
                <div className="checkout_block_content">
                    <div className="checkout_block_list">
                        {addresses.length > 0 ? (<ul id="checkout" className="checkout_block_list_items">
                            {addresses.map(address => (<li key={address.id} className="checkout_block_list_item">
                                <label className="label-radio">
                                    <input
                                        type="radio"
                                        name="address"
                                        value={address.id}
                                        onChange={(e) => setSelectedAddress(e.target.value)}
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
                                        <input type="text" id="fullname" className="form-control" name="fullname"
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
                                            <option key={province.province_id} value={province.province_id}>
                                                {province.province_name}
                                            </option>
                                        ))}
                                    </select>
                                    <br/>
                                    <label>Quận/Huyện:</label>
                                    <select id="district" className="pdw"
                                            onChange={handleDistrictChange}>
                                        <option value="">Quận/Huyện</option>
                                        {districts.map(district => (
                                            <option key={district.district_id} value={district.district_id}>
                                                {district.district_name}
                                            </option>))}
                                    </select>
                                    <br/>
                                    <label>Phường/Xã:</label>
                                    <select id="ward" className="pdw"
                                            onChange={handleWardChange}>
                                        <option value="">Phường/Xã</option>
                                        {wards.map(ward => (
                                            <option key={ward.ward_id} value={ward.ward_id}>
                                                {ward.ward_name}
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
                                        name="shipping_method"
                                        value="shipping_cost_normal"
                                        onChange={(e) => setShippingCost(32000)}
                                    />
                                    <span className="radio-fake"></span><strong className="label">Giao hàng tiêu
                                    chuẩn:&nbsp;&nbsp;<span>{formatCurrency(32000)}</span></strong></label>
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
                                        checked={deliveryMethod === 'cashondelivery'}
                                        onChange={(e) => setDeliveryMethod(e.target.value)}
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
                <input type="text" placeholder="Ghi chú về đơn hàng của bạn."/>
            </div>
        </div>
    )
}
export const Bill = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="checkout__order">
                <h4>Hóa đơn của bạn</h4>
                <div className="checkout__order__products">Sản phẩm <span>Tổng tiền</span></div>
                <ul>
                    <li>Alaska Giant xám trắng <span>25.000.000đ</span></li>
                    <li>Cún golden siêu phẩm <span>30.000.000đ</span></li>
                    <li>Mèo chân ngắn tai cụp <span>30.000.000đ</span></li>
                </ul>
                <div className="checkout__order__subtotal">Tạm tính <span>85.000.000 Đồng</span></div>
                <div className="checkout__order__total">Tổng tiền <span>85.000.000 Đồng</span></div>
                <div className="checkout__input__checkbox">
                    <label htmlFor="acc-or">
                        <p>Xác nhận thông tin<span>*</span></p>
                        <input type="checkbox" id="acc-or" required={true}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <p>Tôi xác nhận thông tin đơn hàng và những thông tin tôi đã nhập là chính xác.</p>
                <button type="submit" className="site-btn">Mua hàng</button>
            </div>
        </div>
    )
}
export const Checkout = () => {
    const location = useLocation();
    return (
        <div>
            <Breadcrumb location={location}/>
            <section className="checkout spad">
                <div className="container">
                    <Coupon/>
                    <div className="checkout__form">
                        <h4>Thông tin thanh toán</h4>
                        <form action="src/customer/pages/checkout/Checkout#">
                            <div className="row">
                                <InputInfor/>
                                <Bill/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Checkout;