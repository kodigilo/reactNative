import {LATITUDE, LONGITUDE,domain_openstreetmap} from '../../app.json';

const getEndereco = (lat = LATITUDE, lon = LONGITUDE) => {
    return fetch(
        `${domain_openstreetmap}reverse?&format=json&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=pt-BR&zoom=16`
    )
}


export default {getEndereco}