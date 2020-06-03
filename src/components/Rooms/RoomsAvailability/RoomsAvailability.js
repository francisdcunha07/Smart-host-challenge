import React, { useState, useContext } from 'react';
import { Container, FormControl, Input, InputLabel, Grid, TextField } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import './RoomsAvailability.css';
import { OccupancyContext } from '../../../context/HotelContext';

const RoomsAvailability = () => {
    const [premuimRooms, setPremiumRooms] = useState(0);
    const [economyRooms, setEconomyRooms] = useState(0);

    const { dispatch } = useContext(OccupancyContext);

    const handleOccupancy = (e) => {
        e.preventDefault();
        const rooms = { premuimRooms, economyRooms };
        dispatch({ type: 'UPDATE_ROOMS',  rooms });
    }
    return (
        <div className="roomsContainer">
            <Container>
                <form onSubmit={handleOccupancy}>
                    <div>
                        <span className="label-input100">No. of Premium Rooms</span>
                        <input type="number" placeholder="Enter Premium Rooms" min="0" required onChange={e => setPremiumRooms(e.target.value)} />
                    </div>
                    <div>
                        <span className="label-input100">No. of Economy Rooms</span>
                        <input type="number" min="0" placeholder="Enter Economy Rooms Occupied" required onChange={e => setEconomyRooms(e.target.value)} />

                    </div>
                    <input type="submit" value="Calculate Occupancy" />
                </form>
            </Container>
        </div>
    );
}

export default RoomsAvailability;