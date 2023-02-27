import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    const animation = React.useRef(null);


    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <LottieView
                    ref={animation}
                    autoPlay={false}
                    style={{
                        width: 350,
                        height: 350,
                        backgroundColor: '#FFF',
                        alignSelf: 'center'
                    }}
                    source={require('./82387-download.json')}
                />
            </Animated.View>

            <Animated.View style={{ flex: 1, backgroundColor: '#011f2b', paddingVertical: 20 }} entering={FadeInDown.delay(600).duration(300)}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, textAlign: 'center', color: '#FFF' }}>{`Press & Media Kit`}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, textAlign: 'center', marginTop: 10, color: '#FFF' }}>{`Feel free to use the resources but please threat our brand well. Donwload the grand guideline if you feel insecure.`}</Text>
                <TouchableOpacity style={{ padding: 15, backgroundColor: '#FFF', marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'center', width: 320 }} onPress={() => {
                    animation.current?.play();
                }}>
                    <AntDesign name="download" size={24} color="#011f2b" />
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, textAlign: 'center', color: '#011f2b', marginLeft: 10, marginTop: 5 }}>{`Download complete kit`}</Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#011f2b', paddingVertical: 20 }} entering={FadeInDown.delay(900).duration(300)}>
                <AntDesign name="home" size={24} color="#FFF" />
                <AntDesign name="hearto" size={24} color="#FFF" />
                <AntDesign name="bells" size={24} color="#FFF" />
                <AntDesign name="user" size={24} color="#FFF" />
                <AntDesign name="sharealt" size={24} color="#FFF" />
            </Animated.View >
        </View >


    );
}

export { HomeScreen };
