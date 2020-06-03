import React from 'react';
import './PanelHeader.css';


const PanelHeader = (props) => {
    const  { title,  classTitle, text, guestData, roomsUsage, subClass, currency } = props;
    const classHdr= "textHdr " + subClass;
    return (
        <div className={classTitle}>
            <div className={classHdr}>{title} {roomsUsage != null  ? ": "+ roomsUsage : ""} </div>
            <div className="textHdr">{text} : {currency != null ? <span>&euro;</span> : ""}{ guestData}</div>
        </div>
    );
}

export default PanelHeader;