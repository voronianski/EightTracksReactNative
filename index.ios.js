/**
 * 8tracks React Native App
 * https://8tracks.com/apps/ios
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var EffectsView = require('react-native-effects-view');
// var Dimensions = require('Dimensions');
var {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBarIOS,
  PixelRatio,
  TouchableHighlight
} = React;

class Landing extends React.Component {
    renderBottomText() {
        return (
            <Text style={styles.bottomNoteText}>
                8tracks is internet radio created by people, not algorithms
            </Text>
        );
    }

    showLoginModal() {
        console.log('modal will be shown');
    }

    render() {
        return (
            <View style={styles.page}>
                <Image style={styles.bg} source={require('image!bg-568')}>
                    <Image style={styles.logo} source={require('image!logo')} />
                    <TouchableHighlight
                        style={styles.loginBlock}
                        onPress={this.showLoginModal.bind(this)}
                        underlayColor="#182144"
                        activeOpacity={0.5}
                    >
                        <Image style={styles.loginBg} source={require('image!login-btn')}>
                            <Text style={styles.loginText}>Use 8tracks Account</Text>
                        </Image>
                    </TouchableHighlight>
                    <EffectsView
                        style={styles.bottomNote}
                        blurStyle="light"
                        vibrantContent={this.renderBottomText.call(this)}
                    />
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
        backgroundColor: 'transparent',
    },
    bg: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoSide: {
        flex: 3,
        alignSelf: 'auto',
        backgroundColor: 'white',
    },
    logoCenter: {
        flex: 4,
        alignSelf: 'auto',
        backgroundColor: 'red',
        height: 100,
    },
    logo: {
        width: 110 * PixelRatio.get(),
        height: 43 * PixelRatio.get(),
        marginTop: -150,
    },
    loginBlock: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        height: 50,
    },
    loginBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'ProximaNova-Regular'
    },
    bottomNote: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomNoteText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'ProximaNova-Regular',
        textAlign: 'center',
        marginLeft: 60,
        marginRight: 60
    },
});

AppRegistry.registerComponent('EightTracksReact', () => EightTracksReact);
