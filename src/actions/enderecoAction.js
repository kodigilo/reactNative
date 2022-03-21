import {updateEndereco} from './../actions'
import store from "../store";
import OpenstreetmapService from "../services/OpenstreetmapService";
import {LATITUDE, LONGITUDE } from '../../app.json';

export const fetchEnderecoAction = () => {
    const fetchEndereco = null
    var location = store.getState().locationReduce.location;
    if (location == undefined) location = {lat: LATITUDE, lon: LONGITUDE}

    OpenstreetmapService.getEndereco(location.lat, location.lon)
        .then(res => res.json())
        .then(json => {
            store.dispatch(updateEndereco(json));
        });

    return {
        type: 'FETCH_ENDERECO_ACTION',
        fetchEndereco
    }
}