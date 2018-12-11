/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Backendless from 'backendless'
import 'backendless-react-native'

const APP_ID = '5337DEB0-BE36-32E7-FF41-891739299E00';
const APP_KEY = 'A88CFC7D-552B-284D-FF78-566845955400';

Backendless.initApp(APP_ID, APP_KEY);


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    Backendless.Messaging.registerDevice(['default'])
      .then(r => console.log('registerDevice:', r))
      .catch(e => console.log('registerDevice:', e));
  }

  componentDidMount() {
    Backendless.Messaging.addPushNotificationListener(this.onNotification);
  }

  componentWillUnmount() {
    Backendless.Messaging.removePushNotificationListener(this.onNotification);
  }

  onNotification = notification => {
    console.log('notification', notification)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
