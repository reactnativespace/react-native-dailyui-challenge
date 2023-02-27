import React from 'react';
import { View, FlatList, Text, Image, useWindowDimensions, Animated } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

const FlightScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#303030', }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
                <FontAwesome5 name="angle-left" size={24} color="#ababab" style={{ marginBottom: 4 }} />
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 20, marginLeft: 30 }}>{'Boarding Pass'}</Text>
            </View>

            <FadeIn delay={300}>
                <View style={{ margin: 20, padding: 20, backgroundColor: '#3f3f3f', borderRadius: 20 }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#303030', position: 'absolute', top: 368, left: -20 }} />
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#303030', position: 'absolute', top: 368, right: -20 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 30 }}>{'AMS'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12, marginTop: -12 }}>{'Amsterdam'}</Text>
                        </View>
                        <FontAwesome5 name="plane" size={24} color="#FFF" />
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 30 }}>{'IST'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12, marginTop: -12 }}>{'Istanbul'}</Text>
                        </View>
                    </View>


                    <View style={{ marginTop: 40, flexDirection: 'row' }}>

                        <View style={{ flex: 0.5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Flight No'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'FR-0124'}</Text>
                        </View>

                        <View style={{ flex: 0.5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Date'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'2022/11/28'}</Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 40, flexDirection: 'row' }}>

                        <View style={{ flex: 0.5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Name'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'Walter White'}</Text>
                        </View>

                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Sit'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'16-A'}</Text>
                        </View>

                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Gate'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'19'}</Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 40, flexDirection: 'row' }}>

                        <View style={{ flex: 0.5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Boarding Time'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'20:30'}</Text>
                        </View>

                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Flight'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'21:00'}</Text>
                        </View>

                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12 }}>{'Arrival'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: -5 }}>{'00:00'}</Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 30, paddingTop: 30, borderTopWidth: 1, borderStyle: "dashed", width: '100%', borderColor: '#ababab' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 12, alignSelf: 'center' }}>{'Your Passing Code'}</Text>
                        <Image source={require('./download.png')} style={{ width: 300, resizeMode: 'contain', alignSelf: 'center' }} />
                    </View>

                </View>
            </FadeIn>

        </View>

    );
}

export { FlightScreen };
