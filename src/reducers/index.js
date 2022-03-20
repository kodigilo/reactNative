import {combineReducers} from 'redux';
import locationReduce from "./locationReduce";
import tempoReduce from "./tempoReduce";
import enderecoReduce from "./enderecoReduce";

export default combineReducers({
    locationReduce,
    tempoReduce,
    enderecoReduce
});