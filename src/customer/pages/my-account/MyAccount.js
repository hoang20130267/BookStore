import React, {useEffect, useState} from "react";
import "../../assets/css/style-myaccount.css"
import {useLocation} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import LeftSideBar from "./sub-components/LeftSideBar";
import APIService from "../../../service/APIService";
import {isEmpty} from "react-admin";

const MyAccount = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [day, setDay] = useState('0');
    const [month, setMonth] = useState('0');
    const [year, setYear] = useState('0');
    const [avatar, setAvatar] = useState('');
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiService = new APIService(token);
    const [isChecked, setIsChecked] = useState(false);
    const [information, setInformation] = useState({});
    const fetchInformation = async () => {
        const result = await apiService.fetchData("http://localhost:8080/api/user/info");
        setInformation(result)
        setFullName(result.userInfo?.fullName);
        setPhoneNumber(result.userInfo?.phoneNumber);
        setGender(result.userInfo?.gender);
        if (result.userInfo?.dateOfBirth) {
            const [fetchedYear, fetchedMonth, fetchedDay] = result.userInfo?.dateOfBirth.split('-');
            setDay(fetchedDay.padStart(2, '0'));
            setMonth(fetchedMonth.padStart(2, '0'));
            setYear(fetchedYear);
        }
        if (result.userInfo?.avatar) {
            setAvatar(result.userInfo.avatar);
        }
    }

    const handleGenderChange = (event) => {
        const selectedGender = event.target.value;
        setGender(selectedGender);
    };
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const updateInformation = async (requestData) => {
        try {
            const responseData = await apiService.updateData(`http://localhost:8080/api/user/info/${information.userInfo.id}`, requestData)
            fetchInformation();
            console.log("User information updated successfully:", responseData);
        } catch (error) {
            console.log("Error updating information:", error);
        }
    }

    const createInformation = async (requestData) => {
        try {
            const responseData = await apiService.sendData("http://localhost:8080/api/user/info", requestData)
            fetchInformation();
            console.log("User information created successfully:", responseData);
        } catch (error) {
            console.log("Error creating information:", error);
        }
    }
    const handleButtonSave = (e) => {
        e.preventDefault();
        let formattedDate;
        if (day !== '0' && month !== '0' && year !== '0') {
            formattedDate = `${year}-${month}-${day}`;
        } else {
            formattedDate = '';
        }
        const requestData = {
            fullName: !isEmpty(fullName) ? fullName : null,
            phoneNumber: !isEmpty(phoneNumber) ? phoneNumber : null,
            gender: !isEmpty(gender) ? gender : null,
            dateOfBirth: !isEmpty(formattedDate) ? formattedDate : null,
            avatar: !isEmpty(avatar) ? avatar : null
        };
        if(information.userInfo!=null){
            updateInformation(requestData);
        }else{
            createInformation(requestData);
        }
    }

    useEffect(() => {
        fetchInformation();
    }, [])
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="container d-flex mt-5 mb-5 px-0">
                <LeftSideBar/>
                <form onSubmit={handleButtonSave} className="infor_user">
                    <div className="row border py-3 m-0" style={{borderRadius: "10px"}}>
                        <div className="col-md-8 border-right">
                            <div className="">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Thông tin tài khoản</h4>

                                    <p style={{
                                        color: "#11ff02",
                                        textAlign: "center",
                                        textTransform: "none",
                                        paddingTop: "5px"
                                    }}>
                                    </p>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Tên đăng nhập</label>
                                        <input type="text" id="username" value={information.username}
                                               className="form-control" name="username"
                                               placeholder="Nhập username" readOnly/>
                                    </div>
                                    <div className="col-md-6"><label className="labels">Họ và tên</label>
                                        <input onChange={handleFullNameChange} type="text" id="fullname"
                                               value={fullName}
                                               className="form-control" name="fullname"
                                               placeholder="Nhập họ tên"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Email</label>
                                        <input type="email" id="email" value={information.email}
                                               className="form-control" name="email"
                                               placeholder="Nhập email tại đây" readOnly/>
                                    </div>
                                    <div className="col-md-12"><label className="labels" style={{paddingTop: "10px"}}>Số
                                        điện
                                        thoại</label><input onChange={handlePhoneNumberChange} id="phone" type="text"
                                                            value={phoneNumber}
                                                            className="form-control" name="phone" maxLength="10"
                                                            placeholder="Nhập số điện thoại tại đây"/>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <label className="mb-0 mr-8">Giới tính</label>
                                    <label className="label-radio">
                                        <input type="radio" name="gender" value="male"
                                               checked={gender === 'male'}
                                               onChange={handleGenderChange}/>
                                        <span className="radio-fake"></span>
                                        <span className="label">Nam</span>
                                    </label>
                                    <label className="label-radio">
                                        <input type="radio" name="gender" value="female"
                                               checked={gender === 'female'}
                                               onChange={handleGenderChange}/>
                                        <span className="radio-fake"></span>
                                        <span className="label">Nữ</span>
                                    </label>
                                    <label className="label-radio">
                                        <input type="radio" name="gender" value="other"
                                               checked={gender === 'other'}
                                               onChange={handleGenderChange}/>
                                        <span className="radio-fake"></span>
                                        <span className="label">Khác</span>
                                    </label>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <label className="labels mb-0 mr-8">Ngày sinh</label>
                                    <div className="select-birthday">
                                        <select name="day" value={day} onChange={(e) => setDay(e.target.value)}>
                                            <option value="0">Ngày</option>
                                            {Array.from({length: 31}, (_, i) => (i + 1).toString().padStart(2, '0')).map((day) => (
                                                <option key={day} value={day}>{day}</option>
                                            ))}
                                        </select>
                                        <select name="month" value={month} onChange={(e) => setMonth(e.target.value)}>
                                            <option value="0">Tháng</option>
                                            {Array.from({length: 12}, (_, i) => (i + 1).toString().padStart(2, '0')).map((month) => (
                                                <option key={month} value={month}>{month}</option>
                                            ))}
                                        </select>
                                        <select name="year" value={year} onChange={(e) => setYear(e.target.value)}>
                                            <option value="0">Năm</option>
                                            {Array.from({length: 25}, (_, i) => 2024 - i).map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12 d-flex align-items-center">
                                        <input type="checkbox" id="checkbox" className="mr-2"
                                               checked={isChecked}
                                               onChange={() => setIsChecked(!isChecked)}
                                               style={{width: "15px", height: "15px"}}/>
                                        <label className="form-check-label" style={{marginTop: "2px"}}>Đổi mật
                                            khẩu</label>
                                    </div>
                                    {isChecked && (<div className="mt-3 w-100">
                                        <div className="col-md-12"><label className="labels">Mật khẩu hiện
                                            tại</label><input
                                            type="password" id="current-password" className="form-control"
                                            name="current-password"
                                            placeholder="Nhập mật khẩu hiện tại"/>
                                        </div>
                                        <br/>
                                        <div className="col-md-12"><label className="labels">Mật khẩu mới</label><input
                                            type="password" id="new-password" className="form-control"
                                            name="new-password"
                                            placeholder="Nhập mật khẩu mới"/>
                                        </div>
                                        <br/>
                                        <div className="col-md-12"><label className="labels">Nhập lại mật khẩu
                                            mới</label><input
                                            type="password" id="new-password-confirm" className="form-control"
                                            name="new-password-confirm" placeholder="Nhập lại mật khẩu mới"/>
                                        </div>

                                        <p style={{
                                            color: "red",
                                            textAlign: "center",
                                            textTransform: "none",
                                            paddingTop: "5px"
                                        }}>
                                        </p>
                                    </div>)}
                                </div>
                                <div className="mt-5 text-center">
                                    <button className="btn btn-primary profile-button">Lưu thông tin
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center text-center">
                                <div className="image-container">
                                    <div id="container">
                                        <div className="avatar-wrapper">
                                            <img className="img-avt-review profile-pic"
                                                 src={avatar ? avatar : require("../../assets/img/others/user.png")}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <div id="container">
                                        <input type="file" id="imageUpload" name="files" className="input-file"
                                               accept="image/*"/>
                                    </div>
                                </div>

                                <input type="text" id="deletedFile" value="" style={{display: "none"}}/>
                                <span className="font-weight-bold"></span>
                                <span className="text-black-50"></span><span> </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default MyAccount;