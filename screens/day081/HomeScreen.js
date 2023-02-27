import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {

    const text = 'You all guys asking for the source code, yes I know😬😬. I will share all the source code when hit day 100/100 which mean last 19 post.💛🚀';
    const { width, height } = Dimensions.get('window');

    const [isVisible, setIsVisible] = React.useState(false);
    const [input, setInput] = React.useState('');

    React.useEffect(() => {

        const delay = setTimeout(() => {
            let index = 0;
            setInterval(() => {
                if (index <= text.length - 1) {
                    index = index + 1;
                    setInput(text.substring(0, index));
                }
            }, 40)
        }, 5000)

    }, []);

    const [data, setData] = React.useState([
        {
            id: 1,
            avatar: require('./1.jpg'),
            img: null,
            name: 'Sally Massy',
            date: 'Today at 6:18 PM',
            text: 'Tech founder and philanthropist @BillGates spoke in conversation with Executive Director @mfullilove at 31 Bligh Street. They discussed global challenges in climate, environment, pandemic preparedness and public health. Watch or listen: ',
            like: 125,
            comment: 8
        },
        {
            id: 2,
            avatar: require('./6.jpg'),
            img: null,
            name: 'Donald J. Trump',
            date: 'Today at 4:02 PM',
            text: 'The 75,000,000 great American Patriots who voted for me, AMERICA FIRST, and MAKE AMERICA GREAT AGAIN, will have a GIANT VOICE long into the future. They will not be disrespected or treated unfairly in any way, shape or form!!!',
            like: 14,
            comment: 3
        },
        {
            id: 3,
            avatar: require('./5.jpg'),
            img: null,
            name: 'Elon Musk',
            date: 'Today at 3:30 PM',
            text: 'I will resign as CEO as soon as I find someone foolish enough to take the job! After that, I will just run the software & servers teams.',
            like: '2K',
            comment: 899
        },
    ]);

    const onSubmit = () => {
        setIsVisible(false);
        setData([{
            id: 0,
            avatar: require('./reactnativespace_logo.png'),
            img: null,
            name: 'ReactNativeSpace🚀',
            date: '1 min ago',
            text: text,
            like: 0,
            comment: 0
        }, ...data])
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#212121' }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <MaterialCommunityIcons name="arrow-left" size={30} color="#686869" />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginTop: 5, color: '#686869' }}>TIMELINE</Text>
                <MaterialCommunityIcons name="dots-horizontal" size={30} color="#686869" />
            </View>

            <ScrollView style={{ flex: 1, padding: 20 }} showsVerticalScrollIndicator={false}>

                {data.map((item) => (

                    <Animated.View key={item.id} style={{ backgroundColor: '#292929', padding: 20, borderRadius: 20, marginBottom: 20 }} layout={Layout} entering={FadeInRight.delay(300).duration(300)}>

                        <View style={{ flexDirection: 'row' }}>

                            <Image source={item.avatar} style={{ width: 50, height: 50, backgroundColor: '#a93246', borderRadius: 25, marginRight: 20 }} />
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#d9d9d9' }}>{item.name}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#686869', marginTop: -5 }}>{item.date}</Text>
                            </View>

                        </View>

                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#d9d9d9', marginTop: 10 }}>
                            {item.text}
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name="cards-heart" size={25} color="#686869" />
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#686869', marginTop: 2, marginLeft: 5 }}>{item.like}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                    <MaterialCommunityIcons name="comment" size={25} color="#686869" />
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#686869', marginTop: 2, marginLeft: 5 }}>{item.comment}</Text>
                                </View>
                            </View>

                            <MaterialCommunityIcons name="reply" size={25} color="#686869" />
                        </View>

                    </Animated.View>
                ))}



            </ScrollView>

            <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 30, position: 'absolute', bottom: 50, left: width / 2 - 30, backgroundColor: '#a93246', justifyContent: 'center', alignItems: 'center' }} onPress={() => setIsVisible(true)}>
                <MaterialCommunityIcons name="plus" size={50} color="#FFF" />
            </TouchableOpacity>

            <Modal
                style={{ flex: 1 }}
                visible={isVisible}
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
                animationType={'fade'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }}>
                    <View style={{
                        height: 300,
                        backgroundColor: '#212121',
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        paddingHorizontal: 25,
                        paddingVertical: 25,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 24,
                    }}>

                        <View style={{ flex: 1 }}>
                            <TextInput value={input} placeholder='What is on your mind?' placeholderTextColor={'#686869'} style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF' }} multiline={true}/>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: '#a93246', justifyContent: 'center', alignItems: 'center', padding: 12, borderRadius: 20 }} onPress={onSubmit}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', }}>POST</Text>

                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    );
}

export { HomeScreen };
