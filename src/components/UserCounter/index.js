import React from "react";
import './style.css'
const UserCounter = ({ text, count, className }) => {
    return (
        <div className={className}>
            <span className="UserCounter">{count}</span>
            <span className="UserText">{text}</span>
        </div>
    )
}

export default UserCounter;