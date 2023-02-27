import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {


    const { width, height } = Dimensions.get('window')

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <ScrollView horizontal pagingEnabled={true} showsHorizontalScrollIndicator={false}>

                <View style={{ alignItems: 'center', width: width, marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#555257', fontSize: 30 }}>{'FREE'}</Text>

                    <View style={{ height: 200, width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image source={require('./1.png')} />
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginVertical: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#9eeb8d', fontSize: 20 }}>{'$'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#9eeb8d', fontSize: 50, marginBottom: -20 }}>{'0'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'/month'}</Text>
                    </View>


                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'EMR'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Pt and messaging'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Public Profile'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Auto-reminders'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Credit card fees info'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Friendly email support info'}</Text>



                </View>

                <View style={{ alignItems: 'center', width: width, marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#555257', fontSize: 30 }}>{'PREMIUM'}</Text>

                    <View style={{ height: 200, width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image source={require('./2.png')} />
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginVertical: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#53e285', fontSize: 20 }}>{'$'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#53e285', fontSize: 50, marginBottom: -20 }}>{'29'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'/month'}</Text>
                    </View>


                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Note templates'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Custom templates'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Enhanced clinic functionality'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Rating sclaes'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Email forwarding'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Pre-screening'}</Text>

                </View>

                <View style={{ alignItems: 'center', width: width, marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#555257', fontSize: 30 }}>{'PRESCRIBER'}</Text>

                    <View style={{ height: 200, width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image source={require('./3.png')} />
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginVertical: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#7bc857', fontSize: 20 }}>{'$'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#7bc857', fontSize: 50, marginBottom: -20 }}>{'49'}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'/month'}</Text>
                    </View>


                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Custom templates'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Private free templates'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Enhanced clinic functionality'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Quickbooks integration'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'Calendar customization'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#5552570', fontSize: 20 }}>{'7/27 online support'}</Text>

                </View>

            </ScrollView>

            <View style={{ height: 120, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#53e285', fontSize: 20, letterSpacing: 3 }}>{'CHOOSE THIS PLAN'}</Text>
                <TouchableOpacity style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#53e285', borderRadius: 30 }}>
                    <AntDesign name="right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>




        </View>

    );
}

export { HomeScreen };
