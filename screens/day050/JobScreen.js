import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const JobScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')


    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ backgroundColor: '#ffbac1' }}>
                    <AntDesign name="left" size={24} color="black" style={{ margin: 20 }} />
                    <Image source={require('./airbnb_2.png')} style={{ width: 100, height: 100, alignSelf: 'center' }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 30 }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>Type</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16 }}>Full-time</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>Level</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16 }}>Associate</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>Location</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16 }}>Remote</Text>
                        </View>
                    </View>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>Airbnb</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }}>Backend Developer</Text>

                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, marginTop: 20 }}>Description</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }}>{`Based in San Francisco, California, operates an online marketplace focused on short-term homestays and experiences. The company acts as a broker and charges a commission from each booking. `}</Text>

                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, marginTop: 20 }}>Qualifications</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }}>• BS, MS or Ph.D. in computer science or related field, or equivalent work experience</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }}>•8+ years’ experience designing, building, and operating Data Security and Governance solutions such as data authentication, authorization, data lineage management etc.</Text>
                </View>
            </Animated.View>
        </View>


    );
}

export { JobScreen };
