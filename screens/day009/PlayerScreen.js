import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';

const PlayerScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#1a1b1f' }}>




            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, marginTop: 20, position: 'absolute', zIndex: 2, width: '100%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5 name="angle-left" size={24} color="#FFF" />

                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5 name="heart" size={24} color="#FFF" />
                    <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ paddingLeft: 30 }} />
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'red', borderBottomColor: '#848588', borderBottomWidth: 2 }}>
                <Image source={require('./imgs/big.jpg')} style={{ width: 395, height: 335 }} />
                <Text style={{ fontSize: 40, fontFamily: 'Poppins-Bold', color: '#FFF', paddingLeft: 8, position: 'absolute', bottom: 1 }}>{`MrDeepSense`}</Text>
                <View style={{ width: 60, height: 60, borderRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#27bc5c', position: 'absolute', bottom: -30, right: 10 }}>
                    <FontAwesome5 name="play" size={25} color="#000" />
                </View>
            </View>

            <View style={{ flexDirection: 'row', padding: 12, alignItems: 'center' }}>
                <AntDesign name="heart" size={18} color="#848588" />
                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', paddingLeft: 8 }}>46,517,314 likes</Text>

                <Ionicons name="time-outline" size={22} color="#848588" style={{ marginLeft: 12 }} />
                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', paddingLeft: 8 }}>46,517,314 likes</Text>
            </View>

            <View style={{ padding: 12 }}>

                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF', marginBottom: 12 }}>Featuring</Text>

                <ScrollView style={{ height: 300 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/10.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Needed You Mos</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/11.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>This Feeling</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/12.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Silenced</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/13.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Gone</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/14.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Higher Love (ft. Nuala)</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/15.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Good For Me</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/16.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Strangers</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/17.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Time and Time Again</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/18.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Sun Came Up</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/19.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Primal Call</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <FontAwesome5 name="play" size={15} color="#FFF" style={{ position: 'absolute', zIndex: 3, left: 21, top: 16, opacity: .6 }} />
                                <Image source={require('./imgs/20.jpg')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12, opacity: 0.4 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Marea (We’ve Lost)</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588', marginTop: -5 }}>MrDeepSense</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="heart" size={24} color="#848588" />
                            <FontAwesome5 name="ellipsis-v" size={24} color="#FFF" style={{ marginLeft: 30 }} />
                        </View>
                    </View>

                </ScrollView>

            </View>




        </View>

    );
}

export { PlayerScreen };