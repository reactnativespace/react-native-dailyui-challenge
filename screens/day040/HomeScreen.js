import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FlipInYRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {


    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1 }}>


            <ScrollView pagingEnabled={true} horizontal>

                <View>
                    <Image source={require('./c2.png')} style={{ width: width, height: height }} />
                    <TouchableOpacity style={{ width: 350, position: 'absolute', top: 200, backgroundColor: 'rgba(255,255,255,0.6)', padding: 8, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#432734', fontSize: 30 }}>{`Chocolate Cookies`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#432734', fontSize: 20, marginTop: -15 }}>{`30 min - 6 serving`}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('./pie.jpg')} style={{ width: width, height: height }} />
                    <TouchableOpacity style={{ width: 350, position: 'absolute', top: 200, backgroundColor: 'rgba(255,255,255,0.6)', padding: 8, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#95672c', fontSize: 40 }}>{`Persimmon Pie`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#95672c', fontSize: 20, marginTop: -15 }}>{`45 min - 8 serving`}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Image source={require('./cookies.jpg')} style={{ width: width, height: height }} />
                    <TouchableOpacity style={{ width: 350, position: 'absolute', top: 200, backgroundColor: 'rgba(255,255,255,0.6)', padding: 8, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#6c0203', fontSize: 40 }}>{`Mini Cookies`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#6c0203', fontSize: 20, marginTop: -15 }}>{`30 min - 12 serving`}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Image source={require('./cake.jpg')} style={{ width: width, height: height }} />
                    <TouchableOpacity style={{ width: 350, position: 'absolute', top: 200, backgroundColor: 'rgba(255,255,255,0.6)', padding: 8, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                        onPress={() => navigation.navigate('Recipe')}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#58372e', fontSize: 40 }}>{`Chocolate Cake`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#58372e', fontSize: 20, marginTop: -15 }}>{`60 min - 8 serving`}</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <View style={{ zIndex: 99, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 8 }}>
                <TouchableOpacity>
                    <FontAwesome name="chevron-left" size={30} color="#353b48" />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#353b48', fontSize: 25, alignSelf: 'center', letterSpacing: 10 }}>DESSERTS</Text>

                <TouchableOpacity>
                    <FontAwesome name="chevron-right" size={30} color="#353b48" />
                </TouchableOpacity>
            </View>

        </View>

    );
}

export { HomeScreen };
