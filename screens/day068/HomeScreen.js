import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, set } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    const [isDetailVisible, setIsDetailVisible] = React.useState(false);

    return (

        <View style={{ flex: 1, backgroundColor: '#130c60', }}>

            <View style={{ padding: 20 }}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
            </View>
            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 60 }}>CDG</Text>
                        <MaterialCommunityIcons name="arrow-right" size={24} color="#FFF" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 60 }}>ARN</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ borderColor: '#ffbd5b', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#ffbd5b', fontSize: 16 }}>June 10</Text>
                            </View>
                            <View style={{ borderColor: '#ffbd5b', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', marginLeft: 10 }}>
                                <MaterialCommunityIcons name="account-outline" size={24} color="#ffbd5b" />
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#ffbd5b', fontSize: 16, marginRight: 5 }}>1</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 18, marginRight: 10 }}>One-way</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 18, opacity: 0.5 }}>Return</Text>
                        </View>
                    </View>

                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)} style={{ backgroundColor: '#FFF', flex: 1, marginTop: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingHorizontal: 20, paddingTop: 40 }}>

                <Animated.View entering={FadeInDown.delay(800).duration(200)}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setIsDetailVisible(current => !current)}>
                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>07:35</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>10:10</Text>
                        </View>

                        <View style={{ flex: 0.6 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>CDG Paris</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>ARN Stockholm</Text>
                        </View>
                        <Text style={{ flex: 0.15, fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 25 }}>$75</Text>
                    </TouchableOpacity>


                    {isDetailVisible &&
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                            <View style={{ padding: 10, borderWidth: 0.8, borderColor: '#a1a1a1', borderRadius: 10 }}>
                                <MaterialCommunityIcons name="bag-suitcase" size={24} color="#a1a1a1" />
                            </View>
                            <View style={{ padding: 10, borderWidth: 0.8, borderColor: '#a1a1a1', borderRadius: 10, marginLeft: 10 }}>
                                <MaterialCommunityIcons name="seat" size={24} color="#a1a1a1" />
                            </View>

                            <TouchableOpacity style={{ paddingHorizontal: 50, paddingVertical: 5, backgroundColor: '#ffbd5b', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 20 }} onPress={() => navigation.navigate('Flight')}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>Pick this flight</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1000).duration(200)}>


                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>12:05</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>14:30</Text>
                        </View>

                        <View style={{ flex: 0.6 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>CDG Paris</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>ARN Stockholm</Text>
                        </View>
                        <Text style={{ flex: 0.15, fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 25 }}>$82</Text>
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1200).duration(200)}>


                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>14:55</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>17:25</Text>
                        </View>

                        <View style={{ flex: 0.6 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>CDG Paris</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>ARN Stockholm</Text>
                        </View>
                        <Text style={{ flex: 0.15, fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 25 }}>$92</Text>
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1400).duration(200)}>


                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>18:45</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>21:30</Text>
                        </View>

                        <View style={{ flex: 0.6 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>CDG Paris</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>ARN Stockholm</Text>
                        </View>
                        <Text style={{ flex: 0.15, fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 25 }}>$68</Text>
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1600).duration(200)}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
                        <View style={{ flex: 0.25 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>20:05</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>22:50</Text>
                        </View>

                        <View style={{ flex: 0.6 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>CDG Paris</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>ARN Stockholm</Text>
                        </View>
                        <Text style={{ flex: 0.15, fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 25 }}>$47</Text>
                    </TouchableOpacity>

                </Animated.View>
            </Animated.View>

        </View >

    );
}

export { HomeScreen };
