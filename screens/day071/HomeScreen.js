import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#f2f1f6', padding: 20 }}>

                <Image source={require('./agenda.png')} style={{ width: 120, height: 120, alignSelf: 'center', marginVertical: 30 }} />
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, color: '#030303', alignSelf: 'center' }}>Good morning,</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 25, color: '#030303', alignSelf: 'center', marginTop: -15 }}>Serena Butler</Text>
            
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#030303', marginBottom: 10 }}>Today's Tasks</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, height: 200 }}>

                <View style={{ width: 200, height: 100, backgroundColor: '#3400fe', justifyContent: 'center', padding: 20, borderRadius: 20 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#FFF', }}>Development</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', }}>UI Enhancement</Text>
                </View>

                <View style={{ width: 200, height: 100, backgroundColor: '#ffffff', justifyContent: 'center', padding: 20, borderRadius: 20, marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#030303', }}>Design</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#030303', }}>Dashboard Mock</Text>
                </View>

                <View style={{ width: 200, height: 100, backgroundColor: '#ffffff', justifyContent: 'center', padding: 20, borderRadius: 20, marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#030303', }}>Improvement</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#030303', }}>Auth Story</Text>
                </View>

            </ScrollView>

            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#030303', marginTop: 20, marginBottom: 10 }}>Projects</Text>

            <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 0, }}>

                <TouchableOpacity style={{ backgroundColor: '#ffffff', justifyContent: 'center', padding: 20, borderRadius: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', }}>Daily Routine</Text>
                            <View style={{ backgroundColor: '#ffeef1', marginLeft: 10, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 20 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#d3688a', }}>Personal</Text>
                            </View>
                        </View>
                        <FontAwesome5 name="ellipsis-h" size={24} color="#d4d3d9" />
                    </View>

                    <View style={{ flex: 1, height: 10, backgroundColor: '#f7f7fb', borderRadius: 20, marginTop: 10 }}>
                        <View style={{ height: 10, width: '30%', backgroundColor: '#ffae1e', borderRadius: 20 }} />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#030303', alignSelf: 'flex-end', marginTop: 10 }}>3 of 12 tasks completed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#ffffff', justifyContent: 'center', padding: 20, borderRadius: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', }}>Shopping</Text>
                            <View style={{ backgroundColor: '#c5e3d2', marginLeft: 10, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 20 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#27ae60', }}>Home</Text>
                            </View>
                        </View>
                        <FontAwesome5 name="ellipsis-h" size={24} color="#d4d3d9" />
                    </View>

                    <View style={{ flex: 1, height: 10, backgroundColor: '#f7f7fb', borderRadius: 20, marginTop: 10 }}>
                        <View style={{ height: 10, width: '50%', backgroundColor: '#ffae1e', borderRadius: 20 }} />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#030303', alignSelf: 'flex-end', marginTop: 10 }}>5 of 10 tasks completed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#ffffff', justifyContent: 'center', padding: 20, borderRadius: 20, marginTop: 10 }}
                    onPress={() => navigation.navigate('Calendar')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', }}>Development</Text>
                            <View style={{ backgroundColor: '#bedaed', marginLeft: 10, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 20 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#2980b9', }}>Work</Text>
                            </View>
                        </View>
                        <FontAwesome5 name="ellipsis-h" size={24} color="#d4d3d9" />
                    </View>

                    <View style={{ flex: 1, height: 10, backgroundColor: '#f7f7fb', borderRadius: 20, marginTop: 10 }}>
                        <View style={{ height: 10, width: '80%', backgroundColor: '#ffae1e', borderRadius: 20 }} />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#030303', alignSelf: 'flex-end', marginTop: 10 }}>18 of 21 tasks completed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#ffffff', justifyContent: 'center', padding: 20, borderRadius: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', }}>Management</Text>
                            <View style={{ backgroundColor: '#bedaed', marginLeft: 10, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 20 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#2980b9', }}>Work</Text>
                            </View>
                        </View>
                        <FontAwesome5 name="ellipsis-h" size={24} color="#d4d3d9" />
                    </View>

                    <View style={{ flex: 1, height: 10, backgroundColor: '#f7f7fb', borderRadius: 20, marginTop: 10 }}>
                        <View style={{ height: 10, width: '10%', backgroundColor: '#ffae1e', borderRadius: 20 }} />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#030303', alignSelf: 'flex-end', marginTop: 10 }}>1 of 8 tasks completed</Text>
                </TouchableOpacity>

            </ScrollView>


        </View >

    );
}

export { HomeScreen };
