import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const NoteScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                    <Image source={require('./7.jpg')} style={{ width: width, height: 200, position: 'absolute', resizeMode: 'stretch' }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 40, height: 40, backgroundColor: '#FFF', borderRadius: 20 }}>
                            <FontAwesome5 name="chevron-left" size={20} color="#000" />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 40, height: 40, backgroundColor: '#FFF', borderRadius: 20 }}>
                            <FontAwesome5 name="bookmark" size={20} color="#000" />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 40, height: 40, backgroundColor: '#FFF', borderRadius: 20, marginLeft: 10 }}>
                            <FontAwesome5 name="upload" size={20} color="#000" />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 40, height: 40, backgroundColor: '#FFF', borderRadius: 20, marginLeft: 10 }}>
                            <FontAwesome5 name="star" size={20} color="#000" />
                        </View>

                    </View>

                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <ScrollView style={{ padding: 12, marginTop: 80 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome5 name="clock" size={15} color="#1f2127" />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', marginLeft: 10 }}>{`25/03`}</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#1f2127' }}>{`Understanding Colors`}</Text>

                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, textAlign: 'justify' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Text>
                </ScrollView>
            </Animated.View>




        </View >

    );
}

export { NoteScreen };
