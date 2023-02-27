import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FlipInYRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const [index, setIndex] = React.useState(0);

    const DATA = [{
        id: 1,
        name: 'Kaiden Yoder',
        title: 'Software AQ Engineer',
        text: 'In the past, tools were an obstacle or burdensome. Now, they enable us to further our cause, methodologies, and disciplines.',
        image: require('./image-1.jpg')
    },
    {
        id: 2,
        name: 'Vanessa Oneill',
        title: 'Product Manager',
        text: 'IT team improved its time to resolution by 66%, reduced call-waiting time by 50%, and increased customer satisfaction by 140%.',
        image: require('./image-2.jpg')
    },
    {
        id: 3,
        name: 'Barry Bennett',
        title: 'Software Architect',
        text: 'When you have lines of business across the world, it is a beast to organize our work. Having one system of record that works across all of those is invaluable.',
        image: require('./image-3.jpg')
    },
    {
        id: 4,
        name: 'Evangeline Prince',
        title: 'UI/UX Lead',
        text: 'Nothing beats chatting one-on-one! Our Community and live events are the perfect opportunity to connect with real customers.',
        image: require('./image-4.jpg')
    }]

    return (

        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 12 }}>
            <Text style={{ fontFamily: 'Poppins-Medium', color: '#8e44ad', fontSize: 30, alignSelf: 'center', marginVertical: 60 }}>Testimonials</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setIndex(current => current - 1)} >
                    <FontAwesome name="chevron-left" size={24} color="#e6e6e6" />
                </TouchableOpacity>
                <Animated.View
                    entering={FlipInYRight.delay(300).duration(1000)}
                    key={DATA[index].id}
                    style={{
                        width: 320,
                        height: 400,
                        backgroundColor: '#f7f7f7', alignItems: 'center', borderRadius: 20, padding: 20, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 20, textAlign: 'center' }}>{DATA[index].text}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 10 }}>
                        <FontAwesome name="star" size={24} color="#f1c40f" />
                        <FontAwesome name="star" size={24} color="#f1c40f" />
                        <FontAwesome name="star" size={24} color="#f1c40f" />
                        <FontAwesome name="star" size={24} color="#f1c40f" />
                        <FontAwesome name="star" size={24} color="#f1c40f" />
                    </View>
                    <Image source={DATA[index].image} style={{ width: 80, height: 80, borderRadius: 40 }} />
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20, textAlign: 'center' }}>{DATA[index].name}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18, textAlign: 'center' }}>{DATA[index].title}</Text>
                    </View>
                </Animated.View>
                <TouchableOpacity onPress={() => setIndex(current => current + 1)} >
                    <FontAwesome name="chevron-right" size={24} color="#e6e6e6" />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                <View style={{ width: 20, height: 20, backgroundColor: index === 0 ? '#8e44ad' : '#e6e6e6', borderRadius: 10 }} />
                <View style={{ width: 20, height: 20, backgroundColor: index === 1 ? '#8e44ad' : '#e6e6e6', borderRadius: 10, marginLeft: 5 }} />
                <View style={{ width: 20, height: 20, backgroundColor: index === 2 ? '#8e44ad' : '#e6e6e6', borderRadius: 10, marginLeft: 5 }} />
                <View style={{ width: 20, height: 20, backgroundColor: index === 3 ? '#8e44ad' : '#e6e6e6', borderRadius: 10, marginLeft: 5 }} />

            </View>
        </View>

    );
}

export { HomeScreen };
