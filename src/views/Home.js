import React from "react";
import {ActivityIndicator, View} from "react-native";

import GoogleMaps from "../components/GoogleMaps";
import ClimaTempo from "../components/ClimaTempo";
import EnderecoByGeocode from "../components/EnderecoByGeocode";
import BotaoLocalizacao from "../components/BotaoLocalizacao";
import style from "../styles/homeStyle";
import {connect} from "react-redux";

const Home = (props) => {
    return (
        <>
            <View  style={[{
                flex: 1,
                flexDirection: "column"
            }]}>
                <View style={{flex: 2}}>
                    <GoogleMaps/>
                </View>
                <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
                    <ClimaTempo/>
                    <EnderecoByGeocode/>
                    <BotaoLocalizacao/>
                </View>
            </View>
            { props.isActive && <ActivityIndicator size="large" color="#0000ff" style={style.loading}/> }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isActive:  state.loaderReduce.loading
    }
}

export default connect(mapStateToProps)(Home)