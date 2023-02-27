import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    const [data, setData] = React.useState([{
        id: 1,
        image: require('./1.jpg'),
        name: 'Arnold Walton',
        description: 'Today, 11:00'
    },
    {
        id: 2,
        image: require('./2.jpg'),
        name: 'Justine Dolton',
        description: 'Today, 12:30'
    },
    {
        id: 3,
        image: require('./3.jpg'),
        name: 'Eden Graves',
        description: 'Today, 14:00'
    },
    {
        id: 4,
        image: require('./4.jpg'),
        name: 'Jennifer Henry',
        description: 'Today, 16:00'
    },
    {
        id: 5,
        image: require('./5.jpg'),
        name: 'Scott Hudson',
        description: 'Tomorrow, 08:00'
    },
    {
        id: 6,
        image: require('./6.jpg'),
        name: 'Jeffrey Neal',
        description: 'Tomorrow, 09:00'
    },
    {
        id: 7,
        image: require('./7.jpg'),
        name: 'Polly Woolery',
        description: 'Tomorrow, 11:30'
    },
    {
        id: 8,
        image: require('./8.jpg'),
        name: 'Margaret Buckley',
        description: 'Tomorrow, 13:00'
    },
    {
        id: 9,
        image: require('./9.jpg'),
        name: 'Kyla Lipsey',
        description: 'Tomorrow, 14:00'
    },
    {
        id: 10,
        image: require('./10.jpg'),
        name: 'Hadden Rehbein',
        description: 'Tomorrow, 15:00'
    },
    {
        id: 11,
        image: require('./11.jpg'),
        name: 'Carmen Fitzgerald',
        description: 'Tomorrow, 16:00'
    }])

    const onRemove = (id) => {

        setData((items) => {
            return items.filter(item => item.id !== id)
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#0c86ff' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                <Feather name="menu" size={25} color="#FFF" />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', marginLeft: 10, marginBottom: -4 }}>Menu</Text>
            </View>

            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 24, color: '#FFF', }}>Appointment Requests</Text>

                <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 10, marginTop: 10 }}>

                    <View style={{ flexDirection: 'row' }}>


                        <TouchableOpacity style={{
                            flex: 1,
                            backgroundColor: '#FFF',
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            padding: 10,
                            justifyContent: 'center', alignItems: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0c86ff', }}>Doctors</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            flex: 1,
                            backgroundColor: '#edf6ff',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            padding: 10,
                            justifyContent: 'center', alignItems: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0c86ff', }}>Patients</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginVertical: 20, backgroundColor: '#edf6ff', padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#9fafba', }}>Search doctor or medical department</Text>
                    </View>

                    <ScrollView style={{ height: 450, flexGrow: 0 }} showsVerticalScrollIndicator={false}>
                        {data?.map((item, index) =>
                        (<Animated.View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: index > 0 ? 20 : 0 }}
                            entering={FadeInRight.delay(300 * index).duration(300)}
                            exiting={FadeOutRight.duration(300)}
                            layout={Layout.delay(100)}>
                            <View style={{ flex: 0.2, }}>
                                <Image source={item.image} style={{ height: 50, width: 50, backgroundColor: 'red', borderRadius: 10 }} />
                            </View>

                            <View style={{ flex: 0.5 }}>
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 15, color: '#4f5a62', }}>{item.name}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#9fafba', }}>{item.description}</Text>
                            </View>

                            <View style={{ flex: 0.1, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ backgroundColor: '#bcdcfc', width: 40, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }} onPress={() => onRemove(item.id)}>
                                    <Feather name="check" size={24} color="#0c86ff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#ffd1d0', width: 40, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 5 }} onPress={() => onRemove(item.id)}>
                                    <Feather name="x" size={24} color="#ff5551" />
                                </TouchableOpacity>
                            </View>
                        </Animated.View>))}


                    </ScrollView>


                </View>
            </View>

        </View>
    );
}

export { HomeScreen };
