import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 18 }}>
            <View style={{ alignSelf: 'flex-end', padding: 12, backgroundColor: '#6f6cfd', justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 30, marginTop: 20 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 20 }}>{`JD`}</Text>
            </View>
            <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 30, marginTop: 10 }}>{`Hello,\nJane Doe`}</Text>

            <TouchableOpacity style={{ backgroundColor: '#f9fbfc', justifyContent: 'center', alignItems: 'center', paddingVertical: 8, borderRadius: 20, marginTop: 10 }}
            onPress={()=> navigation.navigate('Invoice')}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3a3c7d', fontSize: 18 }}>{`Create new invoice`}</Text>
            </TouchableOpacity>

            <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 18, marginTop: 10 }}>{`Overview`}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Animated.View entering={FadeInDown.delay(500).duration(500)}>
                    <View style={{ width: 170, height: 170, backgroundColor: '#6f6cfd', padding: 20, borderRadius: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefeff', fontSize: 18, flex: 1 }}>{`Invoices`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#fefeff', fontSize: 40 }}>{`6`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefeff', fontSize: 12, marginTop: -20 }}>{`Unpaid`}</Text>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1000).duration(500)}>
                    <View style={{ width: 170, height: 210, backgroundColor: '#6f6cfd', padding: 20, borderRadius: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefeff', fontSize: 18, flex: 1 }}>{`Projects`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#fefeff', fontSize: 40 }}>{`2`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefeff', fontSize: 12, marginTop: -20, marginBottom: 40 }}>{`Unpaid`}</Text>
                        <View style={{ height: 40, width: 170, backgroundColor: '#5e5be2', position: 'absolute', bottom: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefeff', fontSize: 14 }}>{`Projects View`}</Text>
                        </View>
                    </View>
                </Animated.View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Animated.View entering={FadeInDown.delay(1500).duration(500)}>
                    <View style={{ width: 170, height: 210, backgroundColor: '#f9fbfc', padding: 20, borderRadius: 20, marginTop: -20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#3a3c7d', fontSize: 18, flex: 1 }}>{`Margin`}</Text>
                        <View style={{ width: 100, height: 100, borderWidth: 3, borderColor: '#3a3c7d', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#3a3c7d', fontSize: 25 }}>{`6,9%`}</Text>
                        </View>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(2000).duration(500)}>
                    <View style={{ width: 170, height: 170, backgroundColor: '#f9fbfc', padding: 20, borderRadius: 20, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#3a3c7d', fontSize: 18, flex: 1 }}>{`Revenue`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#3a3c7d', fontSize: 20, }}>{`$1,800`}</Text>
                        <Image source={require('./path.png')} style={{ width: 168, height: 60, alignSelf: 'center' }} />
                        <View style={{ backgroundColor: '#eceefd', width: 168, height: 20, position: 'absolute', bottom: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, left: 1 }} />
                    </View>
                </Animated.View>
            </View>


        </View>

    );
}

export { HomeScreen };
