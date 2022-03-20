import {Text} from "react-native";
import React, {Component} from "react";
import {connect} from "react-redux";


class ClimaTempo extends Component {

    render() {
        return (
            <>
                {this.props.dados && Object.keys(this.props.dados).length > 0 &&
                    <>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dados{this.props.dados.timezone_offset && <> (this.props.dados sencundarios)</>}:</Text>
                        {this.props.dados.message && <Text><Text>Erro: </Text> {this.props.dados.message}</Text>}
                        {this.props.dados.sys && this.props.dados.sys.country && <Text><Text>Local: </Text> {this.props.dados.name} - {this.props.dados.sys.country}</Text>}
                        {this.props.dados.name && !this.props.dados.sys && <Text><Text>Local: </Text> {this.props.dados.name}</Text>}
                        {Array.isArray(this.props.dados.weather) && <Text><Text>Clima: </Text> {this.props.dados.weather.map(item => item.description).join(', ')}</Text>}
                        {this.props.dados.main && this.props.dados.main.temp && <Text><Text>Temperatura: </Text> {this.props.dados.main.temp}</Text>}
                        {this.props.dados.main && this.props.dados.main.temp_min && <Text><Text>Temperatura min: </Text> {this.props.dados.main.temp_min}</Text>}
                        {this.props.dados.main && this.props.dados.main.temp_max && <Text><Text>Temperatura max: </Text> {this.props.dados.main.temp_max}</Text>}
                        {this.props.dados.main && this.props.dados.main.pressure && <Text><Text>Pressão: </Text> {this.props.dados.main.pressure}</Text>}
                        {this.props.dados.main && this.props.dados.main.humidity && <Text><Text>Humidade: </Text> {this.props.dados.main.humidity}</Text>}
                    </>
                }
            </>
        )
    }

}

const mapStateToProps = (state) => {
    var tempo = state.tempoReduce.tempo
    if(tempo==undefined) tempo = {}
    return { dados : tempo }
}


export default connect(mapStateToProps)(ClimaTempo)