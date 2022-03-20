const locationReduce = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return {
                ...state,
                location: {lat: action.location.lat, lon: action.location.lon}
            }
        default:
            return state
    }
};

export default locationReduce;