import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#b3f2e9' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20, }}>
                <Animated.View entering={FadeInDown.delay(300).duration(300)} style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 40, color: '#494949' }}>{`Welcome\nback Lydia!`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, color: '#494949' }}>{`Keep going! You are on track!`}</Text>
                        <Image source={require('./3297251.png')} style={{ width: width, height: 300, resizeMode: 'cover', alignSelf: 'center' }} />
                    </View>
                    <Image source={require('./yoga.jpg')} style={{ width: 80, height: 80, resizeMode: 'cover', alignSelf: 'center', position: 'absolute', top: 30, right: 10, borderRadius: 40 }} />

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#494949' }}>{`Today's workouts`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#494949' }}>{`See All`}</Text>
                    </View>
                    <View style={{ padding: 20, backgroundColor: '#01594e', borderRadius: 20 }}>
                        <Image source={require('./3529885.png')} style={{ width: 250, height: 250, resizeMode: 'cover', alignSelf: 'center' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', alignSelf: 'center' }}>{`Abs Workout`}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#FFF', alignSelf: 'center' }}>{`Intermediate`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#FFF', alignSelf: 'center' }}>{`30 Mins`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#FFF', alignSelf: 'center' }}>{`180 Calories`}</Text>
                        </View>
                    </View>
                    <View style={{ height: 30 }} />
                </Animated.View>

            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 15, alignItems: 'center', backgroundColor: '#FFF', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                <MaterialIcons name="home" size={25} color="#494949" />
                <MaterialIcons name="fitness-center" size={25} color="#494949" />
                <MaterialIcons name="directions-run" size={25} color="#494949" />
                <MaterialIcons name="calendar-today" size={25} color="#494949" />
                <MaterialIcons name="local-fire-department" size={25} color="#494949" />
            </View>

        </View >

    );
}

export { HomeScreen };
