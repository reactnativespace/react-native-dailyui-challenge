import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    LineChart
} from "react-native-chart-kit";

const HomeScreen = ({ navigation }) => {



    const { width, height } = Dimensions.get('window')

    const chartConfig = {
        backgroundGradientFrom: "#FFF",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional,
        propsForLabels: {
            fontSize: 10,
            fontFamily: 'Poppins-Regular'
        }
    };

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [200, 280, 250, 220, 300, 290, 340],
                color: (opacity = 1) => `rgba(231, 79, 119, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Runnig"] // optional
    };

    const data2 = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [450, 380, 420, 370, 400, 420, 390],
                color: (opacity = 1) => `rgba(246, 185, 96, ${opacity})`, // optional
                strokeWidth: 1 // optional
            }
        ],
        legend: ["Swimming"] // optional
    };

    const data3 = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [430, 380, 245, 280, 250, 300, 390],
                color: (opacity = 1) => `rgb(22, 160, 133, ${opacity})`, // optional
                strokeWidth: 1 // optional
            }
        ],
        legend: ["Cycling"] // optional
    };

    const data4 = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [370, 380, 420, 370, 400, 420, 390],
                color: (opacity = 1) => `rgb(142, 68, 173, ${opacity})`, // optional
                strokeWidth: 1 // optional
            }
        ],
        legend: ["Workout"] // optional
    };


    return (

        <View style={{ flex: 1, backgroundColor: '#f8fafb', padding: 18 }}>

            <ScrollView showsVerticalScrollIndicator={false}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FontAwesome5 name="user" size={24} color="black" />
                    <Text style={{
                        fontFamily: 'Poppins-Bold', color: '#2e2e3c', fontSize: 20
                    }}>{`Workout`}</Text>
                    <FontAwesome5 name="bell" size={24} color="black" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                    <View style={{
                        width: 160, height: 160, backgroundColor: '#ffffff', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        borderRadius: 20,
                        padding: 12,
                        marginHorizontal: 2
                    }}>
                        <FontAwesome5 name="running" size={30} color="#474ffb" style={{ flex: 1 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#2e2e3c', fontSize: 18 }}>{`Running`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#2e2e3c', fontSize: 14 }}>{`1 hour 30 mins`}</Text>
                    </View>

                    <View style={{
                        width: 160, height: 160, backgroundColor: '#ffffff', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        borderRadius: 20,
                        padding: 12,
                        marginHorizontal: 2
                    }}>
                        <FontAwesome5 name="swimmer" size={30} color="#474ffb" style={{ flex: 1 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#2e2e3c', fontSize: 18 }}>{`Swimming`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#2e2e3c', fontSize: 14 }}>{`50 mins`}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                    <View style={{
                        width: 160, height: 160, backgroundColor: '#ffffff', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        borderRadius: 20,
                        padding: 12,
                        marginHorizontal: 2
                    }}>
                        <FontAwesome5 name="biking" size={30} color="#474ffb" style={{ flex: 1 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#2e2e3c', fontSize: 18 }}>{`Cycling`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#2e2e3c', fontSize: 14 }}>{`2 hours`}</Text>
                    </View>

                    <View style={{
                        width: 160, height: 160, backgroundColor: '#ffffff', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        borderRadius: 20,
                        padding: 12,
                        marginHorizontal: 2
                    }}>
                        <FontAwesome5 name="weight-hanging" size={30} color="#474ffb" style={{ flex: 1 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#2e2e3c', fontSize: 18 }}>{`Workout`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#2e2e3c', fontSize: 14 }}>{`45 mins`}</Text>
                    </View>

                </View>

                <View style={{ backgroundColor: '#FFF', padding: 12, borderRadius: 20, marginTop: 20 }}>
                    <LineChart
                        data={data}
                        width={320}
                        height={220}
                        chartConfig={chartConfig}
                    />
                </View>

                <View style={{ backgroundColor: '#FFF', padding: 12, borderRadius: 20, marginTop: 20 }}>
                    <LineChart
                        data={data2}
                        width={320}
                        height={220}
                        chartConfig={chartConfig}
                    />
                </View>

                <View style={{ backgroundColor: '#FFF', padding: 12, borderRadius: 20, marginTop: 20 }}>
                    <LineChart
                        data={data3}
                        width={320}
                        height={220}
                        chartConfig={chartConfig}
                    />
                </View>

                <View style={{ backgroundColor: '#FFF', padding: 12, borderRadius: 20, marginTop: 20 }}>
                    <LineChart
                        data={data4}
                        width={320}
                        height={220}
                        chartConfig={chartConfig}
                    />
                </View>
            </ScrollView>
        </View>

    );
}

export { HomeScreen };
