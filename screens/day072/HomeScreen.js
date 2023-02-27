import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import Swiper from 'react-native-deck-swiper'


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    const [isVisible, setIsVisible] = React.useState(false);

    const DATA = [{
        id: 1,
        text: 'DO',
        image: require('./1.jpg')
    }, {
        id: 2,
        text: 'MORE',
        image: require('./2.jpg')
    }, {
        id: 3,
        text: 'OF',
        image: require('./3.jpg')
    }, {
        id: 4,
        text: 'WHAT',
        image: require('./4.jpg')
    }, {
        id: 5,
        text: 'MAKES',
        image: require('./5.jpg')
    }, {
        id: 6,
        text: 'YOU',
        image: require('./6.jpg')
    }, {
        id: 7,
        text: 'HAPPY',
        image: require('./7.jpg')
    },]

    return (

        <View style={{ flex: 1, backgroundColor: '#000' }}>

            <Swiper
                cards={DATA}
                renderCard={(card) => {
                    return (
                        <View style={{
                            flex: 1,
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: "#E8E8E8",
                            justifyContent: "center",
                            alignItems: 'center',
                            backgroundColor: "white",
                            width: width - 40,
                            height: height - 100,
                            alignSelf: 'center'
                        }}>
                            <Image source={card.image} style={{ width: width - 60, height: height - 140, borderRadius: 10 }} />
                            <Text style={{
                                position: 'absolute',
                                color: '#FFF',
                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 10,
                                fontFamily: 'Poppins-Bold',
                                textAlign: "center",
                                fontSize: 80,

                            }}>{card.text}</Text>
                        </View>
                    )
                }}
                cardIndex={0}
                backgroundColor={'#e74c3c'}
                stackSize={3}
                onSwipedAll={() => setIsVisible(true)}>
            </Swiper>
            {isVisible &&
                <Text style={{
                    left: 65,
                    top: 300,
                    color: '#FFF',
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                    position: 'absolute',
                    fontFamily: 'Poppins-Bold',
                    textAlign: "center",
                    fontSize: 25,
                }}>@ReactNativeSpace</Text>
            }

        </View >

    );
}

export { HomeScreen };
