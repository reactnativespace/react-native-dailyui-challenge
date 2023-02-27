import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FadeIn from '../../components/FadeIn';

const HomeScreen = ({ navigation }) => {

    const navigateToSingUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#e1e4ee', alignItems: 'center' }}>

            <FadeIn delay={300}>
                <Image source={require('../../assets/image-001.png')} style={{ width: 380, height: 400, backgroundColor: '#d99bf1', borderRadius: 25 }} resizeMode='contain' />
            </FadeIn>

            <FadeIn delay={500}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 25, color: '#353045', textAlign: 'center', marginTop: 40 }}>{`Discover Your\nDream Job Here`}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#353045', textAlign: 'center', marginTop: 20 }}>{`Explore all the most exiting jobs roles \nbased on your interest and study major`}</Text>
            </FadeIn>

            <FadeIn delay={800}>
                <View style={{ flexDirection: 'row', marginTop: 60, backgroundColor: '#e9ecf7', borderRadius: 10, borderWidth: 1, borderColor: '#FFF' }}>
                    <TouchableOpacity
                        style={{ paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#FFF', borderRadius: 10 }}
                        onPress={() => navigateToSingUp()}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#353045' }}>{`Sign Up`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#e9ecf7', borderColor: '#FFF', borderBottomEndRadius: 10, borderTopRightRadius: 10 }}
                        onPress={() => navigateToSingUp()}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#353045' }}>{`Sign In`}</Text>
                    </TouchableOpacity>
                </View>
            </FadeIn>
        </View>
    );
}

export { HomeScreen };