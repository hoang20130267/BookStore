import React from "react";
import {Link} from "react-router-dom";

const AddressItem = ({isDefault}) => {
    return (
        <div className="address-item-container">
            <div className="address-item">
                <div className="d-flex justify-content-between"
                     style={{marginBottom: "4px"}}>
                    <div className="address-card_header">
                                                <span className="name-span">
                                                    <div className="user-name">Nguyễn Nhất Đăng Khoa</div>
                                                </span>
                        <div className="separate"></div>
                        <div role="row"
                             className="phone-number d-flex align-items-center">(+84) 123456789
                        </div>
                    </div>
                    <div className="d-flex justify-content-end" style={{flexBasis: "40px"}}>
                        <Link to="/user/address/update"><button className="function-button update-button">Cập nhật</button></Link>
                        {isDefault === false && (<button className="function-button delete-button">Xóa</button>)}
                    </div>
                </div>
                <div className="address-card_content d-flex justify-content-between"
                     style={{marginBottom: "4px"}}>
                    <div className="flex-grow-1 d-flex"
                         style={{overflowX: "hidden", marginRight: "8px"}}>
                        <div className="address-content">
                            <div role="row" className="d-flex align-items-center">KTX Khu B DHQG
                            </div>
                            <div role="row" className="d-flex align-items-center">Phường
                                Linh
                                Xuân, Thành Phố Thủ
                                Đức,
                                TP. Hồ Chí Minh
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end"
                         style={{paddingTop: "4px", flexBasis: "40px"}}>
                        <button className="set-default-button" disabled={isDefault}>Thiết lập mặc
                            định
                        </button>
                    </div>
                </div>
                {isDefault === true && (<div id="address-card_badge" role="row"
                                              className="d-flex align-items-center">
                    <span role="mark" className="span-default">Mặc định</span>
                </div>)}
            </div>
        </div>
    );
}
export default AddressItem;