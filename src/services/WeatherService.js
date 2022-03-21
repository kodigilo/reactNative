import {LATITUDE, LONGITUDE, APPID_WEATHER, domain_weather} from '../../app.json';
import {fetch} from "react-native/Libraries/Network/fetch";

const Primary = (lat = LATITUDE, lon = LONGITUDE) => {

    return fetch(
        `${domain_weather}data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID_WEATHER}&units=metric&lang=pt_br`
    )
}

const Secondary = (lat = LATITUDE, lon = LONGITUDE) => {
    fetch(
        `${domain_weather}data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APPID_WEATHER}&exclude=minutely,hourly,daily&lang=pt_br&units=metric`
    )
}

export default {Primary, Secondary}