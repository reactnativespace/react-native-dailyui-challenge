import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const FavScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#1a1b1f', padding: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name="angle-left" size={24} color="#FFF" />
                <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>Favorite Songs</Text>
            </View>

            <Animated.View entering={FadeInRight.delay(300).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 0.5 }}>
                    <Image source={require('./imgs/archive.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>Again</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12, marginTop: -5 }}>Archive</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12 }}>16:30</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(600).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 0.5 }}>
                    <Image source={require('./imgs/pieces.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>Pieces</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12, marginTop: -5 }}>AVAION</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12 }}>3:45</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(900).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 0.5 }}>
                    <Image source={require('./imgs/hymen.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>Hymn for the Weekend</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12, marginTop: -5 }}>Coldplay</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12 }}>3:32</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(1200).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 0.5 }}>
                    <Image source={require('./imgs/goodlife.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>Good Life</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12, marginTop: -5 }}>ZHU</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12 }}>4:30</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(1500).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 0.5 }}>
                    <Image source={require('./imgs/kaleo.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>I Cant Go on Without..</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12, marginTop: -5 }}>KALEO</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12 }}>6:10</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(1800).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 0.5 }}>
                    <Image source={require('./imgs/tame.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>New Person, Same..</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12, marginTop: -5 }}>Tame Impala</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12 }}>6:00</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(2000).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderColor: 'rgba(255,255,255,0.8)', borderBottomWidth: 0.5 }}>
                    <Image source={require('./imgs/disturbed.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 4, marginLeft: 12 }}>The Sound of Silence</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12, marginTop: -5 }}>Disturbed</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#9d9d9d', marginTop: 4, marginLeft: 12 }}>4:19</Text>
                </TouchableOpacity>
            </Animated.View>

        </View>

    );
}

export { FavScreen };