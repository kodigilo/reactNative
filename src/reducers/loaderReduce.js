const initialState = {
    loading: false
}

const loaderReduce = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADER':
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
};

export default loaderReduce;