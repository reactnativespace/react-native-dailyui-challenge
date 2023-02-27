import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {


    const { width, height } = Dimensions.get('window')

    const [index, setIndex] = React.useState(0)
    const [page, setPage] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 12 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>

                <TouchableOpacity style={{ width: 64, height: 70, backgroundColor: index === 0 ? '#0021dc' : '#f8fafb', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => { setIndex(0); setPage(0) }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: index === 0 ? '#FFF' : '#3b3b3b', fontSize: 18, textAlign: 'center' }}>{`5\nMon`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 64, height: 70, backgroundColor: index === 1 ? '#0021dc' : '#f8fafb', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => { setIndex(1); setPage(1) }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: index === 1 ? '#FFF' : '#3b3b3b', fontSize: 18, textAlign: 'center' }}>{`6\nTue`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 64, height: 70, backgroundColor: index === 2 ? '#0021dc' : '#f8fafb', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => setIndex(2)}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: index === 2 ? '#FFF' : '#3b3b3b', fontSize: 18, textAlign: 'center' }}>{`7\nWed`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 64, height: 70, backgroundColor: index === 3 ? '#0021dc' : '#f8fafb', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => setIndex(3)}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: index === 3 ? '#FFF' : '#3b3b3b', fontSize: 18, textAlign: 'center' }}>{`8\nThu`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 64, height: 70, backgroundColor: index === 4 ? '#0021dc' : '#f8fafb', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => setIndex(4)}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: index === 4 ? '#FFF' : '#3b3b3b', fontSize: 18, textAlign: 'center' }}>{`9\nFri`}</Text>
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 18 }}>{`Daily Routine`}</Text>
                <View style={{ paddingHorizontal: 8, paddingVertical: 2, backgroundColor: '#f8fafb', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 8 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#0021dc', fontSize: 18 }}>{page === 0 ? '2' : '3'}</Text>
                </View>
            </View>

            {page === 0 &&
                <>
                    <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                            <TouchableOpacity style={{ width: 175, height: 170, backgroundColor: '#f8fafb', borderRadius: 10, padding: 12 }}>
                                <View style={{ width: 30, height: 30, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesome name="heartbeat" size={24} color="#c0392b" />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#c0392b', fontSize: 16, marginTop: 10 }}>{`Gym`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 12, marginTop: -5 }}>{`Due on 12 Jun 2022`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 14, marginTop: 10 }}>{`16 upcoming`}</Text>
                                <View style={{ flexDirection: 'row', position: 'absolute', top: 10, right: 10 }}>
                                    <MaterialCommunityIcons name="check" size={20} color="#c0392b" />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                            <TouchableOpacity style={{ width: 175, height: 170, backgroundColor: '#f8fafb', borderRadius: 10, padding: 12 }}>
                                <View style={{ width: 30, height: 30, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesome name="book" size={24} color="#8e44ad" />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#8e44ad', fontSize: 16, marginTop: 10 }}>{`Read a book`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 12, marginTop: -5 }}>{`Due on 13 Jun 2022`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 14, marginTop: 10 }}>{`8 upcoming`}</Text>
                                <View style={{ flexDirection: 'row', position: 'absolute', top: 10, right: 10 }}>
                                    <MaterialCommunityIcons name="check" size={20} color="#8e44ad" />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </>
            }

            {page === 1 &&
                <>
                    <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                            <TouchableOpacity style={{ width: 175, height: 170, backgroundColor: '#f8fafb', borderRadius: 10, padding: 12 }}>
                                <View style={{ width: 30, height: 30, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesome name="heartbeat" size={24} color="#c0392b" />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#c0392b', fontSize: 16, marginTop: 10 }}>{`Gym`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 12, marginTop: -5 }}>{`Due on 12 Jun 2022`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 14, marginTop: 10 }}>{`15 upcoming`}</Text>
                                <View style={{ flexDirection: 'row', position: 'absolute', top: 10, right: 10 }}>
                                    <MaterialCommunityIcons name="check" size={20} color="#c0392b" />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                            <TouchableOpacity style={{ width: 175, height: 170, backgroundColor: '#f8fafb', borderRadius: 10, padding: 12 }}>
                                <View style={{ width: 30, height: 30, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesome name="book" size={24} color="#8e44ad" />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#8e44ad', fontSize: 16, marginTop: 10 }}>{`Read a book`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 12, marginTop: -5 }}>{`Due on 13 Jun 2022`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 14, marginTop: 10 }}>{`7 upcoming`}</Text>
                                <View style={{ flexDirection: 'row', position: 'absolute', top: 10, right: 10 }}>
                                    <MaterialCommunityIcons name="check" size={20} color="#8e44ad" />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>

                    <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                            <TouchableOpacity style={{ width: 175, height: 170, backgroundColor: '#f8fafb', borderRadius: 10, padding: 12 }} onPress={()=> setIsVisible(true)}>
                                <View style={{ width: 30, height: 30, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                    <FontAwesome name="shopping-basket" size={24} color="#27ae60" />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#27ae60', fontSize: 16, marginTop: 10 }}>{`Shopping`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 12, marginTop: -5 }}>{`Due on 20 Jun 2022`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#3b3b3b', fontSize: 14, marginTop: 10 }}>{`2 upcoming`}</Text>
                                {isVisible && <View style={{ flexDirection: 'row', position: 'absolute', top: 10, right: 10 }}>
                                    <MaterialCommunityIcons name="check" size={20} color="#27ae60" />
                                </View>}
                            </TouchableOpacity>
                        </Animated.View>

                    </View>
                </>
            }


            <Modal
                style={{ flex: 1 }}
                visible={isVisible}
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
                animationType={'slide'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}>
                    <View style={{
                        height: 425,
                        backgroundColor: '#0021dc',
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                        alignItems: 'center'
                    }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('./rocket.png')} style={{ width: 100, height: 100, marginTop: 50 }} />
                            <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 40, marginTop: 10 }}>{`All done!`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#FFF', fontSize: 20, marginTop: 10, textAlign: 'center' }}>{`You have completed all your\ntasks for today. Great job!💪`}</Text>
                            <TouchableOpacity style={{ backgroundColor: '#001bb3', flex: 1, width: 425, alignItems: 'center', justifyContent: 'center', marginTop: 30 }} onPress={() => setIsVisible(false)}>
                                <Text style={{ fontFamily: 'Poppins-Bold', color: '#f8e06b', fontSize: 20, marginTop: 10 }}>{`Ok, thanks!`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

export { HomeScreen };
