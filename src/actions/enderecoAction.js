import {updateEndereco} from './../actions'
import store from "../store";
import OpenstreetmapService from "../services/OpenstreetmapService";

export const fetchEnderecoAction = () => {
    const fetchEndereco = null
    const location = store.getState().locationReduce.location;

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