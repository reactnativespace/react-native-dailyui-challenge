import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {


    const animation = React.useRef(null);

    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        animation.current?.play();
    }, [index]);


    const anims = [
        {
            path: require('./assets/99618-instagram.json'),
            text: `@reactnativespace`
        },
        {
            path: require('./assets/99282-twitter.json'),
            text: '@ReactNativeSpc'
        }
        ,
        {
            path: require('./assets/99138-tiktok.json'),
            text: '@ReactNativeSpace'
        },
        {
            path: require('./assets/98799-facebook.json'),
            text: 'React Native Space'
        }
        ,
        {
            path: require('./assets/98802-youtube.json'),
            text: 'React Native Space'
        },
        {
            path: require('./assets/89032-victory-sign-baby-astronaut.json'),
            text: 'www.reactnativespace.com'
        }
    ]

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center' }}>
            <Pressable style={{ flex: 1 }} onPress={() => {
                if (index == anims.length - 1) return setIndex(0);
                setIndex((prevState) => prevState + 1);
            }}>
                <View style={{ marginTop: 70, justifyContent:'center',alignItems:'center' }}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 300,
                            height: 300,
                            backgroundColor: '#FFF',
                        }}
                        source={anims[index].path}
                    />
                </View>
                <Text style={{ fontSize: 25, fontFamily: 'Poppins-Medium', color: '#2c3e50', textAlign: 'center' }}>{anims[index].text}</Text>
            </Pressable>
        </View >
    );
}

export { HomeScreen };