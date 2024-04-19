import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import LeftSideBar from "../my-account/sub-components/LeftSideBar";
import APIService from "../../../service/APIService";
import {isEmpty} from "react-admin";
import {useHistory} from 'react-router-dom';

const AddNewAddress = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiServiceWithToken = new APIService(token);
    const apiService = new APIService();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hnumSname, setHnumSname] = useState('');
    const [wardCommune, setWardCommune] = useState('');
    const [countyDistrict, setCountyDistrict] = useState('');
    const [provinceCity, setProvinceCity] = useState('');
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('')
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [wards, setWards] = useState([]);
    const [selectedWard, setSelectedWard] = useState('');
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
    const navigate = useNavigate();
    console.log(fullName)
    console.log(phoneNumber)
    console.log(wardCommune)
    console.log(countyDistrict)
    console.log(provinceCity)
    console.log(saveButtonEnabled)
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
            setSelectedProvince(selectedValue);
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
            setSelectedDistrict(selectedValue);
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
            setSelectedWard(selectedValue);
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
        } catch (error) {
            console.error("Error creating address");
        }
    }
    const handleButtonSave = (e) => {
        e.preventDefault();
        addAddress();
        navigate('/user/address');
    }
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="container d-flex mt-5 mb-5 px-0">
                <LeftSideBar/>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Thêm địa chỉ mới</h4>
                        <p style={{
                            color: "#11ff02",
                            textAlign: "center",
                            textTransform: "none",
                            paddingTop: "5px"
                        }}>
                        </p>
                    </div>
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
                                                   onChange={(e) => setFullName(e.target.value)}/>
                                        </div>
                                        <div className="col-md-12"><label className="labels"
                                                                          style={{paddingTop: "10px"}}>Số
                                            điện
                                            thoại</label><input id="phone" type="text" className="form-control"
                                                                name="phone"
                                                                placeholder="Nhập số điện thoại tại đây"
                                                                onChange={(e) => setPhoneNumber(e.target.value)}/>
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
                                        <select id="district" className="pdw" onChange={handleDistrictChange}>
                                            <option value="">Quận/Huyện</option>
                                            {districts.map(district => (
                                                <option key={district.district_id} value={district.district_id}>
                                                    {district.district_name}
                                                </option>))}
                                        </select>
                                        <br/>
                                        <label>Phường/Xã:</label>
                                        <select id="ward" className="pdw" onChange={handleWardChange}>
                                            <option value="">Phường/Xã</option>
                                            {wards.map(ward => (
                                                <option key={ward.ward_id} value={ward.ward_id}>
                                                    {ward.ward_name}
                                                </option>))}
                                        </select>
                                        <br/>
                                        <input type="text" id="soNha" className="form-control"
                                               placeholder="Số nhà, Tên đường"
                                               onChange={(e) => setHnumSname(e.target.value)}/>
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
                                        <button disabled={!saveButtonEnabled} onClick={handleButtonSave}
                                                className="btn btn-primary profile-button"
                                                type="submit">Thêm địa chỉ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddNewAddress;
