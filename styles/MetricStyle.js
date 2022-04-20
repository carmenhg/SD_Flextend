import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
    title: {
        marginTop: 100,
        fontSize: 26,
        textAlign: 'center',
        paddingLeft: 10,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
        fontWeight: 'bold',
        color: 'black'
    },
    info_text: {
        marginTop: 10, 
        marginBottom: 15,
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 10,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
        fontWeight: 'bold',
        color: '#191970'
    },
    chart_title: {
        marginTop: 10, 
        marginBottom: 0,
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 10,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#191970'
    },
    result_text: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        paddingLeft: 10,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
        color: 'black'
    },
    chartContainer: {
        marginTop: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 80,
        marginLeft: 20,
        marginRight: 20
    }
})