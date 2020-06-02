import React, { useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import { OccupancyContext } from '../../../context/HotelContext';
import './RoomsOccupied.css';
import PanelHeader from '../../SummaryPanel/PanelHeader/PanelHeader';
import Rooms from '../../SummaryPanel/RoomPanel/Rooms';




const RoomsOccupied = () => {
    const { roomsData } = useContext(OccupancyContext);
    const { totalGuest, economyRooms, premiumRooms } = roomsData;

    let sortedList = totalGuest && totalGuest.sort(function (a, b) {
        return b - a;
    });

    let premiumEarned = 0;
    let economyEarned = 0;

    let premiumRoomAllocated = 0
    let economyGuests = [];
    let premiumGuests = [];
    console.log('sortedList');
    console.log(sortedList);

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
            <PanelHeader title="Occupancy Details" text="Guest Interested" roomsUsage={null} classTitle="header" subClass="" guestData={totalGuest.length} />
            <div className="summaryContainer">
                <div className="contentPanel">
                    <PanelHeader title="Premium Rooms" text="Rooms Available" roomsUsage={null} classTitle="contentHdrDetails" subClass="" guestData={premiumRooms} />
                    <div className="roomOccupancyCL">
                        {premiumGuests.map((guest, i) => {
                            premiumEarned += guest;
                            return <Rooms key={guest} guest={guest} index={i} />
                        })}
                    </div>
                    <PanelHeader title="Rooms Occupied" text="Total Amount" roomsUsage={premiumGuests.length} classTitle="contentHdrDetails totalDetails" subClass="" guestData={premiumEarned} />


                </div>

                <div className="contentPanel">
                    <PanelHeader title="Economy Rooms" text="Rooms Available" roomsUsage={null} classTitle="contentHdrDetails" subClass="" guestData={economyRooms} />
                    <div className="roomOccupancyCL">
                        {economyGuests.map((guest, i) => {
                            economyEarned += guest;
                            return <Rooms key={guest} guest={guest} index={i} />
                        })}
                    </div>
                    <PanelHeader title="Rooms Occupied" text="Total Amount" roomsUsage={economyGuests.length} classTitle="contentHdrDetails totalDetails" subClass="" guestData={economyEarned} />
                </div>
            </div>
        </div>)

    const dummyDiv = (<div></div>)

    return premiumRooms !== undefined ? panel : dummyDiv;
}

export default RoomsOccupied;