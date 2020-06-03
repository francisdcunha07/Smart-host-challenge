import React from 'react';
import PanelHeader from '../PanelHeader/PanelHeader';
import Rooms from '../RoomPanel/Rooms';

const RoomContainer = (props) => {
    const { title, title2, text, text2, roomsUsage,
        classTitle, classTitle2, subClass, guests, guestData } = props;
    let amtEarned = 0;
    return (
        <div className="contentPanel">
            <PanelHeader title={title} text={text} roomsUsage={roomsUsage} classTitle={classTitle} subClass="FB" guestData={guestData} 
            currency={null} />
            <div className="roomOccupancyCL">
                {guests.map((guest, i) => {
                    amtEarned += guest;
                    return <Rooms key={guest} guest={guest} index={i} />
                })}
            </div>
            <PanelHeader title={title2} text={text2} roomsUsage={guests.length} classTitle={classTitle2} subClass="" guestData={amtEarned}
             currency="add" />


        </div>

    );
}

export default RoomContainer;