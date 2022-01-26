import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    device_content: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        alignSelf: "center",
        color: 'black',
    },
    home_image: {
        height: '80%',
        width: '100%',
        marginTop: 0, 
        marginLeft: 0,
    },
    button1: {
        backgroundColor: '#ffb6c1',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    button2: {
        backgroundColor: '#ffa500',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    button3: {
        backgroundColor: '#dda0dd',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'times new roman'
    },
})