import React from 'react';
import HotelRoundedIcon from '@material-ui/icons/HotelRounded';
import './Rooms.css';


const Rooms = (props) => {
    const { guest, index } = props;
    return (
        <div className="room">
            <HotelRoundedIcon />
            <div className="vr"></div>
            <div> Guest{index}</div>
            <div> ${guest}</div>
        </div>
    );
}

export default Rooms;