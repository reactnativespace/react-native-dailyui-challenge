import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {

    const [index, setIndex] = React.useState(-1);

    const DATA = [{
        id: 0,
        title: 'Brooklyn Bridge',
        description: 'The Brooklyn Bridge is a hybrid\ncable-stayed/suspension bridge in\nNew York City',
        image: require('./brooklyn.jpg'),
        star: 4
    },
    {
        id: 1,
        title: 'Empire State Building',
        description: 'The building was designed by\nShreve, Lamb & Harmon and built\nfrom 1930 to 1931.',
        image: require('./empire.jpg'),
        star: 5
    },
    {
        id: 2,
        title: 'Times Square NYC',
        description: 'Brightly lit at all hours by numerous\nbillboards and advertisements as\nwell as businesses offering 24/7',
        image: require('./times.jpg'),
        star: 3
    },
    {
        id: 3,
        title: 'Rockefeller Center',
        description: 'Large complex consisting of 19\ncommercial buildings covering 22\nacres between 48th/51st Street',
        image: require('./rock.jpg'),
        star: 4
    }]

    const { width, height } = Dimensions.get('window')
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <Image source={require('./ny-map.jpg')} style={{ position: 'absolute', width: width, height: height, resizeMode: 'cover' }} />

            <View style={{ backgroundColor: '#FFF', padding: 12, borderRadius: 10, marginTop: 20, width: width * 0.8, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextInput value='New York City, NY' style={{ flex: 1, fontFamily: 'Poppins-Medium', color: '#3d4fb8' }} />
                <FontAwesome5 name="times" size={24} color="#3d4fb8" />
            </View>


            <View style={{ position: 'absolute', top: 500, left: 50, backgroundColor: '#3d4fb8', width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                <FontAwesome5 name="location-arrow" size={10} color="#FFF" />
            </View>



            <TouchableOpacity style={{ position: 'absolute', top: 130, left: 280, width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(61, 79, 184, 0.3)', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setIndex(3)}>
                <View style={{ width: 15, height: 15, backgroundColor: '#3d4fb8', borderRadius: 20 }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ position: 'absolute', top: 165, left: 215, width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(61, 79, 184, 0.3)', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setIndex(2)}>
                <View style={{ width: 15, height: 15, backgroundColor: '#3d4fb8', borderRadius: 20 }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ position: 'absolute', top: 236, left: 220, width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(61, 79, 184, 0.3)', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setIndex(1)}>
                <View style={{ width: 15, height: 15, backgroundColor: '#3d4fb8', borderRadius: 20 }} />
            </TouchableOpacity>


            <TouchableOpacity style={{ position: 'absolute', top: 650, left: 105, width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(61, 79, 184, 0.3)', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setIndex(0)}>
                <View style={{ width: 15, height: 15, backgroundColor: '#3d4fb8', borderRadius: 20 }} />
            </TouchableOpacity>

            {index > -1 && <View style={{ backgroundColor: '#FFF', borderRadius: 10, padding: 12, flexDirection: 'row', position: 'absolute', bottom: 20, width: 300, left: width / 2 - 150 }}>
                <Image source={DATA[index].image} style={{ width: 100, height: 100, borderRadius: 10 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#3d4fb8', fontSize: 15 }}>{DATA[index].title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -2 }}>
                        {[...new Array(DATA[index].star)].map(() => <AntDesign name="star" size={24} color="#fbb131" />)}
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#fbb131', fontSize: 20, marginBottom: -8, marginLeft: 5 }}>{DATA[index].star}</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#666666', fontSize: 10, textAlign: 'left' }}>{DATA[index].description}</Text>
                </View>
            </View>}



        </View>

    );
}

export { HomeScreen };
