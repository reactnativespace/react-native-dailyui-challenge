import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 12 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#5552570', fontSize: 25 }}>{'Storage'}</Text>
                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#204ef8', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <AntDesign name="user" size={30} color="#FFF" />
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(0,0,0, 0.15)' }} />
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(0,0,0, 1)', marginLeft: 5 }} />
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(0,0,0, 0.15)', marginLeft: 5 }} />
            </View>

            <View style={{ marginVertical: 20 }}>
                <View style={{ marginBottom: 5 }}>
                    <View style={{ width: '100%', height: 10, backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: 10 }} />
                    <View style={{ width: '40%', height: 10, backgroundColor: '#204ef8', borderRadius: 10, position: 'absolute' }} />
                </View>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#204ef8', fontSize: 15 }}>{'40 % of 1.0 TB'}</Text>
            </View>


            <Animated.View style={{
                flexDirection: 'row', width: '100%', padding: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
                borderRadius: 10,
                marginBottom: 15
            }}
                entering={FadeInRight.delay(300).duration(500)}>
                <AntDesign name="pdffile1" size={35} color="#204ef8" style={{ marginTop: 5 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 15 }}>{'course-syllabus.pdf'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,0.15)', fontSize: 15, marginLeft: 10 }}>{'12.5 MB'}</Text>
                    </View>
                    <View>
                        <View style={{ width: '100%', height: 10, backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: 10 }} />
                        <View style={{ width: '35%', height: 10, backgroundColor: '#204ef8', borderRadius: 10, position: 'absolute' }} />
                    </View>
                </View>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#204ef8', fontSize: 13, marginLeft: 10, marginTop: 28 }}>{'35%'}</Text>
            </Animated.View>

            <Animated.View style={{
                flexDirection: 'row', width: '100%', padding: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
                borderRadius: 10,
                marginBottom: 15
            }}
                entering={FadeInRight.delay(600).duration(500)}>
                <AntDesign name="pdffile1" size={35} color="#204ef8" style={{ marginTop: 5 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 15 }}>{'user-id-scan.pdf'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,0.15)', fontSize: 15, marginLeft: 10 }}>{'2.8 MB'}</Text>
                    </View>
                    <View>
                        <View style={{ width: '100%', height: 10, backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: 10 }} />
                        <View style={{ width: '82%', height: 10, backgroundColor: '#204ef8', borderRadius: 10, position: 'absolute' }} />
                    </View>
                </View>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#204ef8', fontSize: 13, marginLeft: 10, marginTop: 28 }}>{'82%'}</Text>
            </Animated.View>

            <Animated.View style={{
                flexDirection: 'row', width: '100%', padding: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
                borderRadius: 10,
                marginBottom: 15
            }}
                entering={FadeInRight.delay(900).duration(500)}>
                <AntDesign name="jpgfile1" size={35} color="#204ef8" style={{ marginTop: 5 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 15 }}>{'profile_picture.jpg'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,0.15)', fontSize: 15, marginLeft: 10 }}>{'700 KB'}</Text>
                    </View>
                    <View>
                        <View style={{ width: '100%', height: 10, backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: 10 }} />
                        <View style={{ width: '12%', height: 10, backgroundColor: '#204ef8', borderRadius: 10, position: 'absolute' }} />
                    </View>
                </View>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#204ef8', fontSize: 13, marginLeft: 10, marginTop: 28 }}>{'12%'}</Text>
            </Animated.View>


            <Animated.View style={{
                flexDirection: 'row', width: '100%', padding: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
                borderRadius: 10,
                marginBottom: 15
            }}
                entering={FadeInRight.delay(1200).duration(500)}>
                <AntDesign name="wordfile1" size={35} color="#204ef8" style={{ marginTop: 5 }} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 15 }}>{'notes.docx'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,0.15)', fontSize: 15, marginLeft: 10 }}>{'6.8 MB'}</Text>
                    </View>
                    <View>
                        <View style={{ width: '100%', height: 10, backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: 10 }} />
                        <View style={{ width: '56%', height: 10, backgroundColor: '#204ef8', borderRadius: 10, position: 'absolute' }} />
                    </View>
                </View>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#204ef8', fontSize: 13, marginLeft: 10, marginTop: 28 }}>{'56%'}</Text>
            </Animated.View>


            <TouchableOpacity style={{
                backgroundColor: '#204ef8', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center',
                position: 'absolute', bottom: 70, left: width / 2 - 25,
                shadowColor: "#204ef8",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
            }}>
                <AntDesign name="plus" size={30} color="#FFF" />
            </TouchableOpacity>


        </View>

    );
}

export { HomeScreen };
