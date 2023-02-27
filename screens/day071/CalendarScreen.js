import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const CalendarScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#1f2029', padding: 20 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <FontAwesome5 name="arrow-left" size={24} color="#FFF" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', marginLeft: 100, }}>February</Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 4, alignSelf: 'center' }}>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', textAlign: 'center' }}>Mon</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', textAlign: 'center' }}>Tue</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', textAlign: 'center' }}>Wed</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', textAlign: 'center' }}>Thu</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', textAlign: 'center' }}>Fri</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', textAlign: 'center' }}>Sat</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', textAlign: 'center' }}>Sun</Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingVertical: 10 }}>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>1</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>2</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>3</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>4</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>5</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>6</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>7</Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingVertical: 10, backgroundColor: '#303238', borderRadius: 20 }}>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#ffae1e', textAlign: 'center' }}>8</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>9</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>10</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>11</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>12</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>13</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>14</Text>
                </View>


                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingVertical: 10 }}>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>15</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>16</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>17</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>18</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>19</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>20</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>21</Text>
                </View>


                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 10, marginBottom: 40 }}>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>22</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>23</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>24</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>25</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>26</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>27</Text>
                    <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>28</Text>
                </View>

            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)} style={{ flex: 1, position:'absolute', bottom: 0 }}>
                <View style={{ flex: 1, backgroundColor: '#f2f1f6', alignSelf: 'center', width: width, paddingHorizontal: 20, paddingTop: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, height: 80 }}>

                        <View style={{ backgroundColor: '#3400fe', height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#FFF', }}>8</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', marginTop: -5 }}>Mon</Text>
                        </View>

                        <View style={{ backgroundColor: '#FFF', height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#030303', }}>9</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', marginTop: -5 }}>The</Text>
                        </View>

                        <View style={{ backgroundColor: '#FFF', height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#030303', }}>10</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', marginTop: -5 }}>Wed</Text>
                        </View>

                        <View style={{ backgroundColor: '#FFF', height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#030303', }}>11</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', marginTop: -5 }}>Thu</Text>
                        </View>

                        <View style={{ backgroundColor: '#FFF', height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#030303', }}>12</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', marginTop: -5 }}>Fri</Text>
                        </View>

                        <View style={{ backgroundColor: '#FFF', height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, color: '#030303', }}>13</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', marginTop: -5 }}>Sat</Text>
                        </View>

                    </ScrollView>

                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#030303', marginTop: 20, marginBottom: 10 }}>Today's Schedule</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 0 }}>

                        <TouchableOpacity style={{ backgroundColor: '#ffffff', justifyContent: 'space-between', padding: 20, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', }}>Morning Meeting</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome5 name="map-marker-alt" size={20} color="#555459" />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#5b43b6', marginLeft: 5 }}>Zoom </Text>
                                </View>
                            </View>

                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#555459', }}>08:30</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#555459', }}>09:00</Text>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity style={{ backgroundColor: '#ffffff', justifyContent: 'space-between', padding: 20, borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', }}>Project Review</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome5 name="map-marker-alt" size={20} color="#555459" />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#5b43b6', marginLeft: 5 }}>Meeting Room II</Text>
                                </View>
                            </View>

                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#555459', }}>09:00</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#555459', }}>10:00</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#ffffff', justifyContent: 'space-between', padding: 20, borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#030303', }}>Lunch With Manager</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome5 name="map-marker-alt" size={20} color="#555459" />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#5b43b6', marginLeft: 5 }}>Il Forno Cafe</Text>
                                </View>
                            </View>

                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#555459', }}>12:00</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#555459', }}>13:00</Text>
                            </View>

                        </TouchableOpacity>


                    </ScrollView>

                </View>
            </Animated.View>



        </View >

    );
}

export { CalendarScreen };
