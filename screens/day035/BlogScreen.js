import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FadeIn from '../../components/FadeIn';

const BlogScreen = ({ navigation }) => {

    return (

        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 12 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#263238', fontSize: 30 }}>{`How I Made $150,000 in My First Year as a Freelancer`}</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 20 }}>{`10 things I learned about running a successful content business.`}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('./bruce.png')} style={{ width: 50, height: 50, borderRadius: 25, resizeMode: 'cover' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 18, marginLeft: 10 }}>{`Bruce Wayne`}</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#263238', fontSize: 18 }}>{`12/13/2022`}</Text>
                </View>
                <Image source={require('./money.jpg')} style={{ width: 360, height: 300, borderRadius: 20, resizeMode: 'cover', alignSelf: 'center', marginVertical: 20 }} />

                <Text style={{ fontFamily: 'Poppins-Regular', color: '#263238', fontSize: 18, textAlign:'justify' }}>{`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?`}</Text>
            </ScrollView>

        </View>

    );
}

export { BlogScreen };
