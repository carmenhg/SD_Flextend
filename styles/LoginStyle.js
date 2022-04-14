import { StyleSheet, Platform, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87cefa'
    },
    page: {
      flex: 3,
      alignItems: 'center',
      marginTop: 2
    },
    textInput: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderColor: '#555',
      borderWidth: 2,
      borderRadius: 5,
      color: 'black',
      fontSize: 16,
      fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
      fontWeight: 'bold'
    },
    text: {
      marginTop: Platform.OS === 'ios' ? 100 : 20,
      fontSize: 24,
      textAlign: 'center',
      paddingLeft: 10,
      fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
      fontWeight: 'bold', 
      color: '#191970'
    },
    format: {
      marginTop: 20,
      fontSize: 18,
      textAlign: 'center',
      paddingLeft: 10,
      fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
      fontWeight: 'bold',
      color: '#191970'
    },
    themeButton: {
      backgroundColor: '#1e90ff', 
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: 'center',
      borderColor: '#555',
      borderWidth: 2,
      borderRadius: 5
    },
    themeButtonTitle: {
      fontSize: 24,
      fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
      color: 'black'
    },
    verificationView: {
      width: '100%',
      alignItems: 'center',
      marginTop: 30
    },
    image: {
        width: Dimensions.get("window").width,
        marginTop: Platform.OS === 'ios' ? 100 : 90,
        height: 85,
        backgroundColor: 'white',
        resizeMode: 'contain',
    }
})