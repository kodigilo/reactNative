/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BotaoLocalizacao from "../src/components/BotaoLocalizacao";
import ClimaTempo from "../src/components/ClimaTempo";
import EnderecoByGeocode from "../src/components/EnderecoByGeocode";
import GoogleMaps from "../src/components/GoogleMaps";
import Home from "../src/views/Home";
import {Provider} from 'react-redux'
import store from '../src/store/'
import {fetch} from "react-native/Libraries/Network/fetch";

it('teste renderização botão localização', async () => {
    const tree = renderer.create(<Provider store={store}><BotaoLocalizacao/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('teste renderização infos clima tempo', async () => {
    const tree = renderer.create(<Provider store={store}><ClimaTempo/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('teste renderização infos endereço', async () => {
    const tree = renderer.create(<Provider store={store}><EnderecoByGeocode/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('teste renderização google maps', async () => {
    const tree = renderer.create(<Provider store={store}><GoogleMaps/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('teste renderização home', async () => {
    const tree = renderer.create(<Provider store={store}><Home/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
