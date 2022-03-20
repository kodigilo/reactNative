

const tempoReduce = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_TEMPO':
            return {
                ...state,
                tempo: action.tempo
            }
        default:
            return state
    }
};

export default tempoReduce;