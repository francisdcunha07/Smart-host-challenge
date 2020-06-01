export const OccupancyReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_STATE':
          return {...state, totalGuest: action.payload}
        case 'UPDATE_ROOMS':
            return {...state,  premiumRooms: action.rooms.premuimRooms, economyRooms: action.rooms.economyRooms };
        default:
            return state;
    }
}