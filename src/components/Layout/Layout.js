import React from 'react';
import RoomsAvailability from '../Rooms/RoomsAvailability/RoomsAvailability';
import RoomsOccupied from '../Rooms/RoomsOccupied/RoomsOccupied';

const Layout = () => {
    return (
        <div className="outerContainer">
            <RoomsAvailability />
            <RoomsOccupied />
        </div>
    );
}

export default Layout;