import React from 'react';
import {
    View, PanResponder, Dimensions
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class ZoomView extends React.Component {
    constructor(props) {
        super(props);
        this._panResponder = PanResponder.create({
            onPanResponderMove: (e, {dy }) => {
                const { height: windowHeight } = Dimensions.get('window');
                return this.props.onZoomProgress(Math.min(Math.max((dy * -1) / windowHeight, 0), 0.5));
            },
            onMoveShouldSetPanResponder: (ev, { dx }) => {
                return dx !== 0;
            },
            onPanResponderGrant: () => {
                return this.props.onZoomStart();
            },
            onPanResponderRelease: () => {
                return this.props.onZoonEnd();
            },
        });
    }

    render() {
        return (
            <View style={{ flex: 1, width: '100%' }} {...this._panResponder.panHandlers}>
                {this.props.children}          
            </View>
        );
    }
}