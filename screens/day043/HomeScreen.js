import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, padding: 12, backgroundColor: '#fff8f8' }}>


            <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 30, alignSelf: 'center', marginTop: 30 }}>{`Cool Burger & Pizza`}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <AntDesign name="star" size={20} color="#ffa0a2" />
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 20, marginTop: 6, marginLeft: 8 }}>{`4.6`}</Text>
                <AntDesign name="clockcircleo" size={20} color="#ffa0a2" style={{ marginLeft: 12 }} />
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 20, marginTop: 6, marginLeft: 8 }}>{`30 Min`}</Text>
            </View>

            <View style={{ padding: 12 }}>

                <Animated.View entering={FadeInDown.delay(400).duration(400)}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`Our Burgers`}</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ padding: 18, backgroundColor: '#ffe8e8', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Image source={require('./burger_1.png')} style={{ width: 35, height: 35 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, padding: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`Veggie Burger`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`$8`}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(800).duration(400)}>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, marginTop: 10 }} onPress={() => navigation.navigate('Burger')}>
                        <View style={{ padding: 18, backgroundColor: '#dff7e6', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Image source={require('./burger_2.png')} style={{ width: 35, height: 35 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, padding: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`Beef Burger`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`$10`}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1200).duration(400)}>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ padding: 18, backgroundColor: '#e9eaff', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Image source={require('./burger_3.png')} style={{ width: 35, height: 35 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, padding: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`Mushroom Burger`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`$6`}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1600).duration(400)}>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ padding: 18, backgroundColor: '#fcf6d9', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Image source={require('./pizza.png')} style={{ width: 35, height: 35 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, padding: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`Mozzarella Pizza`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`$5`}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>


                <Animated.View entering={FadeInDown.delay(2000).duration(400)}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18, marginTop: 10 }}>{`Side orders`}</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ padding: 18, backgroundColor: '#e6cef0', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Image source={require('./fries.png')} style={{ width: 35, height: 35 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, padding: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`French Fries`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`$2`}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(2400).duration(400)}>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ padding: 18, backgroundColor: '#e0c4ab', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Image source={require('./nuggets.png')} style={{ width: 35, height: 35 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, padding: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`Chicken Nuggets`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`$3`}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

            </View>
        </View>

    );
}

export { HomeScreen };
