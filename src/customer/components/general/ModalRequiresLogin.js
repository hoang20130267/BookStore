import React from "react";
import {Link} from "react-router-dom";

const ModalRequiresLogin = ({isOpen, toDo, onClose}) => {
    if (!isOpen) return null;
    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="modal" onClick={handleCloseModal}>
            <div className="modal-contents">
                <h2>Yêu cầu đăng nhập</h2>
                <p>Bạn cần phải <Link to="/sign-in" style={{color: 'red'}}>Đăng nhập</Link> để {toDo}.</p>
            </div>
        </div>
    );
}
export default ModalRequiresLogin;