import {Text, View} from "react-native";
import React, {Component} from "react";
import {connect} from "react-redux";
import style from "../styles/climaTempoStyle"
import store from "../store";
import {fetchTempoAction} from "../actions/climaTempoAction";

class ClimaTempo extends Component {

    constructor(props) {
        super(props);
        store.dispatch(fetchTempoAction())
    }

    render() {
        return (
            <>
                {this.props.dados && Object.keys(this.props.dados).length > 0 &&
                    <View style={style.Relative}>
                        {this.props.dados.main && this.props.dados.main.temp && <Text style={style.Temp}>{parseInt(this.props.dados.main.temp)}º</Text>}
                        {this.props.dados.main && this.props.dados.main.temp_min && <View style={style.TempMin}><Text style={style.TempText}>{parseInt(this.props.dados.main.temp_min)}º</Text><Text style={style.TempLabel}>mín</Text></View>}
                        {this.props.dados.main && this.props.dados.main.temp_max && <View style={style.TempMax}><Text style={style.TempText}>{parseInt(this.props.dados.main.temp_max)}º</Text><Text style={style.TempLabel}>máx</Text></View>}
                        <View style={style.Row}>
                            {this.props.dados.sys && this.props.dados.sys.country && <Text style={style.Local}>{this.props.dados.name} - {this.props.dados.sys.country}</Text>}
                        </View>
                        {this.props.dados.main && this.props.dados.main.pressure && <Text><Text>Pressão: </Text> {this.props.dados.main.pressure}</Text>}
                        {this.props.dados.main && this.props.dados.main.humidity && <Text><Text>Humidade: </Text> {this.props.dados.main.humidity}</Text>}
                        {this.props.dados.name && !this.props.dados.sys && <Text><Text>Local: </Text> {this.props.dados.name}</Text>}
                        {this.props.dados.message && <Text><Text>Erro: </Text> {this.props.dados.message}</Text>}
                        <View style={style.Row}>
                            {Array.isArray(this.props.dados.weather) && this.props.dados.weather.map(item => {
                                return <Text style={style.Tags} key={item.id}>{item.description}</Text>
                            })}
                        </View>
                    </View>
                }
            </>
        )
    }

}

const mapStateToProps = (state) => {
    var tempo = state.tempoReduce.tempo
    if (tempo == undefined) tempo = {}
    return {dados: tempo}
}

export default connect(mapStateToProps)(ClimaTempo)