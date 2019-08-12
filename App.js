import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ZoomView from './ZoomView';

export default class App extends PureComponent {
  state = {
    zoom: 0,
  };

  render() {
    return (
    
      <ZoomView
        onZoomProgress={progress => {
          this.setState({zoom: progress});
        }}
        onZoomStart={() => {
          console.log('zoom start');
        }}
        onZoomEnd={() => {
          console.log('zoom end');
        }}
        >
        <RNCamera zoom={this.state.zoom} style={{ flex: 1}} />
      </ZoomView>
    );
  }
}
