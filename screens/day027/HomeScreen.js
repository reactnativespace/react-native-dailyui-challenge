import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'


const HomeScreen = ({ navigation }) => {

    const [selected, setSelected] = React.useState([]);

    console.log(selected)

    const data = [
        { key: '1', value: '🐭 Mouse', disabled: true },
        { key: '2', value: '🐱 Cat' },
        { key: '3', value: '🐶 Dog' },
        { key: '4', value: '🦊 Fox' },
        { key: '5', value: '🐷 Pig', disabled: true },
        { key: '6', value: '🐻 Bear' },
        { key: '7', value: '🐴 Horse' },
        { key: '8', value: '🦁 Lion', disabled: true },
    ];


    const items = [{
        type: 'cat',
        id: 1,
        image: require('./cat-1.jpg'),
        title: 'Funny Cats Compilation',
        desctiption: 'Funny animal videos! Compilation\nnumber 250. Only the best!',
        views: '136K',
        duration: '12:20'
    },
    {
        type: 'cat',
        id: 2,
        image: require('./cat-2.png'),
        title: 'Funny Cats',
        desctiption: 'Video is compiled from all\nthe funny by cute cats of worldwide',
        views: '98K',
        duration: '18:12'
    },
    {
        type: 'cat',
        id: 3,
        image: require('./cat-3.jpg'),
        title: 'Compilation(Most Popular)',
        desctiption: 'Video is compiled from all\nthe funny by cute cats of worldwide ',
        views: '235K',
        duration: '8:30'
    },
    {
        type: 'dog',
        id: 4,
        image: require('./dog-1.jpg'),
        title: 'Cutest Golden Retriever ',
        desctiption: 'Can we hit 1000 LIKES on this video?',
        views: '125K',
        duration: '25:15'
    },
    {
        type: 'dog',
        id: 5,
        image: require('./dog-2.jpg'),
        title: 'Retriever Puppy ',
        desctiption: 'Golden Retriever Puppy\ntries to make friends with Cats',
        views: '655K',
        duration: '12:58'
    },
    {
        type: 'horse',
        id: 6,
        image: require('./horse-1.jpg'),
        title: 'Black horses',
        desctiption: 'I dedicate this to my own\nbeautiful black horse Corall',
        views: '1.2M',
        duration: '4:15'
    },
    {
        type: 'fox',
        id: 7,
        image: require('./fox-1.jpg'),
        title: 'Finnegan Fox chats',
        desctiption: '',
        views: '852K',
        duration: '5:14'
    },
    {
        type: 'fox',
        id: 8,
        image: require('./fox-2.jpg'),
        title: 'The foxes that say HEHEHE',
        desctiption: 'The fox looks funny',
        views: '544K',
        duration: '10:31'
    },
    {
        type: 'bear',
        id: 9,
        image: require('./bear-1.jpg'),
        title: 'TOP 30 BEST BEAR',
        desctiption: 'If you enjoyed, like the vids',
        views: '55K',
        duration: '11:14'
    },
    {
        type: 'bear',
        id: 10,
        image: require('./bear-2.jpg'),
        title: 'Bears Catching Salmon',
        desctiption: 'It is the time of year when the\nsalmon',
        views: '3.2M',
        duration: '5:09'
    }]

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 12 }}>

            <MultipleSelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                //onSelect={() => alert(selected)}
                label="Animals"
                placeholder='Search Animals'
                fontFamily='Poppins-Medium'
            />


            <FlatList
                data={items.filter((item) => {
                    if (selected.length === 0) return true;
                    let retVal = false;
                    for (let i = 0; i < selected?.length; i++) {
                        retVal = selected[i].toLowerCase().includes(item.type)
                        if (retVal) break;
                    }
                    return retVal;
                })}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <View>
                            <View style={{ position: 'absolute', bottom: 5, right: 5, zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', paddingVertical: 2, paddingHorizontal: 8, borderRadius: 10 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 10, }}>{item.duration}</Text>
                            </View>
                            <Image source={item.image} style={{ width: 140, height: 90, borderRadius: 15, resizeMode: 'cover' }} />
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#2c2c2c', fontSize: 16 }}>{item.title}</Text>
                            <Text style={{ flex: 1, fontFamily: 'Poppins-Regular', color: '#838383', fontSize: 12, textAlign: 'left' }}>{item.desctiption}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#838383', fontSize: 12 }}>{item.views + ' Views'}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />


        </View>

    );
}

export { HomeScreen };
