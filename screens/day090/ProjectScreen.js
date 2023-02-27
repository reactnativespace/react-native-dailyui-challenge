import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const ProjectScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');


    return (
        <View style={{ flex: 1, backgroundColor: '#eff9fb', padding: 20 }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 24 }}>Your Projects</Text>
                <FontAwesome name="sliders" size={24} color="#0197f6" />
            </View>

            <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between' }} entering={FadeInDown.delay(300).duration(300)}>
                    <TouchableOpacity style={{ width: 170, height: 170, backgroundColor: '#0197f6', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name="plus" size={20} color="#FFF" />
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 16, marginLeft: 10, textAlign: 'center', marginTop: 10 }}>{`Create new\nproject!`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Business`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Tech\nbrainstorming`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./1.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./2.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                            <Image source={require('./3.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }} entering={FadeInDown.delay(600).duration(300)}>
                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Interview`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Zoom Meeting\n/w team`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./4.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./5.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Meeting`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Daily\nchallenge`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./1.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./6.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                            <Image source={require('./7.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }} entering={FadeInDown.delay(900).duration(300)}>
                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Business`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Code review\nsession`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./8.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Podcast`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Micro inv.\non cryto`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./9.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./10.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }} entering={FadeInDown.delay(1200).duration(300)}>
                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Youtube`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Script\ncopyright`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./11.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./1.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Interview`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`HR session for\n managers`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./12.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./13.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }} entering={FadeInDown.delay(600).duration(1500)}>
                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Business`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Slideshow\nreview`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./4.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./8.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                            <Image source={require('./3.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 170, backgroundColor: '#FFF', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0197f6', fontSize: 16, }}>{`Meeting`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, }}>{`Sprint\nreview`}</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image source={require('./2.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6' }} />
                            <Image source={require('./9.jpg')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#0197f6', borderWidth: 2, borderColor: '#0197f6', marginLeft: -15 }} />
                        </View>
                    </TouchableOpacity>
                </Animated.View>




            </ScrollView>


        </View>
    );
}

export { ProjectScreen };
