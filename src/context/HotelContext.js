import React, { useState,  createContext, useReducer, useEffect } from 'react';
import { OccupancyReducer } from '../reducers/OccupancyReducer';
import data from '../Data/data.json'
import { Service } from '../Services/Service';
import * as actionTypes from '../reducers/actionTypes'

export const OccupancyContext = createContext();

const OccupancyContextProvider = (props) => {
    const [initialState, setInitialState] = useState({totalGuest:[]});
    const [roomsData, dispatch] = useReducer(OccupancyReducer, initialState);

    useEffect(() => {
            const guestList =  data.guest;
            dispatch({ type: actionTypes.UPDATE_STATE, payload: guestList});
      
    }, [])
    return (
        <OccupancyContext.Provider value={{ roomsData, dispatch }} >
            {props.children}
        </OccupancyContext.Provider>
    );
}

export default OccupancyContextProvider;