import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const [selectedStorage, setSelectedStorage] = React.useState(0);
    const [selectedColor, setSelectedColor] = React.useState(0);

    const COLORS = [{ image: require('./iphone-black.png') }, { image: require('./iphone-blue.png') }, { image: require('./iphone-purple.png') }, { image: require('./iphone-red.png') }]


    return (
        <View style={{ flex: 1, backgroundColor: '#bdc3c7' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: 8, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="left" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.25)', padding: 8, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="shoppingcart" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 12, marginVertical: 8 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 35, }}>iPhone 14</Text>
                <Image source={COLORS[selectedColor].image} style={{ width: 200, height: 265, resizeMode: 'center', alignSelf: 'center' }} />

            </View>


            <View style={{ flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20 }}>Storage</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
                    <TouchableOpacity style={{ backgroundColor: '#bdc3c7', justifyContent: 'center', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, borderWidth: selectedStorage === 0 ? 3 : 0, borderColor: '#0071e3' }}
                        onPress={() => setSelectedStorage(0)}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 16 }}>128 GB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#bdc3c7', justifyContent: 'center', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, borderWidth: selectedStorage === 1 ? 3 : 0, borderColor: '#0071e3' }}
                        onPress={() => setSelectedStorage(1)}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 16 }}>256 GB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#bdc3c7', justifyContent: 'center', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, borderWidth: selectedStorage === 2 ? 3 : 0, borderColor: '#0071e3' }}
                        onPress={() => setSelectedStorage(2)}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 16 }}>512 GB</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20, marginTop: 20 }}>Color</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
                    <TouchableOpacity style={{ backgroundColor: '#30373e', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: 40, height: 40, borderWidth: selectedColor === 0 ? 3 : 0, borderColor: '#0071e3' }}
                        onPress={() => setSelectedColor(0)} />
                    <TouchableOpacity style={{ backgroundColor: '#a8bbcc', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: 40, height: 40, borderWidth: selectedColor === 1 ? 3 : 0, borderColor: '#0071e3' }}
                        onPress={() => setSelectedColor(1)} />
                    <TouchableOpacity style={{ backgroundColor: '#e5ddea', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: 40, height: 40, borderWidth: selectedColor === 2 ? 3 : 0, borderColor: '#0071e3' }}
                        onPress={() => setSelectedColor(2)} />
                    <TouchableOpacity style={{ backgroundColor: '#fc1b39', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: 40, height: 40, borderWidth: selectedColor === 3 ? 3 : 0, borderColor: '#0071e3' }}
                        onPress={() => setSelectedColor(3)} />

                </View>

                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20, marginTop: 20 }}>Price</Text>

                <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 20, }}>{selectedStorage === 0 ? '$799' : selectedStorage === 1 ? '$899' : '$1099'}</Text>

                <TouchableOpacity style={{ backgroundColor: '#0071e3', padding: 12, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>


        </View>

    );
}

export { HomeScreen };
