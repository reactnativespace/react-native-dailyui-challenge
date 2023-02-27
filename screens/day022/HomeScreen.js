import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal, Dimensions, LogBox, TextInput } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {


    const DATA = [
        'food',
        'food chain',
        'food ideas',
        'food menu',
        'food movies',
        'food near me',
        'food photo',
        'food photographer',
        'food reels',
        'food recipes 🍜',
        'food reviews',
    ];

    const [search, setSearch] = React.useState('');

    console.log(search);

    return (
        <View style={{ flex: 1, backgroundColor: '#181818', justifyContent: 'center' }}>

            <View style={{ paddingHorizontal: 12 }}>
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder='Looking for..'
                    placeholderTextColor={'#fefefe'}
                    fontSize={32}
                    style={{ fontFamily: 'Poppins-Bold', color: '#fefefe', height: 80, borderBottomWidth: 1, borderColor: '#2a2a2a', paddingHorizontal: 20 }} />
                <View style={{ position: 'absolute', top: 80, left: 30 }}>
                    {DATA.map((item) => {
                        if (search.length > 1 && item.startsWith(search.toLocaleLowerCase()))
                            return <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular', color: '#fefefe', }}>{item}</Text>

                    })}

                </View>
            </View>



        </View>

    );
}

export { HomeScreen };
