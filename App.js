import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, UIManager } from 'react-native';

import Button from './Button';

export default class App extends Component {
  constructor(props){  
    super(props);
    
    // Disabled by default on Android
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  state = {
    loading: false,
  };
  
  handleButtonPress = (loading) => {
    this.setState({ loading });
  }

  render() {
    const { loading } = this.state;

    return (
      <SafeAreaView style={[styles.main]}>
        <Text style={styles.toolbar}>Animated containers</Text>

        <View style={styles.content}>
          <Button label="Login" loading={loading} onPress={this.handleButtonPress}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#f39c12',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// expo init my-app
// https://reactnative.dev/docs/animated
// https://reactnative.dev/docs/easing
