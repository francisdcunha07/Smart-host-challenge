import React, { useState, useContext } from 'react';
import { OccupancyContext } from '../../../context/HotelContext';




const RoomsOccupied = () => {
    const { roomsData } = useContext(OccupancyContext);
    const { totalGuest, economyRooms, premiumRooms } = roomsData;
   
    let sortedList =  totalGuest && totalGuest.sort(function (a, b) {
        return b - a;
    });
    const premiumGuests = sortedList.slice(0, parseInt(premiumRooms));
    const remainingGuests = sortedList.slice(parseInt(premiumRooms), sortedList.length+1);
    let economyGuests = [];
    if(remainingGuests.length > 0) 
    {
      economyGuests = remainingGuests.filter(rg => rg < 100).slice(0,parseInt(economyRooms));  
    }

    console.log("premiumGuests");
    console.log(premiumGuests);

    console.log("remainingGuests");
    console.log(remainingGuests);

    console.log("economyGuests");
    console.log(economyGuests);

    // useEffect(() => {
    //     // Should not ever set state during rendering, so do this in useEffect instead.
    //     setStateValues(totalGuest);
    //   }, []);

//console.log(totalGuest[0]);
//console.log(guests);
return (
        <div>
            {/* {totalGuest && totalGuest.sort(function (a, b) {
                return b - a;
            }).map(gt => {
                return <div> {gt}</div>
            })} */}
        </div>)
}

export default RoomsOccupied;