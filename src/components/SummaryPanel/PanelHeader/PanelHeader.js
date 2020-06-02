import React from 'react';
import './PanelHeader.css';


const PanelHeader = (props) => {
    const  { title,  classTitle, text, guestData, roomsUsage } = props;
    return (
        <div className={classTitle}>
            <div className="textHdr">{title} {roomsUsage != null  ? ":"+ roomsUsage : ""} </div>
            <div className="textHdr">{text} : { guestData}</div>
        </div>
    );
}

export default PanelHeader;