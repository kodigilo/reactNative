import React from "react";
import {View } from "react-native";

import GoogleMaps from "../components/GoogleMaps";
import ClimaTempo from "../components/ClimaTempo";
import EnderecoByGeocode from "../components/EnderecoByGeocode";
import BotaoLocalizacao from "../components/BotaoLocalizacao";

const Home = () => {
    return (
        <>
            <GoogleMaps  />
            <View style={{position: 'absolute', bottom: 0, left: 0, backgroundColor: '#fff', width: '100%', padding: 10}}>
                <ClimaTempo />
                <EnderecoByGeocode />
                <BotaoLocalizacao />
            </View>
        </>
    );
};

export default Home;