import {ActivityIndicator, Button, PermissionsAndroid, Platform} from "react-native";
import React, {Component} from "react";
import Geolocation from "@react-native-community/geolocation";
import {setLoader, updateLocation} from './../actions'
import {fetchTempoAction} from '../actions/climaTempoAction'
import {fetchEnderecoAction} from '../actions/enderecoAction'
import {connect} from "react-redux";

class BotaoLocalizacao extends Component {

    constructor(props) {
        super(props)
        this.startLocation()
    }

    startLocation = () => {
        if (Platform.OS === 'ios') {
            this.getLocation();
        } else {
            const requestLocationPermission = async () => {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Permissão de Acesso à Localização",
                        message: "Este aplicativo precisa acessar sua localização.",
                        buttonNeutral: "Pergunte-me depois",
                        buttonNegative: "Cancelar",
                        buttonPositive: "OK"
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    this.getLocation();
                } else {
                    alert('Permissão de Localização negada');
                }
            };
            requestLocationPermission();
        }
    }

    getLocation = () => {

        this.props.dispatch(setLoader(true))

        Geolocation.getCurrentPosition(
            position => {
                this.props.dispatch(updateLocation({lat: position.coords.latitude, lon: position.coords.longitude}))
                this.props.dispatch(fetchTempoAction())
                this.props.dispatch(fetchEnderecoAction())
                this.props.dispatch(setLoader(false))
            },
            error => {
                Alert.alert('Error', JSON.stringify(error))
                this.props.dispatch(setLoader(false))
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );

    }


    render() {
        return (
            <>
                <Button title={'Minha localização'} onPress={this.startLocation}/>
            </>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        location: state.location
    }
}
export default connect(mapStateToProps)(BotaoLocalizacao)