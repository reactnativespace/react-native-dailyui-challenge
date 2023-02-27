import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#4a3189', padding: 20 }}>
            <View style={{ backgroundColor: '#ffb905', width: 2000, height: 2000, borderRadius: 1000, position: 'absolute', bottom: -1600, right: -1500 }} />
            <FontAwesome5 name="bars" size={24} color="#FFF" />

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 40, color: '#FFF', alignSelf: 'center', marginTop: 30 }}>Hi, Angelina!</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', alignSelf: 'center', marginBottom: 30 }}>What do you want to do?</Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <View style={{ backgroundColor: '#FFF', padding: 12, borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <TextInput placeholder='Find your next event' placeholderTextColor={'#353535'} style={{ flex: 1, fontFamily: 'Poppins-Medium' }} />
                    <View style={{ backgroundColor: '#00c471', width: 40, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="arrow-right" size={20} color="#FFF" />
                    </View>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(900).duration(300)} style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', marginTop: 30 }}>Events near Amsterdam</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ width: 200, height: 300 }}>
                        <Image source={require('./1.jpg')} style={{ width: 200, height: 300, borderRadius: 10 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', position: 'absolute', bottom: 5, right: 5 }}>Dancing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 200, height: 300, marginLeft: 20 }}>
                        <Image source={require('./2.jpg')} style={{ width: 200, height: 300, borderRadius: 10 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', position: 'absolute', bottom: 5, right: 5 }}>Painting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 200, height: 300, marginLeft: 20 }} onPress={()=> navigation.navigate('Event')}>
                        <Image source={require('./3.jpg')} style={{ width: 200, height: 300, borderRadius: 10 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', position: 'absolute', bottom: 5, right: 5 }}>Javascript</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#7432ff', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 50 }}>
                    <FontAwesome5 name="binoculars" size={25} color="#FFF" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', marginLeft: 10, marginBottom: -5 }}>Explore</Text>
                </View>
                <FontAwesome5 name="clipboard" size={25} color="black" />
                <FontAwesome5 name="user" size={25} color="black" />
            </View>

        </View >

    );
}

export { HomeScreen };
