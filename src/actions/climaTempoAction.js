import WeatherService from "../services/WeatherService";
import {updateTempo} from './../actions'
import store from "../store";
import {LATITUDE, LONGITUDE } from '../../app.json';

export const fetchTempoAction = () => {
    const fetchTempo = null
    var location = store.getState().locationReduce.location;
    if (location == undefined) location = {lat: LATITUDE, lon: LONGITUDE}

    WeatherService.Primary(location.lat, location.lon)
        .then(res => res.json())
        .then(json => {
            store.dispatch(updateTempo(json));
            if (json.message) {
                WeatherService.Secondary(location.lat, location.lon)
                    .then(res => res.json())
                    .then(jsonSecondary => {
                        store.dispatch(updateTempo({
                            name: jsonSecondary.timezone,
                            timezone_offset: jsonSecondary.timezone_offset,
                            weather: jsonSecondary.current.weather,
                            main: {
                                temp: jsonSecondary.current.temp,
                                pressure: jsonSecondary.current.pressure,
                                humidity: jsonSecondary.current.humidity,
                            }
                        }));
                    }).error(err => {
                });
            }
        });

    return {
        type: 'FETCH_TEMPO_ACTION',
        fetchTempo
    }
}