import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RoomsAvailability from '../Rooms/RoomsAvailability/RoomsAvailability';
import OccupancyContextProvider from '../../context/HotelContext';
import RoomsOccupied from '../Rooms/RoomsOccupied/RoomsOccupied';

const Home = () => {
    return (
        <React.Fragment>
            <OccupancyContextProvider>
                <NavBar />
                <div className="outerContainer">
                    <RoomsAvailability />
                    <RoomsOccupied />
                </div>
            </OccupancyContextProvider>
        </React.Fragment>
    );
}

export default Home;
