import React from 'react';
import { View, FlatList, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#15142b', padding: 12 }}>


            <Text style={{ fontFamily: 'Poppins-Medium', color: '#d9dbe9', fontSize: 20, padding: 8, borderBottomWidth: 1, borderColor: '#28273e', marginBottom: 12 }}>{'Explore'}</Text>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity style={{ height: 50, width: 100, flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 12, backgroundColor: '#3e3b55', borderRadius: 10 }}>
                        <MaterialIcons name="movie" size={24} color="#698bfc" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#698bfc', fontSize: 16, marginLeft: 8 }}>{'Movies'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 50, width: 100, flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 12, backgroundColor: '#3e3b55', borderRadius: 10, marginLeft: 8 }}>
                        <MaterialIcons name="family-restroom" size={24} color="#6e7191" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#6e7191', fontSize: 16, marginLeft: 8 }}>{'Kids'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 50, width: 100, flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 12, backgroundColor: '#3e3b55', borderRadius: 10, marginLeft: 8 }}>
                        <MaterialIcons name="sports-basketball" size={24} color="#6e7191" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#6e7191', fontSize: 16, marginLeft: 8 }}>{'Sport'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 50, width: 100, flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 12, backgroundColor: '#3e3b55', borderRadius: 10, marginLeft: 8 }}>
                        <MaterialIcons name="nature" size={24} color="#6e7191" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#6e7191', fontSize: 16, marginLeft: 8 }}>{'Nature'}</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>


            <Text style={{ fontFamily: 'Poppins-Medium', color: '#d9dbe9', fontSize: 20, paddingVertical: 20 }}>{'Highlights'}</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <Image source={require('./johnwick.jpg')} style={{ width: 300, height: 180, backgroundColor: 'red', resizeMode: 'cover', borderRadius: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>{'John Wick'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d9dbe9', fontSize: 14, marginTop: -5 }}>{'2014'}</Text>
                </View>

                <View style={{ marginLeft: 12 }}>
                    <Image source={require('./bladerunner.jpg')} style={{ width: 300, height: 180, backgroundColor: 'red', resizeMode: 'cover', borderRadius: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>{'Blade Runnder 2049'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d9dbe9', fontSize: 14, marginTop: -5 }}>{'2017'}</Text>
                </View>

                <View style={{ marginLeft: 12 }}>
                    <Image source={require('./ghostintheshell.jpg')} style={{ width: 300, height: 180, backgroundColor: 'red', resizeMode: 'stretch', borderRadius: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>{'Ghost in the Shell'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d9dbe9', fontSize: 14, marginTop: -5 }}>{'2017'}</Text>
                </View>
            </ScrollView>


            <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#d9dbe9', fontSize: 20 }}>{'Watch Later'}</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#688afb', fontSize: 12 }}>{'View All'}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <Image source={require('./the-godfather-ffcoppola.png')} style={{ width: 220, height: 150, backgroundColor: 'red', resizeMode: 'center', borderRadius: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>{'The Godfather'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d9dbe9', fontSize: 14, marginTop: -5 }}>{'1972'}</Text>
                </View>

                <View style={{ marginLeft: 12 }}>
                    <Image source={require('./p01z199k.jpg')} style={{ width: 220, height: 150, backgroundColor: 'red', resizeMode: 'cover', borderRadius: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>{'Pulp Fiction'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d9dbe9', fontSize: 14, marginTop: -5 }}>{'1994'}</Text>
                </View>

                <View style={{ marginLeft: 12 }}>
                    <Image source={require('./p07h2zhs.jpg')} style={{ width: 220, height: 150, backgroundColor: 'red', resizeMode: 'cover', borderRadius: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>{'Fight Club'}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d9dbe9', fontSize: 14, marginTop: -5 }}>{'1999'}</Text>
                </View>

            </ScrollView>



        </View>

    );
}

export { HomeScreen };
