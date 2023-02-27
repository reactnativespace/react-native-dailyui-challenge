import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')


    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f6f3f9', paddingHorizontal: 20, paddingVertical: 30 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>14 jobs found</Text>
                <View style={{ padding: 12, backgroundColor: '#fcfbfe', borderRadius: 10 }}>
                    <AntDesign name="search1" size={24} color="black" />
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>

                <Animated.View entering={FadeInRight.delay(300).duration(300)}>
                    <TouchableOpacity style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>Google</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000' }}>Fullstack Developer - USA</Text>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#e0d5ff', borderRadius: 10 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6b47c6' }}>Java</Text>
                                </View>

                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#deeeff', borderRadius: 10, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#3284dc' }}>React</Text>
                                </View>

                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#ceffbc', borderRadius: 10, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6ab84e' }}>Spring</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#f9f4f8', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./google.png')} style={{ width: 25, height: 26, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center', marginTop: 0 }} />
                </Animated.View>


                <Animated.View entering={FadeInRight.delay(600).duration(300)}>
                    <TouchableOpacity style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} onPress={()=>navigation.navigate('Job')}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>Airbnb</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000' }}>Backend Developer - Remote</Text>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>


                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#ceffbc', borderRadius: 10 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6ab84e' }}>Nodejs</Text>
                                </View>

                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#fddcd9', borderRadius: 10, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#f16b62' }}>Elasticsearch</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#f9f4f8', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./airbnb.png')} style={{ width: 25, height: 26, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center', marginTop: 0 }} />
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(900).duration(300)}>
                    <TouchableOpacity style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>Steam</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000' }}>AI Engineer - USA</Text>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>


                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#deeeff', borderRadius: 10 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#3284dc' }}>C++</Text>
                                </View>

                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#fcc5f9', borderRadius: 10, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#fa4def' }}>ML</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#f9f4f8', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./steam.png')} style={{ width: 25, height: 25, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center', marginTop: 0 }} />
                </Animated.View>


                <Animated.View entering={FadeInRight.delay(1200).duration(300)}>
                    <TouchableOpacity style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>Discord</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000' }}>Backend Developer - Amsterdam</Text>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>


                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#ceffbc', borderRadius: 10 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6ab84e' }}>Go</Text>
                                </View>

                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#fddcd9', borderRadius: 10, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#f16b62' }}>Elasticsearch</Text>
                                </View>


                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#deeeff', borderRadius: 10, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#3284dc' }}>Postgresql</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#f9f4f8', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./dc.png')} style={{ width: 30, height: 20, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center', marginTop: 0 }} />
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(1500).duration(300)}>
                    <TouchableOpacity style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>Meta</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000' }}>Software QA Engineer - UK</Text>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>


                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#deeeff', borderRadius: 10 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#3284dc' }}>QA</Text>
                                </View>

                                <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#fcc5f9', borderRadius: 10, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#fa4def' }}>Selenium</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#f9f4f8', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./meta.png')} style={{ width: 30, height: 20, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center', marginTop: 0 }} />
                </Animated.View>


            </View>


        </View>


    );
}

export { HomeScreen };
