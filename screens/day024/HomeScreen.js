import React from 'react';
import { View, FlatList, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#303030', paddingHorizontal: 20, paddingVertical: 30 }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ height: 20 }} />

                <TouchableOpacity style={{ backgroundColor: '#3f3f3f', borderRadius: 20, padding: 18, marginBottom: 20 }}>

                    <View style={{ backgroundColor: '#013f9d', position: 'absolute', paddingHorizontal: 15, paddingVertical: 4, borderRadius: 20, top: -13, right: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12 }}>{'The cheapest'}</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#658cc9', fontSize: 25 }}>{'$52'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'AMS-SAW'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'18:00 - 21:00'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'In Transit'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'3 hours'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'Non-Stop'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'Direct flight'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={{ backgroundColor: '#3f3f3f', borderRadius: 20, padding: 18, marginBottom: 20 }}>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#658cc9', fontSize: 25 }}>{'$65'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'AMS-BVA'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'20:00 - 22:00'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'In Transit'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'2 hours'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'Non-Stop'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'Direct flight'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={{ backgroundColor: '#3f3f3f', borderRadius: 20, padding: 18, marginBottom: 20 }}>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#658cc9', fontSize: 25 }}>{'$79'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'AMS-ESB'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'12:00 - 14:00'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'In Transit'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'2 hours'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'Non-Stop'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'Direct flight'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#3f3f3f', borderRadius: 20, padding: 18, marginBottom: 20 }} onPress={()=> navigation.navigate('Flight')}>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#658cc9', fontSize: 25 }}>{'$99'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'AMS-IST'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'21:00 - 00:00'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'In Transit'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'3 hours'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'Non-Stop'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'Direct flight'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#3f3f3f', borderRadius: 20, padding: 18, marginBottom: 20 }}>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#658cc9', fontSize: 25 }}>{'$110'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'AMS-IBZ'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'11:00 - 13:00'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'In Transit'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'2 hours'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'Non-Stop'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'Direct flight'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#3f3f3f', borderRadius: 20, padding: 18, marginBottom: 20 }}>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#658cc9', fontSize: 25 }}>{'$120'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'AMS-AGP'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'20:00 - 21:00'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'In Transit'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'1 hours'}</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ababab', fontSize: 16 }}>{'Non-Stop'}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 12, marginTop: -5 }}>{'Direct flight'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </View>

    );
}

export { HomeScreen };
