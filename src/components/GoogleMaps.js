import WebView from "react-native-webview"
import React, {Component} from "react"
import {LATITUDE, LONGITUDE, domain_google_maps} from '../../app.json'
import {connect} from 'react-redux'

class GoogleMaps extends Component {
    render() {
        return (<WebView scalesPageToFit={false} containerStyle={{ padding:0}} source={{
            html: `<iframe src="${domain_google_maps}maps?q=${this.props.lat},${this.props.lon}&z=16&output=embed" width="100%" height="100%" style="border:0; padding: 0; margin: 0; border: none " allowfullscreen="" loading="lazy"></iframe>`
        }}/>);
    }
}

const mapStateToProps = (state) => {
    const location = state.locationReduce.location
    if (location && Object.keys(location).length > 0 && location.lon)
        return location
    return {lat: LATITUDE, lon: LONGITUDE}
}

export default connect(mapStateToProps)(GoogleMaps)