import {Text,View} from "react-native";
import React, {Component, useState} from "react";
import {connect} from "react-redux";
import style from "../styles/enderecoStyle"
import store from "../store";
import {fetchEnderecoAction} from "../actions/enderecoAction";
class EnderecoByGeocode extends Component {

    constructor(props){
        super(props);
        store.dispatch(fetchEnderecoAction())
    }

    render() {
        return (
            <View style={style.Card}>
                {this.props.endereco && Object.keys(this.props.endereco).length > 0 &&
                    <>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Endereço (aproximado):</Text>
                        {this.props.endereco.display_name && <Text>{this.props.endereco.display_name}</Text>}
                    </>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    var endereco = state.enderecoReduce.endereco
    if (endereco == undefined) endereco = {}
    return {endereco: endereco}
}

export default connect(mapStateToProps)(EnderecoByGeocode)