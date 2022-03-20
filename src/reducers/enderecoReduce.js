

const enderecoReduce = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_ENDERECO':
            return {
                ...state,
                endereco: action.endereco
            }
        default:
            return state
    }
};

export default enderecoReduce;