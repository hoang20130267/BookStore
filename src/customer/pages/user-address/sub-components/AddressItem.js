import React from "react";
import {Link} from "react-router-dom";

const AddressItem = ({address}) => {
    return (
        <div className="address-item-container">
            <div className="address-item">
                <div className="d-flex justify-content-between"
                     style={{marginBottom: "4px"}}>
                    <div className="address-card_header">
                                                <span className="name-span">
                                                    <div className="user-name">{address.full_name}</div>
                                                </span>
                        <div className="separate"></div>
                        <div role="row"
                             className="phone-number d-flex align-items-center">(+84) {address.phone_number}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end" style={{flexBasis: "40px"}}>
                        <Link to="/user/address/update">
                            <button className="function-button update-button">Cập nhật</button>
                        </Link>
                        {address.default === false && (
                            <button className="function-button delete-button">Xóa</button>)}
                    </div>
                </div>
                <div className="address-card_content d-flex justify-content-between"
                     style={{marginBottom: "4px"}}>
                    <div className="flex-grow-1 d-flex"
                         style={{overflowX: "hidden", marginRight: "8px"}}>
                        <div className="address-content">
                            <div role="row" className="d-flex align-items-center">{address.hnum_sname}
                            </div>
                            <div role="row"
                                 className="d-flex align-items-center">{address.ward_commune}, {address.county_district},
                                {address.province_city}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end"
                         style={{paddingTop: "4px", flexBasis: "40px"}}>
                        <button className="set-default-button" disabled={address.default}>Thiết lập mặc
                            định
                        </button>
                    </div>
                </div>
                {address.default === true && (<div id="address-card_badge" role="row"
                                                   className="d-flex align-items-center">
                    <span role="mark" className="span-default">Mặc định</span>
                </div>)}
            </div>
        </div>
    );
}
export default AddressItem;