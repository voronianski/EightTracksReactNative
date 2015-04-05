/**
 * 8tracks React Native App
 * https://8tracks.com/apps/ios
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  StatusBarIOS,
  PixelRatio
} = React;

class Landing extends React.Component {
    render() {
        return (
            <View style={styles.page}>
                <Image style={styles.bg} source={require('image!bg-568')}>
                    <Image style={styles.logo} source={require('image!logo')} />
                </Image>
            </View>
        );
    }
}

class EightTracksReact extends React.Component {
    componentWillMount() {
        StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent, true);
    }

    render() {
        return (
            <Landing />
        );
    }
}

var styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    bg: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 128 * PixelRatio.get(),
        height: 50 * PixelRatio.get(),
        marginTop: -120
    }
});

AppRegistry.registerComponent('EightTracksReact', () => EightTracksReact);
