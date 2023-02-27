import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const ConfirmScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    const animation = React.useRef(null);

    const [count, setCount] = React.useState(0);

    return (

        <View style={{ flex: 1, backgroundColor: '#edb7c0', paddingHorizontal: 18 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
                <MaterialCommunityIcons name="chevron-left" size={30} color="#c03e45" />
                <MaterialCommunityIcons name="movie-open" size={30} color="#c03e45" />
            </View>

            <Animated.View entering={FadeInDown.delay(500).duration(500)}>
                <>


                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, marginTop: 10, color: '#c03e45', alignSelf: 'center' }}>{`The Pale Blue Eye`}</Text>
                    <View style={{ height: 2, backgroundColor: '#c03e45', marginTop: 5, alignSelf: 'center', width: width - 100 }} />

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: count >= 1 ? '#c03e45' : '#ac9098', backgroundColor: count >= 1 ? '#c03e45' : '', marginLeft: 5 }} onPress={() => setCount(count => count + 1)} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: count >= 2 ? '#c03e45' : '#ac9098', backgroundColor: count >= 2 ? '#c03e45' : '', marginLeft: 5 }} onPress={() => setCount(count => count + 1)} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: count >= 3 ? '#c03e45' : '#ac9098', backgroundColor: count >= 3 ? '#c03e45' : '', marginLeft: 5 }} onPress={() => setCount(count => count + 1)} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#ac9098', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                        <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 10, borderColor: '#394f63', backgroundColor: '#394f63', marginLeft: 5 }} />
                    </View>


                    <View style={{ width: width, flexDirection: 'row', alignSelf: 'center', marginTop: 20, justifyContent: 'space-evenly' }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 15, borderColor: '#ac9098' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#4d545e', textAlign: 'center' }}>{`Available`}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 15, borderColor: '#394f63', backgroundColor: '#394f63' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#4d545e', textAlign: 'center' }}>{`Reserved`}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderWidth: 2, width: 30, height: 30, borderRadius: 15, borderColor: '#c03e45', backgroundColor: '#c03e45' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#4d545e', textAlign: 'center' }}>{`Selected`}</Text>
                        </View>
                    </View>
                </>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1000).duration(500)} style={{flex:1}}>
                    <View style={{ flex: 1, backgroundColor: '#FFF', width: width, alignSelf: 'center', marginTop: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20, padding: 10 }}>

                        <ScrollView horizontal style={{ marginTop: 20 }}>
                            <TouchableOpacity style={{ backgroundColor: '#603040', width: 90, height: 90, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', textAlign: 'center' }}>{`18:30\n6 JAN`}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: '#edb7c0', width: 90, height: 90, borderRadius: 20, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#c03e45', textAlign: 'center' }}>{`21:00\n6 JAN`}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: '#edb7c0', width: 90, height: 90, borderRadius: 20, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#c03e45', textAlign: 'center' }}>{`18:30\n7 JAN`}</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={{ backgroundColor: '#edb7c0', width: 90, height: 90, borderRadius: 20, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#c03e45', textAlign: 'center' }}>{`21:00\n7 JAN`}</Text>
                            </TouchableOpacity>

                        </ScrollView>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#4d545e' }}>{`$${(count * 9.90).toFixed(2)}`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#4d545e' }}>{`TotalPrice`}</Text>

                            </View>

                            <TouchableOpacity style={{ backgroundColor: '#c03e45', paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF' }}>{`Confirm Reservation`}</Text>
                            </TouchableOpacity>

                        </View>




                    </View>
            </Animated.View>

        </View >


    );
}

export { ConfirmScreen };
