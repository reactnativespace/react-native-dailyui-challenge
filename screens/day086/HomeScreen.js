import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    const [counter, setCounter] = useState(0);

    useInterval(() => {
        if (counter < 100)
            setCounter(counter + 1);
    }, 70);


    return (
        <Pressable style={{ flex: 1, backgroundColor: '#fefefe' }} onPress={() => setCounter(0)}>
            <Text style={{
                fontFamily: 'Poppins-Bold', fontSize: 150, position: 'absolute', zIndex: 2, alignSelf: 'center', bottom: 75, color: '#fefefe', textAlign: 'center', textShadowColor: 'rgba(0, 0, 0, 0.3)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 30
            }}>{counter}</Text>
            <LottieView

                autoPlay={true}
                style={{
                    width: width,
                    height: height,
                    backgroundColor: 'transparent',
                    alignSelf: 'center'
                }}
                speed={0.5}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('./78293-water-fills-square-progress-bar.json')}
            />

        </Pressable>
    );
}

export { HomeScreen };
