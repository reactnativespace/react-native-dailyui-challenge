import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    const [isVisible, setIsVisible] = React.useState(true);

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 18 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
                <View style={{ width: 34, height: 34, backgroundColor: '#6781fc', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 23 }}>{ isVisible ? `4` : '0'}</Text>
                </View>
            </View>

            <Text style={{ fontFamily: 'Poppins-Medium', color: '#6781fc', fontSize: 20, marginTop: 20 }}>{`New Feeds`}</Text>
            <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center' }} />

            {isVisible &&

                <>

                    <Animated.View entering={FadeInRight.delay(0).duration(0)} exiting={FadeOutRight.delay(500).duration(500)}>
                        <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                            <View style={{ alignSelf: 'center', flex: 0.3, alignItems: 'center', }}>
                                <Image source={require('./1.png')} style={{ width: 60, height: 60 }} />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#818181', fontSize: 18 }}>{`Gerard Andersen`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14, marginTop: -5 }}>{`Add New Article`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#6781fc', fontSize: 14, marginTop: 10 }}>{`Mobile programming..`}</Text>
                            </View>

                            <View style={{ flex: 0.2, justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14 }}>{`3 min ago`}</Text>
                                <View style={{ width: 30, height: 30, backgroundColor: '#f9f9f9', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <MaterialCommunityIcons name="bell-outline" size={18} color="#6781fc" />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center' }} />
                    </Animated.View>

                    <Animated.View entering={FadeInRight.delay(1000).duration(500)} exiting={FadeOutRight.delay(1000).duration(500)}>
                        <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                            <View style={{ alignSelf: 'center', flex: 0.3, alignItems: 'center', }}>
                                <Image source={require('./4.png')} style={{ width: 60, height: 60 }} />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#818181', fontSize: 18 }}>{`Maggie Fleming`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14, marginTop: -5 }}>{`Liked your article`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#6781fc', fontSize: 14, marginTop: 10 }}>{`Best way to learn..`}</Text>
                            </View>

                            <View style={{ flex: 0.2, justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14 }}>{`Now`}</Text>
                                <View style={{ width: 30, height: 30, backgroundColor: '#f9f9f9', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <MaterialCommunityIcons name="thumb-up-outline" size={18} color="#6781fc" />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center' }} />
                    </Animated.View>

                    <Animated.View entering={FadeInRight.delay(2000).duration(500)} exiting={FadeOutRight.delay(1500).duration(500)}>
                        <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                            <View style={{ alignSelf: 'center', flex: 0.3, alignItems: 'center', }}>
                                <Image source={require('./2.png')} style={{ width: 60, height: 60 }} />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#818181', fontSize: 18 }}>{`Huw Reid`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14, marginTop: -5 }}>{`Comment your article`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#6781fc', fontSize: 14, marginTop: 10 }}>{`React Native is..`}</Text>
                            </View>

                            <View style={{ flex: 0.2, justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14 }}>{`Now`}</Text>
                                <View style={{ width: 30, height: 30, backgroundColor: '#f9f9f9', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <MaterialCommunityIcons name="comment-outline" size={18} color="#6781fc" />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center' }} />
                    </Animated.View>

                    <Animated.View entering={FadeInRight.delay(4000).duration(500)} exiting={FadeOutRight.delay(2000).duration(500)}>
                        <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                            <View style={{ alignSelf: 'center', flex: 0.3, alignItems: 'center', }}>
                                <Image source={require('./3.png')} style={{ width: 60, height: 60 }} />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#818181', fontSize: 18 }}>{`Layla Rocha`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14, marginTop: -5 }}>{`Liked your article`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#6781fc', fontSize: 14, marginTop: 10 }}>{`Best way to learn..`}</Text>
                            </View>

                            <View style={{ flex: 0.2, justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#818181', fontSize: 14 }}>{`Now`}</Text>
                                <View style={{ width: 30, height: 30, backgroundColor: '#f9f9f9', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <MaterialCommunityIcons name="thumb-up-outline" size={18} color="#6781fc" />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width - 10, height: 2, backgroundColor: '#f1f1f1', alignSelf: 'center' }} />
                    </Animated.View>
                </>}

            <TouchableOpacity style={{ padding: 12, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 5, left: width / 2 - 40 }} onPress={() => setIsVisible(prev => !prev)}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#e74c3c', fontSize: 14 }}>{`clear all`}</Text>
            </TouchableOpacity>



        </View>

    );
}

export { HomeScreen };
