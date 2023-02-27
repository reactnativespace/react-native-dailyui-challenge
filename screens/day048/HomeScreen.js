import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    const [isVisible, setIsVisible] = React.useState(true);

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 18 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(600)}>
                <LottieView
                    autoPlay
                    style={{
                        width: 400,
                        height: 400,
                        backgroundColor: '#FFF',
                        alignSelf: 'center'
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('./85893-stack-blue-cs.json')}
                />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(600)}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#4863e1', alignSelf: 'center', marginTop: 12 }}>React Native Space</Text>

                <View style={{ borderWidth: 0.5, borderColor: '#4863e1', borderRadius: 10, padding: 12, marginTop: 12 }}>
                    <TextInput placeholder='Enter Your Email' placeholderTextColor={'#4863e1'} style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}></TextInput>
                </View>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(900).duration(600)}>
                <TouchableOpacity style={{ backgroundColor: '#4863e1', padding: 12, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF' }}>Subscribe</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>


    );
}

export { HomeScreen };
