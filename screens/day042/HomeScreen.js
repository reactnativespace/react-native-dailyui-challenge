import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {


    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, padding: 12, backgroundColor: '#fdfdfd' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#393745', fontSize: 25 }}>{`To Do List`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#393745', fontSize: 16, marginTop: -10 }}>{`29 Incompleted tasks`}</Text>
                </View>
                <FontAwesome5 name="cog" size={24} color="rgba(57,55,69, 0.5)" />
            </View>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <TouchableOpacity style={{
                    backgroundColor: '#FFF', padding: 12, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', height: 100, borderLeftWidth: 5, borderColor: '#4947fb',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#393745', fontSize: 17 }}>{`Scheduled`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(57,55,69, 0.5)', fontSize: 14, marginTop: -5 }}>{`3 tasks`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(57,55,69, 0.5)', fontSize: 14, marginTop: -5 }}>{`Today 10:20 AM`}</Text>
                    </View>
                    <FontAwesome5 name="clock" size={24} color="#4947fb" />

                </TouchableOpacity>
            </Animated.View>


            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} entering={FadeInDown.delay(600).duration(300)}>

                <TouchableOpacity style={{
                    backgroundColor: '#FFF', padding: 12, borderRadius: 10, height: 100, width: 175, borderLeftWidth: 5, borderColor: '#80f0c5',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'space-between'
                }}>
                    <FontAwesome5 name="sticky-note" size={24} color="#80f0c5" />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#393745', fontSize: 17 }}>{`Buy`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(57,55,69, 0.5)', fontSize: 14, marginTop: -5 }}>{`5 tasks`}</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: '#FFF', padding: 12, borderRadius: 10, height: 100, width: 175, borderLeftWidth: 5, borderColor: '#869ef3',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'space-between'
                }} onPress={()=> navigation.navigate('Todo')}>
                    <FontAwesome5 name="sticky-note" size={24} color="#869ef3" />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#393745', fontSize: 17 }}>{`Finance`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(57,55,69, 0.5)', fontSize: 14, marginTop: -5 }}>{`4 tasks`}</Text>

                </TouchableOpacity>

            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} entering={FadeInDown.delay(900).duration(300)}>

                <TouchableOpacity style={{
                    backgroundColor: '#FFF', padding: 12, borderRadius: 10, height: 100, width: 175, borderLeftWidth: 5, borderColor: '#d7a9f3',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'space-between'
                }}>
                    <FontAwesome5 name="sticky-note" size={24} color="#d7a9f3" />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#393745', fontSize: 17 }}>{`Groceries`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(57,55,69, 0.5)', fontSize: 14, marginTop: -5 }}>{`6 tasks`}</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: '#FFF', padding: 12, borderRadius: 10, height: 100, width: 175, borderLeftWidth: 5, borderColor: '#fdd394',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'space-between'
                }}>
                    <FontAwesome5 name="sticky-note" size={24} color="#fdd394" />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#393745', fontSize: 17 }}>{`Personal`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(57,55,69, 0.5)', fontSize: 14, marginTop: -5 }}>{`3 tasks`}</Text>

                </TouchableOpacity>


            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} entering={FadeInDown.delay(1200).duration(300)}>

                <TouchableOpacity style={{
                    backgroundColor: '#FFF', padding: 12, borderRadius: 10, height: 100, width: 175, borderLeftWidth: 5, borderColor: '#fc92b4',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'space-between'
                }}>
                    <FontAwesome5 name="sticky-note" size={24} color="#fc92b4" />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#393745', fontSize: 17 }}>{`Office`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(57,55,69, 0.5)', fontSize: 14, marginTop: -5 }}>{`8 tasks`}</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    height: 100, width: 175, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'
                }}>
                    <FontAwesome5 name="plus" size={24} color="#879ef3" />
                </TouchableOpacity>

            </Animated.View>


        </View>

    );
}

export { HomeScreen };
