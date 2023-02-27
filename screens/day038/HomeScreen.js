import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Calendar } from 'react-native-calendars';


const HomeScreen = ({ navigation }) => {

    const [selectedDay, setSelectedDay] = React.useState('2022-12-01');


    const DATA = {
        '2022-12-16': [{
            id: 1,
            isReminder: true,
            time: '12:00 PM',
            title: 'LUNCH WITH PAUL',
            location: 'Luigis Italian Restaurant'
        },
        {
            id: 2,
            isReminder: true,
            time: '03:00 PM',
            title: '1-1 MEETING',
            location: 'Conference Room A'
        }],
        '2022-12-18': [{
            id: 3,
            isReminder: false,
            time: '09:00 AM',
            title: 'OFFICE DAY',
            location: 'Meta'
        },
        {
            id: 4,
            isReminder: true,
            time: '11:00 AM',
            title: 'PLANNING',
            location: 'Jupiter Meeting Room'
        },
        {
            id: 5,
            isReminder: true,
            time: '03:00 PM',
            title: 'IT SECURITY TRANING',
            location: 'Zoom Conference'
        },
        {
            id: 6,
            isReminder: false,
            time: '05:00 PM',
            title: 'GYM',
            location: 'Bob Gym'
        },
        {
            id: 7,
            isReminder: false,
            time: '07:00 PM',
            title: 'FAMILY DINNER',
            location: 'Grandpa'
        }],
        '2022-12-31': [{
            id: 8,
            isReminder: true,
            time: '08:00 PM',
            title: 'NEW YEAR PARTY',
            location: 'Jack Pool Club'
        }]
    }


    console.log(DATA[selectedDay])

    return (

        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <Calendar
                initialDate={selectedDay}
                onDayPress={day => {
                    setSelectedDay(day.dateString);
                }}
                // Collection of dates that have to be marked. Default = {}
                markedDates={{
                    '2022-12-16': { marked: true },
                    '2022-12-18': { marked: true },
                    '2022-12-31': { marked: true }
                }}

            />
            <View style={{ flex: 1, backgroundColor: '#f0efeb', padding: 20 }}>

                <View style={{ backgroundColor: '#00adf5', padding: 12, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 20 }}>{selectedDay}</Text>
                </View>

                {DATA[selectedDay] === undefined &&
                    <Animated.View key={-1} style={{ backgroundColor: '#FFF', flexDirection: 'row', padding: 12, marginTop: 8, height: 80, justifyContent: 'center', alignItems: 'center' }} entering={FadeInRight.delay(300).duration(300)}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#c4c4c0', fontSize: 20 }}>{'Not Planned Event'}</Text>

                    </Animated.View>
                }
                <FlatList
                    data={DATA[selectedDay]}
                    renderItem={({ item, index }) => (
                        <Animated.View key={item.id} style={{ backgroundColor: '#FFF', flexDirection: 'row', padding: 12, marginTop: 8, height: 80 }} entering={FadeInRight.delay((index + 1) * 300).duration(300)}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#c4c4c0" style={{ position: 'absolute', right: 5, top: 5 }} />
                            <View style={{ alignItems: 'center', flex: 0.25, marginRight: 10 }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#2d4150', fontSize: 16 }}>{item.time}</Text>
                                {item.isReminder && <MaterialCommunityIcons name="bell" size={24} color="#00adf5" />}
                            </View>

                            <View style={{ flex: 0.75, paddingLeft: 10, borderLeftWidth: 2, borderLeftColor: '#c4c4c0' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#2d4150', fontSize: 20 }}>{item.title}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#2d4150', fontSize: 14, marginTop: -10 }}>{item.location}</Text>
                            </View>
                        </Animated.View>
                    )}
                    keyExtractor={item => item.id}
                />



            </View>
        </View>

    );
}

export { HomeScreen };
