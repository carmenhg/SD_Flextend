import React from 'react';
import { TouchableOpacity, Text, View, Image} from 'react-native';

import { firebase } from '@react-native-firebase/auth'
import styles from '../styles/HomeStyle';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'HomeScreen',
    };

    render() {
        const navigate = this.props.navigation.navigate;

        const logout = () => {
            console.log(firebase.auth().currentUser);
            firebase.auth().signOut().then(() => {
                console.log(firebase.auth().currentUser);
                navigate('Login')});
        }

        return (
            <View>
                <Text style={styles.title}> Hello User! </Text>
                <TouchableOpacity onPress={() => navigate( 'Live Measure' )} style={styles.button1}><Text style={styles.buttonTitle}>Start Tracking</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate( 'Metrics' )} style={styles.button2}><Text style={styles.buttonTitle}>Go to Metrics</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate( 'Progress' )} style={styles.button3}><Text style={styles.buttonTitle}>Show Progress</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate( 'BLE' )} style={styles.button1}><Text style={styles.buttonTitle}>BLE Set Up</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => logout()} style={styles.button2}><Text style={styles.buttonTitle}>Sign Out</Text></TouchableOpacity>
                <Image
                    style={styles.home_image}
                    source={require("../images/home_image.jpeg")}
                />
            </View>
        );
    }
}