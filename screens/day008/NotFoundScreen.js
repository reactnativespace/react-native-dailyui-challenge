import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';

const NotFoundScreen = ({ navigation }) => {

    const animation = React.useRef(null);
    //Pedro Lerma - https://lottiefiles.com/84918-404-error-doodle-animation
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <LottieView
                autoPlay
                ref={animation}
                style={{
                    marginTop: -120,
                    backgroundColor: '#FFF',
                }}
                source={require('./84918-404-error-doodle-animation.json')}
            />

        </View>
    );
}

export { NotFoundScreen };