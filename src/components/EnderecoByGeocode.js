import {Text} from "react-native";
import React, {Component, useState} from "react";
import {connect} from "react-redux";

class EnderecoByGeocode extends Component {
    render() {
        return (
            <>
                {this.props.endereco && Object.keys(this.props.endereco).length > 0 &&
                    <>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Endereço (aproximado):</Text>
                        {this.props.endereco.display_name && <Text>{this.props.endereco.display_name}</Text>}
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    var endereco = state.enderecoReduce.endereco
    if (endereco == undefined) endereco = {}
    return {endereco: endereco}
}

export default connect(mapStateToProps)(EnderecoByGeocode)