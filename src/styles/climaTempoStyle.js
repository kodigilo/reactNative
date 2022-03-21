import {StyleSheet} from "react-native";

const temp = StyleSheet.create({

    Temp: {
        fontSize: 35,
        backgroundColor: '#0080cd',
        width: 80,
        height: 80,
        borderRadius: 300,
        textAlign: 'center',
        lineHeight: 80,
        color: '#fff',
        position: 'absolute',
        top: -60,
        right: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 16,
        overflow: 'visible',
    }
})
const tempInfo = StyleSheet.create({

    TempInfo: {
        ...temp.Temp,
        width: 40,
        height: 40,
        lineHeight: 40,
        fontSize: 12,
        top: -30,
        right: 100,
    }
})


export default StyleSheet.create({
    Row: {justifyContent: 'flex-start', flexDirection: 'row'},
    Relative: {
        position: 'relative',
    },
    Temp: {
        ...temp.Temp,
    },
    TempInfo: {
        ...tempInfo.TempInfo,
    },
    TempMin: {
        ...tempInfo.TempInfo,
        backgroundColor: '#004983',

    },
    TempMax: {
        ...tempInfo.TempInfo,
        backgroundColor: '#c5d262',
        right: 150,
    },
    TempText: {
        color: '#fff',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        lineHeight: 40,
    },
    TempLabel: {
        position: 'absolute',
        color: '#000',
        bottom: -12,
        left: 0,
        right: 0,
        fontSize: 9,
        textAlign: 'center',
    },
    Local: {
        fontWeight: 'bold',
        fontSize: 20,
        position: 'relative',
        top: -35,
        left: -11,
        backgroundColor: '#fff',
        padding: 11,
        borderTopRightRadius: 10,
        paddingRight: 20,
        marginBottom: -30,
    },
    Tags : {
        backgroundColor: '#f1f1f1',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        padding: 3,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 15,
        fontSize: 14,
    }

})