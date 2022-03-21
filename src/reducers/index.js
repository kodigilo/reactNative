import {combineReducers} from 'redux';
import locationReduce from "./locationReduce";
import tempoReduce from "./tempoReduce";
import enderecoReduce from "./enderecoReduce";
import loaderReduce from "./loaderReduce";

export default combineReducers({
    locationReduce,
    tempoReduce,
    enderecoReduce,
    loaderReduce
});