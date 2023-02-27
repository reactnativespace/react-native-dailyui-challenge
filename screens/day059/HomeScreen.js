import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 12 }}>

            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 25, color: '#131313' }}>{`Background`}</Text>

            <View style={{ backgroundColor: '#f3f3f3', flexDirection: 'row', alignItems: 'center', padding: 8, borderRadius: 10, marginVertical: 12 }}>
                <Feather name="search" size={22} color="black" />
                <TextInput placeholder='Search' style={{ fontFamily: 'Poppins-Medium', flex: 1, fontSize: 16, marginLeft: 8, marginTop: 3 }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <>

                    <Animated.View entering={FadeInDown.delay(400).duration(400)}>
                        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`Abstract`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#4f5cbf' }}>{`See all`}</Text>
                        </View>

                        <ScrollView horizontal={true} style={{ height: 320 }} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity style={{ width: 150, height: 300 }}>
                                <Image source={require('./abstract1.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 150, height: 300, marginLeft: 10 }}>
                                <Image source={require('./abstract2.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 150, height: 300, marginLeft: 10 }}>
                                <Image source={require('./abstract3.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 150, height: 300, marginLeft: 10 }}>
                                <Image source={require('./abstract4.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </Animated.View>


                    <Animated.View entering={FadeInDown.delay(800).duration(400)}>

                        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`Pattern`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#4f5cbf' }}>{`See all`}</Text>
                        </View>

                        <ScrollView horizontal={true} style={{ height: 320 }} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity style={{ width: 150, height: 300 }} onPress={() => navigation.navigate('Bg')}>
                                <Image source={require('./pattern1.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 150, height: 300, marginLeft: 10 }}>
                                <Image source={require('./pattern2.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 150, height: 300, marginLeft: 10 }}>
                                <Image source={require('./pattern3.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 150, height: 300, marginLeft: 10 }}>
                                <Image source={require('./pattern4.jpg')} style={{ width: 150, height: 300, resizeMode: 'cover', borderRadius: 10 }} />
                                <View style={{ backgroundColor: '#131313', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -20, left: 55 }}>
                                    <Feather name="download" size={24} color="#FFF" />
                                </View>
                            </TouchableOpacity>

                        </ScrollView>

                    </Animated.View>

                </>
            </ScrollView>

        </View >

    );
}

export { HomeScreen };
