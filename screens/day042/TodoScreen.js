import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';

const TodoScreen = ({ navigation }) => {

    const [isChecked, setIsChecked] = React.useState(false);

    return (

        <View style={{ flex: 1, padding: 12, backgroundColor: '#fdfdfd' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: '#869ef3', borderLeftWidth: 10, marginBottom: 20 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#393745', fontSize: 25, marginLeft: 20 }}>{`Finance`}</Text>
                <FontAwesome5 name="pen" size={20} color="rgba(57,55,69, 0.5)" />
            </View>

            <Animated.View entering={FadeInRight.delay(300).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <FontAwesome5 name="square" size={30} color="#869ef3" />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#393745', fontSize: 20, marginLeft: 20, marginTop: 3 }}>{`Pay bills`}</Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 0.2, borderColor: '#869ef3', paddingBottom: 10, marginBottom: 10 }} />
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(600).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <FontAwesome5 name="square" size={30} color="#869ef3" />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#393745', fontSize: 20, marginLeft: 20, marginTop: 3 }}>{`Deposit Money`}</Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 0.2, borderColor: '#869ef3', paddingBottom: 10, marginBottom: 10 }} />
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(900).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <FontAwesome5 name="square" size={30} color="#869ef3" />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#393745', fontSize: 20, marginLeft: 20, marginTop: 3 }}>{`Tax calculation`}</Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 0.2, borderColor: '#869ef3', paddingBottom: 10, marginBottom: 10 }} />
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(1200).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', opacity: isChecked ? 0.2 : 1 }} onPress={() => setIsChecked(true)}>
                    <FontAwesome5 name={isChecked ? 'check-square' : 'square'} size={30} color="#869ef3" />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#393745', fontSize: 20, marginLeft: 20, marginTop: 3 }}>{`Invest Stocks`}</Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 0.2, borderColor: '#869ef3', paddingBottom: 10, marginBottom: 10 }} />
            </Animated.View>



        </View>

    );
}

export { TodoScreen };
