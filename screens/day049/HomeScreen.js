import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { BounceInRight, BounceOutRight } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    const [isVisible, setIsVisible] = React.useState(false);

    const time = new Date();

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, [])

    return (

        <View style={{ flex: 1 }}>
            <Image source={require('./wallpaper3.jpg')} style={{ position: 'absolute', zIndex: -1, width: width, height: height }} />
            <Text style={{
                fontFamily: 'Poppins-Medium', color: '#fafcff', fontSize: 125, alignSelf: 'center', marginTop: 70, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
            }}>{time.getHours() + ':' + '0' + time.getMinutes()}</Text>

            {isVisible && <Animated.View entering={BounceInRight.delay(500).duration(500)} exiting={BounceOutRight.delay(500).duration(500)}>
                <Pressable style={{
                    backgroundColor: '#fafcff', marginHorizontal: 30, height: 120, borderRadius: 20, padding: 20, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }} onPress={() => setIsVisible(false)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="water" size={25} color="#2980b9" />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, marginLeft: 5 }}>Drink Water</Text>
                    </View>

                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 17 }}>{`Let's drink some water!\n500 ml to reach your daily goal!`}</Text>
                </Pressable>
            </Animated.View>}

        </View>


    );
}

export { HomeScreen };
