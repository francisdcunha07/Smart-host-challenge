import React, { useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import { OccupancyContext } from '../../../context/HotelContext';
import './RoomsOccupied.css';
import PanelHeader from '../../SummaryPanel/PanelHeader/PanelHeader';
import Rooms from '../../SummaryPanel/RoomPanel/Rooms';
import RoomContainer from '../../SummaryPanel/RoomContainer/RoomContainer';




const RoomsOccupied = () => {
    const { roomsData } = useContext(OccupancyContext);
    const { totalGuest, economyRooms, premiumRooms } = roomsData;

    let sortedList = totalGuest && totalGuest.sort(function (a, b) {
        return b - a;
    });

    let premiumRoomAllocated = 0
    let economyGuests = [];
    let premiumGuests = [];
    

    for (premiumRoomAllocated; premiumRoomAllocated < premiumRooms && premiumRoomAllocated < sortedList.length; premiumRoomAllocated++) {
        if (sortedList[premiumRoomAllocated] < 100) {
            break;
        }
        premiumGuests.push(sortedList[premiumRoomAllocated]);
    }

    let lowerPayingGuestCount = sortedList.filter(sl => sl < 100).length;

    if (economyRooms < lowerPayingGuestCount && premiumRoomAllocated < premiumRooms) {
        for (premiumRoomAllocated; (premiumRoomAllocated < premiumRooms && premiumRoomAllocated < sortedList.length && economyRooms < lowerPayingGuestCount); premiumRoomAllocated++) {
            premiumGuests.push(sortedList[premiumRoomAllocated]);
            lowerPayingGuestCount--;
        }
    }

    var remainingGuests = sortedList.slice(premiumRoomAllocated, sortedList.length).filter(rg => rg < 100);
    for (var economyRoomAllocated = 0; (economyRoomAllocated < economyRooms && economyRoomAllocated < remainingGuests.length); economyRoomAllocated++) {

        economyGuests.push(remainingGuests[economyRoomAllocated]);

    }

    const panel = (
        <div className="summaryPanel" >
            <PanelHeader title="Occupancy Details" text="Guest Interested" roomsUsage={null} classTitle="header" subClass="FB" guestData={totalGuest.length} />
            <div className="summaryContainer" currency={null}>

                <RoomContainer title="Premium Rooms"
                    text="Rooms Available" title2="Rooms Occupied"
                    roomsUsage={null} text2="Total Amount"
                    classTitle="contentHdrDetails"
                    subClass="FB"
                    guests={premiumGuests} classTitle2="contentHdrDetails totalDetails" subClass2=""
                    guestData={premiumRooms} />

                <RoomContainer title="Economy Rooms"
                    text="Rooms Available" title2="Rooms Occupied"
                    roomsUsage={null} text2="Total Amount"
                    classTitle="contentHdrDetails"
                    subClass=""
                    guests={economyGuests} classTitle2="contentHdrDetails totalDetails" subClass2=""
                    guestData={economyRooms} />


            </div>
        </div>)

    const dummyDiv = (<div></div>)

    return premiumRooms !== undefined ? panel : dummyDiv;
}

export default RoomsOccupied;