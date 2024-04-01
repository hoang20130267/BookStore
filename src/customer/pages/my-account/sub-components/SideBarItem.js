import React from "react";
import {Link} from "react-router-dom";

const SideBarItem = ({to, iconClassName, itemName}) => {
    return (
        <li className="left-side py-2 px-3">
            <div className="stardust-dropdown">
                <Link className="sidebar-item" to={to}>
                    <div className="sidebar-item-icon">
                        <i className={iconClassName}></i>
                    </div>
                    <div style={{lineHeight: "1rem"}}><span className="item-name" style={{fontWeight: 500}}>{itemName}</span>
                    </div>
                </Link>
            </div>
        </li>
    );
}
export default SideBarItem;
