import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <MaterialCommunityIcons name="bell-badge" size={24} color="#cfcfcf" />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 40, color: '#121212' }}>Health Data</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#8baba1' }}>Today</Text>
            </View>

            <Animated.View entering={FadeInDown.delay(500).duration(500)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1' }}>MON</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#cfcfcf' }}>8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1' }}>TUE</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#cfcfcf' }}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1' }}>WED</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1', backgroundColor: '#bbd4ce', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, textAlign: 'center' }}>10</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1' }}>THU</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#cfcfcf' }}>11</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1' }}>FRI</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#cfcfcf' }}>12</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1' }}>SAT</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#cfcfcf' }}>13</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#8baba1' }}>SUN</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#cfcfcf' }}>14</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>

                <Animated.View style={{ backgroundColor: '#f9b5ac', width: 180, height: 280, borderRadius: 10, padding: 20 }} entering={FadeInDown.delay(1000).duration(500)}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#d27367' }}>Steps</Text>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0a19a' }}>
                            <MaterialCommunityIcons name="foot-print" size={24} color="#FFF" />
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 40, color: '#FFF' }}>12.458</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 15, height: 140, backgroundColor: '#facbc4', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '20%', width: 15, backgroundColor: '#c86254', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 140, backgroundColor: '#facbc4', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '50%', width: 15, backgroundColor: '#c86254', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 140, backgroundColor: '#facbc4', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '80%', width: 15, backgroundColor: '#c86254', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 140, backgroundColor: '#facbc4', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '40%', width: 15, backgroundColor: '#c86254', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 140, backgroundColor: '#facbc4', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '15%', width: 15, backgroundColor: '#c86254', borderRadius: 10, }} />
                        </View>
                    </View>


                </Animated.View>

                <Animated.View style={{ backgroundColor: '#264e71', width: 180, height: 200, borderRadius: 10, padding: 20 }} entering={FadeInDown.delay(1500).duration(500)}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#132d43' }}>Running</Text>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#234664' }}>
                            <MaterialCommunityIcons name="run" size={24} color="#FFF" />
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 40, color: '#FFF' }}>2.145</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#132d43', marginTop: -20 }}>meters</Text>
                    <Image source={require('./2.png')} style={{ width: 176, height: 50, alignSelf: 'center' }} />

                </Animated.View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>

                <Animated.View style={{ backgroundColor: '#679185', width: 180, height: 200, borderRadius: 10, padding: 20 }} entering={FadeInDown.delay(2000).duration(500)}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 17, color: '#2b4840' }}>Heart Rate</Text>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5c8177' }}>
                            <MaterialCommunityIcons name="cards-heart" size={24} color="#FFF" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#FFF' }}>85</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#FFF', marginBottom: 12, marginLeft: 5 }}>bpm</Text>
                    </View>
                    <Image source={require('./1.png')} style={{ width: 178, height: 85, alignSelf: 'center' }} />



                </Animated.View>

                <Animated.View style={{ backgroundColor: '#fdebd3', width: 180, height: 280, borderRadius: 10, padding: 20, marginTop: -80 }} entering={FadeInDown.delay(2500).duration(500)}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#a7722c' }}>Calories</Text>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e9cfae' }}>
                            <MaterialCommunityIcons name="fire" size={24} color="#FFF" />
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 40, color: '#a7722c' }}>1.014</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#a7722c', marginTop: -20 }}>kcal</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ width: 15, height: 120, backgroundColor: '#e9cfae', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '90%', width: 15, backgroundColor: '#a7722c', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 120, backgroundColor: '#e9cfae', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '70%', width: 15, backgroundColor: '#a7722c', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 120, backgroundColor: '#e9cfae', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '75%', width: 15, backgroundColor: '#a7722c', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 120, backgroundColor: '#e9cfae', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '55%', width: 15, backgroundColor: '#a7722c', borderRadius: 10, }} />
                        </View>

                        <View style={{ width: 15, height: 120, backgroundColor: '#e9cfae', borderRadius: 10, justifyContent: 'flex-end' }}>
                            <View style={{ height: '66%', width: 15, backgroundColor: '#a7722c', borderRadius: 10, }} />
                        </View>
                    </View>
                </Animated.View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginTop: 15 }}>
                <MaterialCommunityIcons name="home" size={40} color="#565656" />
                <MaterialCommunityIcons name="video" size={40} color="#d2d2d2" />
                <MaterialCommunityIcons name="progress-star" size={40} color="#d2d2d2" />
                <MaterialCommunityIcons name="fire" size={40} color="#d2d2d2" />
                <MaterialCommunityIcons name="account" size={40} color="#d2d2d2" />
            </View>

        </View >

    );
}

export { HomeScreen };
