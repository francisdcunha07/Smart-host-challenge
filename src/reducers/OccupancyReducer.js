import * as actionTypes from './actionTypes'

export const OccupancyReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_STATE:
          return {...state, totalGuest: action.payload}
        case actionTypes.UPDATE_ROOMS:
            return {...state,  premiumRooms: action.rooms.premuimRooms, economyRooms: action.rooms.economyRooms };
        default:
            return state;
    }
}