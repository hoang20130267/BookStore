import "../../assets/css/popup.css";
import { GiCancel } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
const PopupNotification = ({ info, onClose}) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose();
        }
    };
    return (
        <>
            <div className="overlay" onClick={handleOverlayClick}></div>
                <div className={"popup-notification"} style={{width:"400px", height:"300px"}}>
                    <div className={"popup"}>
                        <GiCancel className={"cancel"} onClick={onClose} size={"25px"}/>
                    </div>
                        <div className="popup-header" style={{marginTop:"20px"}}>
                            <h4 style={{textAlign:"center", marginLeft:"25px"}}>Thông báo</h4>
                            <div className="icon-container">
                                <FaRegCheckCircle className="icon" size="100px" />
                            </div>
                                <p style={{textAlign:"center", marginTop:"20px", fontSize:"20px"}}>{info}</p>
                        </div>
            </div>
        </>
    );
};

export default PopupNotification;