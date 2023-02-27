/*

Instagram/Tiktok @reactnativespace
www.reactnativespace.com
www.dailyui.co

*/
import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { HomeScreen as HomeScreen001 } from './screens/day001/HomeScreen';
import { SignUpScreen as SignUpScreen001 } from './screens/day001/SignUpScreen';

import { CheckoutScreen as CheckoutScreen002 } from './screens/day002/CheckoutScreen';
import { MyCartScreen as MyCartScreen002 } from './screens/day002/MyCartScreen';

import { IntroScreen as IntroScreen003 } from './screens/day003/IntroScreen';
import { LandingScreen as LandingScreen003 } from './screens/day003/LandingScreen';

import { CalculatorScreen as CalculatorScreen004 } from './screens/day004/CalculatorScreen';

import { HomeScreen as HomeScreen005 } from './screens/day005/HomeScreen';

import { ProfileScreen as ProfileScreen006 } from './screens/day006/ProfileScreen';

import { SettingsScreen as SettingsScreen007 } from './screens/day007/SettingsScreen';
import { SecurityScreen as SecurityScreen007 } from './screens/day007/SecurityScreen';

import { NotFoundScreen as NotFoundScreen008 } from './screens/day008/NotFoundScreen';

import { HomeScreen as HomeScreen009 } from './screens/day009/HomeScreen';
import { PlayerScreen as PlayerScreen009 } from './screens/day009/PlayerScreen';

import { ShareScreen as ShareScreen010 } from './screens/day010/ShareScreen';

import { HomeScreen as HomeScreen011 } from './screens/day011/HomeScreen';

import { HomeScreen as HomeScreen012 } from './screens/day012/HomeScreen';
import { ProductScreen as ProductScreen012 } from './screens/day012/ProductScreen';

import { HomeScreen as HomeScreen013 } from './screens/day013/HomeScreen';
import { ChatScreen as ChatScreen013 } from './screens/day013/ChatScreen';

import { HomeScreen as HomeScreen014 } from './screens/day014/HomeScreen';

import { HomeScreen as HomeScreen015 } from './screens/day015/HomeScreen';

import { HomeScreen as HomeScreen016 } from './screens/day016/HomeScreen';

import { HomeScreen as HomeScreen017 } from './screens/day017/HomeScreen';

import { HomeScreen as HomeScreen018 } from './screens/day018/HomeScreen';

import { HomeScreen as HomeScreen019 } from './screens/day019/HomeScreen';

import { HomeScreen as HomeScreen020 } from './screens/day020/HomeScreen';
import { MapScreen as MapScreen020 } from './screens/day020/MapScreen';

import { HomeScreen as HomeScreen021 } from './screens/day021/HomeScreen';

import { HomeScreen as HomeScreen022 } from './screens/day022/HomeScreen';

import { HomeScreen as HomeScreen023 } from './screens/day023/HomeScreen';

import { HomeScreen as HomeScreen024 } from './screens/day024/HomeScreen';
import { FlightScreen as FlightScreen024 } from './screens/day024/FlightScreen';

import { HomeScreen as HomeScreen025 } from './screens/day025/HomeScreen';

import { HomeScreen as HomeScreen026 } from './screens/day026/HomeScreen';

import { HomeScreen as HomeScreen027 } from './screens/day027/HomeScreen';

import { HomeScreen as HomeScreen028 } from './screens/day028/HomeScreen';

import { HomeScreen as HomeScreen029 } from './screens/day029/HomeScreen';

import { HomeScreen as HomeScreen030 } from './screens/day030/HomeScreen';

import { HomeScreen as HomeScreen031 } from './screens/day031/HomeScreen';

import { HomeScreen as HomeScreen032 } from './screens/day032/HomeScreen';
import { ProjectScreen as ProjectScreen032 } from './screens/day032/ProjectScreen';

import { HomeScreen as HomeScreen033 } from './screens/day033/HomeScreen';

import { HomeScreen as HomeScreen034 } from './screens/day034/HomeScreen';

import { HomeScreen as HomeScreen035 } from './screens/day035/HomeScreen';
import { BlogScreen as BlogScreen035 } from './screens/day035/BlogScreen';

import { HomeScreen as HomeScreen036 } from './screens/day036/HomeScreen';

import { HomeScreen as HomeScreen037 } from './screens/day037/HomeScreen';

import { HomeScreen as HomeScreen038 } from './screens/day038/HomeScreen';

import { HomeScreen as HomeScreen039 } from './screens/day039/HomeScreen';

import { HomeScreen as HomeScreen040 } from './screens/day040/HomeScreen';
import { RecipeScreen as RecipeScreen040 } from './screens/day040/RecipeScreen';

import { HomeScreen as HomeScreen041 } from './screens/day041/HomeScreen';

import { HomeScreen as HomeScreen042 } from './screens/day042/HomeScreen';
import { TodoScreen as TodoScreen042 } from './screens/day042/TodoScreen';

import { HomeScreen as HomeScreen043 } from './screens/day043/HomeScreen';
import { BurgerScreen as BurgerScreen043 } from './screens/day043/BurgerScreen';

import { HomeScreen as HomeScreen044 } from './screens/day044/HomeScreen';
import { FavScreen as FavScreen044 } from './screens/day044/FavScreen';

import { HomeScreen as HomeScreen045 } from './screens/day045/HomeScreen';

import { HomeScreen as HomeScreen046 } from './screens/day046/HomeScreen';
import { InvoiceScreen as InvoiceScreen046 } from './screens/day046/InvoiceScreen';

import { HomeScreen as HomeScreen047 } from './screens/day047/HomeScreen';

import { HomeScreen as HomeScreen048 } from './screens/day048/HomeScreen';

import { HomeScreen as HomeScreen049 } from './screens/day049/HomeScreen';

import { HomeScreen as HomeScreen050 } from './screens/day050/HomeScreen';
import { JobScreen as JobScreen050 } from './screens/day050/JobScreen';

import { HomeScreen as HomeScreen051 } from './screens/day051/HomeScreen';

import { HomeScreen as HomeScreen052 } from './screens/day052/HomeScreen';

import { HomeScreen as HomeScreen054 } from './screens/day054/HomeScreen';
import { ConfirmScreen as ConfirmScreen054 } from './screens/day054/ConfirmScreen';

import { HomeScreen as HomeScreen055 } from './screens/day055/HomeScreen';


import { CheckoutScreen as CheckoutScreen056 } from './screens/day056/CheckoutScreen';

import { HomeScreen as HomeScreen057 } from './screens/day057/HomeScreen';

import { HomeScreen as HomeScreen058 } from './screens/day058/HomeScreen';
import { CartScreen as CartScreen058 } from './screens/day058/CartScreen';

import { HomeScreen as HomeScreen059 } from './screens/day059/HomeScreen';
import { BgScreen as BgScreen059 } from './screens/day059/BgScreen';

import { HomeScreen as HomeScreen060 } from './screens/day060/HomeScreen';

import { HomeScreen as HomeScreen061 } from './screens/day061/HomeScreen';
import { CouponScreen as CouponScreen061 } from './screens/day061/CouponScreen';

import { HomeScreen as HomeScreen062 } from './screens/day062/HomeScreen';

import { HomeScreen as HomeScreen063 } from './screens/day063/HomeScreen';

import { HomeScreen as HomeScreen064 } from './screens/day064/HomeScreen';

import { HomeScreen as HomeScreen065 } from './screens/day065/HomeScreen';
import { NoteScreen as NoteScreen065 } from './screens/day065/NoteScreen';

import { HomeScreen as HomeScreen066 } from './screens/day066/HomeScreen';

import { HomeScreen as HomeScreen067 } from './screens/day067/HomeScreen';

import { HomeScreen as HomeScreen068 } from './screens/day068/HomeScreen';
import { FlightScreen as FlightScreen068 } from './screens/day068/FlightScreen';

import { HomeScreen as HomeScreen069 } from './screens/day069/HomeScreen';
import { ProfileScreen as ProfileScreen069 } from './screens/day069/ProfileScreen';

import { HomeScreen as HomeScreen070 } from './screens/day070/HomeScreen';
import { EventScreen as EventScreen070 } from './screens/day070/EventScreen';

import { HomeScreen as HomeScreen071 } from './screens/day071/HomeScreen';
import { CalendarScreen as CalendarScreen071 } from './screens/day071/CalendarScreen';

import { HomeScreen as HomeScreen072 } from './screens/day072/HomeScreen';

import { HomeScreen as HomeScreen073 } from './screens/day073/HomeScreen';
import { GameScreen as GameScreen073 } from './screens/day073/GameScreen';

import { HomeScreen as HomeScreen074 } from './screens/day074/HomeScreen';

import { HomeScreen as HomeScreen075 } from './screens/day075/HomeScreen';

import { HomeScreen as HomeScreen076 } from './screens/day076/HomeScreen';

import { HomeScreen as HomeScreen077 } from './screens/day077/HomeScreen';

import { HomeScreen as HomeScreen078 } from './screens/day078/HomeScreen';

import { HomeScreen as HomeScreen079 } from './screens/day079/HomeScreen';
import { NavScreen as NavScreen079 } from './screens/day079/NavScreen';

import { HomeScreen as HomeScreen080 } from './screens/day080/HomeScreen';

import { HomeScreen as HomeScreen081 } from './screens/day081/HomeScreen';

import { HomeScreen as HomeScreen082 } from './screens/day082/HomeScreen';

import { HomeScreen as HomeScreen083 } from './screens/day083/HomeScreen';

import { HomeScreen as HomeScreen084 } from './screens/day084/HomeScreen';

import { HomeScreen as HomeScreen085 } from './screens/day085/HomeScreen';

import { HomeScreen as HomeScreen086 } from './screens/day086/HomeScreen';

import { HomeScreen as HomeScreen087 } from './screens/day087/HomeScreen';

import { HomeScreen as HomeScreen088 } from './screens/day088/HomeScreen';

import { HomeScreen as HomeScreen089 } from './screens/day089/HomeScreen';

import { HomeScreen as HomeScreen090 } from './screens/day090/HomeScreen';
import { ProjectScreen as ProjectScreen090 } from './screens/day090/ProjectScreen';

import { HomeScreen as HomeScreen091 } from './screens/day091/HomeScreen';

import { HomeScreen as HomeScreen092 } from './screens/day092/HomeScreen';

import { HomeScreen as HomeScreen093 } from './screens/day093/HomeScreen';

import { HomeScreen as HomeScreen094 } from './screens/day094/HomeScreen';

import { HomeScreen as HomeScreen095 } from './screens/day095/HomeScreen';
import { ProductScreen as ProductScreen095 } from './screens/day095/ProductScreen';

import { HomeScreen as HomeScreen096 } from './screens/day096/HomeScreen';

import { HomeScreen as HomeScreen097 } from './screens/day097/HomeScreen';

import { HomeScreen as HomeScreen098 } from './screens/day098/HomeScreen';

import { HomeScreen as HomeScreen099 } from './screens/day099/HomeScreen';
import { CategoriesScreen as CategoriesScreen099 } from './screens/day099/CategoriesScreen';

import { HomeScreen as HomeScreen100 } from './screens/day100/HomeScreen';

const Day001Stack = createNativeStackNavigator();
const Day001StackScreen = () => (
  <Day001Stack.Navigator>
    <Day001Stack.Screen name='Home' component={HomeScreen001} options={{ headerShown: false }} />
    <Day001Stack.Screen name='SignUp' component={SignUpScreen001} options={{ headerShown: false }} />
  </Day001Stack.Navigator>
);

const Day002Stack = createNativeStackNavigator();
const Day002StackScreen = () => (
  <Day002Stack.Navigator>
    <Day002Stack.Screen name='MyCart' component={MyCartScreen002} options={{ headerShown: false }} />
    <Day002Stack.Screen name='Checkout' component={CheckoutScreen002} options={{ headerShown: false }} />
  </Day002Stack.Navigator>
);

const Day003Stack = createNativeStackNavigator();
const Day003StackScreen = () => (
  <Day003Stack.Navigator>
    <Day003Stack.Screen name='Intro' component={IntroScreen003} options={{ headerShown: false }} />
    <Day003Stack.Screen name='Landing' component={LandingScreen003} options={{ headerShown: false }} />
  </Day003Stack.Navigator>
);

const Day004Stack = createNativeStackNavigator();
const Day004StackScreen = () => (
  <Day004Stack.Navigator>
    <Day004Stack.Screen name='Calculator' component={CalculatorScreen004} options={{ headerShown: false }} />
  </Day004Stack.Navigator>
);

const Day005Stack = createNativeStackNavigator();
const Day005StackScreen = () => (
  <Day005Stack.Navigator>
    <Day005Stack.Screen name='Home' component={HomeScreen005} options={{ headerShown: false }} />
  </Day005Stack.Navigator>
);

const Day006Stack = createNativeStackNavigator();
const Day006StackScreen = () => (
  <Day006Stack.Navigator>
    <Day006Stack.Screen name='Home' component={ProfileScreen006} options={{ headerShown: false }} />
  </Day006Stack.Navigator>
);

const Day007Stack = createNativeStackNavigator();
const Day007StackScreen = () => (
  <Day007Stack.Navigator>
    <Day007Stack.Screen name='Settings' component={SettingsScreen007} options={{ headerShown: false }} />
    <Day007Stack.Screen name='Security' component={SecurityScreen007} options={{ headerShown: false }} />
  </Day007Stack.Navigator>
);

const Day008Stack = createNativeStackNavigator();
const Day008StackScreen = () => (
  <Day008Stack.Navigator>
    <Day008Stack.Screen name='NotFound' component={NotFoundScreen008} options={{ headerShown: false }} />
  </Day008Stack.Navigator>
);

const Day009Stack = createNativeStackNavigator();
const Day009StackScreen = () => (
  <Day009Stack.Navigator>
    <Day009Stack.Screen name='Home' component={HomeScreen009} options={{ headerShown: false }} />
    <Day009Stack.Screen name='Player' component={PlayerScreen009} options={{ headerShown: false }} />
  </Day009Stack.Navigator>
);

const Day010Stack = createNativeStackNavigator();
const Day010StackScreen = () => (
  <Day010Stack.Navigator>
    <Day010Stack.Screen name='Share' component={ShareScreen010} options={{ headerShown: false }} />
  </Day010Stack.Navigator>
);

const Day011Stack = createNativeStackNavigator();
const Day011StackScreen = () => (
  <Day011Stack.Navigator>
    <Day011Stack.Screen name='Home' component={HomeScreen011} options={{ headerShown: false }} />
  </Day011Stack.Navigator>
);

const Day012Stack = createNativeStackNavigator();
const Day012StackScreen = () => (
  <Day012Stack.Navigator>
    <Day012Stack.Screen name='Home' component={HomeScreen012} options={{ headerShown: false }} />
    <Day012Stack.Screen name='Product' component={ProductScreen012} options={{ headerShown: false }} />
  </Day012Stack.Navigator>
);

const Day013Stack = createNativeStackNavigator();
const Day013StackScreen = () => (
  <Day013Stack.Navigator>
    <Day013Stack.Screen name='Home' component={HomeScreen013} options={{ headerShown: false }} />
    <Day013Stack.Screen name='Chat' component={ChatScreen013} options={{ headerShown: false }} />
  </Day013Stack.Navigator>
);

const Day014Stack = createNativeStackNavigator();
const Day014StackScreen = () => (
  <Day014Stack.Navigator>
    <Day014Stack.Screen name='Home' component={HomeScreen014} options={{ headerShown: false }} />
  </Day014Stack.Navigator>
);

const Day015Stack = createNativeStackNavigator();
const Day015StackScreen = () => (
  <Day015Stack.Navigator>
    <Day015Stack.Screen name='Home' component={HomeScreen015} options={{ headerShown: false }} />
  </Day015Stack.Navigator>
);

const Day016Stack = createNativeStackNavigator();
const Day016StackScreen = () => (
  <Day016Stack.Navigator>
    <Day016Stack.Screen name='Home' component={HomeScreen016} options={{ headerShown: false }} />
  </Day016Stack.Navigator>
);

const Day017Stack = createNativeStackNavigator();
const Day017StackScreen = () => (
  <Day017Stack.Navigator>
    <Day017Stack.Screen name='Home' component={HomeScreen017} options={{ headerShown: false }} />
  </Day017Stack.Navigator>
);

const Day018Stack = createNativeStackNavigator();
const Day018StackScreen = () => (
  <Day018Stack.Navigator>
    <Day018Stack.Screen name='Home' component={HomeScreen018} options={{ headerShown: false }} />
  </Day018Stack.Navigator>
);

const Day019Stack = createNativeStackNavigator();
const Day019StackScreen = () => (
  <Day019Stack.Navigator>
    <Day019Stack.Screen name='Home' component={HomeScreen019} options={{ headerShown: false }} />
  </Day019Stack.Navigator>
);

const Day020Stack = createNativeStackNavigator();
const Day020StackScreen = () => (
  <Day020Stack.Navigator>
    <Day020Stack.Screen name='Home' component={HomeScreen020} options={{ headerShown: false }} />
    <Day020Stack.Screen name='Map' component={MapScreen020} options={{ headerShown: false }} />
  </Day020Stack.Navigator>
);

const Day021Stack = createNativeStackNavigator();
const Day021StackScreen = () => (
  <Day021Stack.Navigator>
    <Day021Stack.Screen name='Home' component={HomeScreen021} options={{ headerShown: false }} />
  </Day021Stack.Navigator>
);

const Day022Stack = createNativeStackNavigator();
const Day022StackScreen = () => (
  <Day022Stack.Navigator>
    <Day022Stack.Screen name='Home' component={HomeScreen022} options={{ headerShown: false }} />
  </Day022Stack.Navigator>
);

const Day023Stack = createNativeStackNavigator();
const Day023StackScreen = () => (
  <Day023Stack.Navigator>
    <Day023Stack.Screen name='Home' component={HomeScreen023} options={{ headerShown: false }} />
  </Day023Stack.Navigator>
);

const Day024Stack = createNativeStackNavigator();
const Day024StackScreen = () => (
  <Day024Stack.Navigator>
    <Day024Stack.Screen name='Home' component={HomeScreen024} options={{ headerShown: false }} />
    <Day024Stack.Screen name='Flight' component={FlightScreen024} options={{ headerShown: false }} />
  </Day024Stack.Navigator>
);

const Day025Stack = createNativeStackNavigator();
const Day025StackScreen = () => (
  <Day025Stack.Navigator>
    <Day025Stack.Screen name='Home' component={HomeScreen025} options={{ headerShown: false }} />
  </Day025Stack.Navigator>
);

const Day026Stack = createNativeStackNavigator();
const Day026StackScreen = () => (
  <Day026Stack.Navigator>
    <Day026Stack.Screen name='Home' component={HomeScreen026} options={{ headerShown: false }} />
  </Day026Stack.Navigator>
);

const Day027Stack = createNativeStackNavigator();
const Day027StackScreen = () => (
  <Day027Stack.Navigator>
    <Day027Stack.Screen name='Home' component={HomeScreen027} options={{ headerShown: false }} />
  </Day027Stack.Navigator>
);

const Day028Stack = createNativeStackNavigator();
const Day028StackScreen = () => (
  <Day028Stack.Navigator>
    <Day028Stack.Screen name='Home' component={HomeScreen028} options={{ headerShown: false }} />
  </Day028Stack.Navigator>
);

const Day029Stack = createNativeStackNavigator();
const Day029StackScreen = () => (
  <Day029Stack.Navigator>
    <Day029Stack.Screen name='Home' component={HomeScreen029} options={{ headerShown: false }} />
  </Day029Stack.Navigator>
);

const Day030Stack = createNativeStackNavigator();
const Day030StackScreen = () => (
  <Day030Stack.Navigator>
    <Day030Stack.Screen name='Home' component={HomeScreen030} options={{ headerShown: false }} />
  </Day030Stack.Navigator>
);

const Day031Stack = createNativeStackNavigator();
const Day031StackScreen = () => (
  <Day031Stack.Navigator>
    <Day031Stack.Screen name='Home' component={HomeScreen031} options={{ headerShown: false }} />
  </Day031Stack.Navigator>
);

const Day032Stack = createNativeStackNavigator();
const Day032StackScreen = () => (
  <Day032Stack.Navigator>
    <Day032Stack.Screen name='Home' component={HomeScreen032} options={{ headerShown: false }} />
    <Day032Stack.Screen name='Project' component={ProjectScreen032} options={{ headerShown: false }} />
  </Day032Stack.Navigator>
);

const Day033Stack = createNativeStackNavigator();
const Day033StackScreen = () => (
  <Day033Stack.Navigator>
    <Day033Stack.Screen name='Home' component={HomeScreen033} options={{ headerShown: false }} />
  </Day033Stack.Navigator>
);

const Day034Stack = createNativeStackNavigator();
const Day034StackScreen = () => (
  <Day034Stack.Navigator>
    <Day034Stack.Screen name='Home' component={HomeScreen034} options={{ headerShown: false }} />
  </Day034Stack.Navigator>
);

const Day035Stack = createNativeStackNavigator();
const Day035StackScreen = () => (
  <Day035Stack.Navigator>
    <Day035Stack.Screen name='Home' component={HomeScreen035} options={{ headerShown: false }} />
    <Day035Stack.Screen name='Blog' component={BlogScreen035} options={{ headerShown: false }} />
  </Day035Stack.Navigator>
);

const Day036Stack = createNativeStackNavigator();
const Day036StackScreen = () => (
  <Day036Stack.Navigator>
    <Day036Stack.Screen name='Home' component={HomeScreen036} options={{ headerShown: false }} />
  </Day036Stack.Navigator>
);

const Day037Stack = createNativeStackNavigator();
const Day037StackScreen = () => (
  <Day037Stack.Navigator>
    <Day037Stack.Screen name='Home' component={HomeScreen037} options={{ headerShown: false }} />
  </Day037Stack.Navigator>
);

const Day038Stack = createNativeStackNavigator();
const Day038StackScreen = () => (
  <Day038Stack.Navigator>
    <Day038Stack.Screen name='Home' component={HomeScreen038} options={{ headerShown: false }} />
  </Day038Stack.Navigator>
);

const Day039Stack = createNativeStackNavigator();
const Day039StackScreen = () => (
  <Day039Stack.Navigator>
    <Day039Stack.Screen name='Home' component={HomeScreen039} options={{ headerShown: false }} />
  </Day039Stack.Navigator>
);

const Day040Stack = createNativeStackNavigator();
const Day040StackScreen = () => (
  <Day040Stack.Navigator>
    <Day040Stack.Screen name='Home' component={HomeScreen040} options={{ headerShown: false }} />
    <Day040Stack.Screen name='Recipe' component={RecipeScreen040} options={{ headerShown: false }} />
  </Day040Stack.Navigator>
);

const Day041Stack = createNativeStackNavigator();
const Day041StackScreen = () => (
  <Day041Stack.Navigator>
    <Day041Stack.Screen name='Home' component={HomeScreen041} options={{ headerShown: false }} />
  </Day041Stack.Navigator>
);

const Day042Stack = createNativeStackNavigator();
const Day042StackScreen = () => (
  <Day042Stack.Navigator>
    <Day042Stack.Screen name='Home' component={HomeScreen042} options={{ headerShown: false }} />
    <Day042Stack.Screen name='Todo' component={TodoScreen042} options={{ headerShown: false }} />
  </Day042Stack.Navigator>
);

const Day043Stack = createNativeStackNavigator();
const Day043StackScreen = () => (
  <Day043Stack.Navigator>
    <Day043Stack.Screen name='Home' component={HomeScreen043} options={{ headerShown: false }} />
    <Day043Stack.Screen name='Burger' component={BurgerScreen043} options={{ headerShown: false }} />
  </Day043Stack.Navigator>
);

const Day044Stack = createNativeStackNavigator();
const Day044StackScreen = () => (
  <Day044Stack.Navigator>
    <Day044Stack.Screen name='Home' component={HomeScreen044} options={{ headerShown: false }} />
    <Day044Stack.Screen name='Fav' component={FavScreen044} options={{ headerShown: false }} />
  </Day044Stack.Navigator>
);

const Day045Stack = createNativeStackNavigator();
const Day045StackScreen = () => (
  <Day045Stack.Navigator>
    <Day045Stack.Screen name='Home' component={HomeScreen045} options={{ headerShown: false }} />
  </Day045Stack.Navigator>
);

const Day046Stack = createNativeStackNavigator();
const Day046StackScreen = () => (
  <Day046Stack.Navigator>
    <Day046Stack.Screen name='Home' component={HomeScreen046} options={{ headerShown: false }} />
    <Day046Stack.Screen name='Invoice' component={InvoiceScreen046} options={{ headerShown: false }} />
  </Day046Stack.Navigator>
);

const Day047Stack = createNativeStackNavigator();
const Day047StackScreen = () => (
  <Day047Stack.Navigator>
    <Day047Stack.Screen name='Home' component={HomeScreen047} options={{ headerShown: false }} />
  </Day047Stack.Navigator>
);

const Day048Stack = createNativeStackNavigator();
const Day048StackScreen = () => (
  <Day048Stack.Navigator>
    <Day048Stack.Screen name='Home' component={HomeScreen048} options={{ headerShown: false }} />
  </Day048Stack.Navigator>
);

const Day049Stack = createNativeStackNavigator();
const Day049StackScreen = () => (
  <Day049Stack.Navigator>
    <Day049Stack.Screen name='Home' component={HomeScreen049} options={{ headerShown: false }} />
  </Day049Stack.Navigator>
);

const Day050Stack = createNativeStackNavigator();
const Day050StackScreen = () => (
  <Day050Stack.Navigator>
    <Day050Stack.Screen name='Home' component={HomeScreen050} options={{ headerShown: false }} />
    <Day050Stack.Screen name='Job' component={JobScreen050} options={{ headerShown: false }} />
  </Day050Stack.Navigator>
);

const Day051Stack = createNativeStackNavigator();
const Day051StackScreen = () => (
  <Day051Stack.Navigator>
    <Day051Stack.Screen name='Home' component={HomeScreen051} options={{ headerShown: false }} />
  </Day051Stack.Navigator>
);

const Day052Stack = createNativeStackNavigator();
const Day052StackScreen = () => (
  <Day052Stack.Navigator>
    <Day052Stack.Screen name='Home' component={HomeScreen052} options={{ headerShown: false }} />
  </Day052Stack.Navigator>
);

const Day054Stack = createNativeStackNavigator();
const Day054StackScreen = () => (
  <Day054Stack.Navigator>
    <Day054Stack.Screen name='Home' component={HomeScreen054} options={{ headerShown: false }} />
    <Day054Stack.Screen name='Confirm' component={ConfirmScreen054} options={{ headerShown: false }} />
  </Day054Stack.Navigator>
);

const Day055Stack = createNativeStackNavigator();
const Day055StackScreen = () => (
  <Day055Stack.Navigator>
    <Day055Stack.Screen name='Home' component={HomeScreen055} options={{ headerShown: false }} />
  </Day055Stack.Navigator>
);


const Day056Stack = createNativeStackNavigator();
const Day056StackScreen = () => (
  <Day056Stack.Navigator>
    <Day056Stack.Screen name='Cart' component={CartScreen056} options={{ headerShown: false }} />
    <Day056Stack.Screen name='Checkout' component={CheckoutScreen056} options={{ headerShown: false }} />
  </Day056Stack.Navigator>
);

const Day057Stack = createNativeStackNavigator();
const Day057StackScreen = () => (
  <Day057Stack.Navigator>
    <Day057Stack.Screen name='Home' component={HomeScreen057} options={{ headerShown: false }} />
  </Day057Stack.Navigator>
);

const Day058Stack = createNativeStackNavigator();
const Day058StackScreen = () => (
  <Day058Stack.Navigator>
    <Day058Stack.Screen name='Home' component={HomeScreen058} options={{ headerShown: false }} />
    <Day058Stack.Screen name='Cart' component={CartScreen058} options={{ headerShown: false }} />
  </Day058Stack.Navigator>
);

const Day059Stack = createNativeStackNavigator();
const Day059StackScreen = () => (
  <Day059Stack.Navigator>
    <Day059Stack.Screen name='Home' component={HomeScreen059} options={{ headerShown: false }} />
    <Day059Stack.Screen name='Bg' component={BgScreen059} options={{ headerShown: false }} />
  </Day059Stack.Navigator>
);

const Day060Stack = createNativeStackNavigator();
const Day060StackScreen = () => (
  <Day060Stack.Navigator>
    <Day060Stack.Screen name='Home' component={HomeScreen060} options={{ headerShown: false }} />
  </Day060Stack.Navigator>
);

const Day061Stack = createNativeStackNavigator();
const Day061StackScreen = () => (
  <Day061Stack.Navigator>
    <Day061Stack.Screen name='Home' component={HomeScreen061} options={{ headerShown: false }} />
    <Day061Stack.Screen name='Coupon' component={CouponScreen061} options={{ headerShown: false }} />
  </Day061Stack.Navigator>
);

const Day062Stack = createNativeStackNavigator();
const Day062StackScreen = () => (
  <Day062Stack.Navigator>
    <Day062Stack.Screen name='Home' component={HomeScreen062} options={{ headerShown: false }} />
  </Day062Stack.Navigator>
);

const Day063Stack = createNativeStackNavigator();
const Day063StackScreen = () => (
  <Day063Stack.Navigator>
    <Day063Stack.Screen name='Home' component={HomeScreen063} options={{ headerShown: false }} />
  </Day063Stack.Navigator>
);

const Day064Stack = createNativeStackNavigator();
const Day064StackScreen = () => (
  <Day064Stack.Navigator>
    <Day064Stack.Screen name='Home' component={HomeScreen064} options={{ headerShown: false }} />
  </Day064Stack.Navigator>
);

const Day065Stack = createNativeStackNavigator();
const Day065StackScreen = () => (
  <Day065Stack.Navigator>
    <Day065Stack.Screen name='Home' component={HomeScreen065} options={{ headerShown: false }} />
    <Day065Stack.Screen name='Note' component={NoteScreen065} options={{ headerShown: false }} />
  </Day065Stack.Navigator>
);

const Day066Stack = createNativeStackNavigator();
const Day066StackScreen = () => (
  <Day066Stack.Navigator>
    <Day066Stack.Screen name='Home' component={HomeScreen066} options={{ headerShown: false }} />
  </Day066Stack.Navigator>
);

const Day067Stack = createNativeStackNavigator();
const Day067StackScreen = () => (
  <Day067Stack.Navigator>
    <Day067Stack.Screen name='Home' component={HomeScreen067} options={{ headerShown: false }} />
  </Day067Stack.Navigator>
);

const Day068Stack = createNativeStackNavigator();
const Day068StackScreen = () => (
  <Day068Stack.Navigator>
    <Day068Stack.Screen name='Home' component={HomeScreen068} options={{ headerShown: false }} />
    <Day068Stack.Screen name='Flight' component={FlightScreen068} options={{ headerShown: false }} />
  </Day068Stack.Navigator>
);

const Day069Stack = createNativeStackNavigator();
const Day069StackScreen = () => (
  <Day069Stack.Navigator>
    <Day069Stack.Screen name='Home' component={HomeScreen069} options={{ headerShown: false }} />
    <Day069Stack.Screen name='Profile' component={ProfileScreen069} options={{ headerShown: false }} />
  </Day069Stack.Navigator>
);

const Day070Stack = createNativeStackNavigator();
const Day070StackScreen = () => (
  <Day070Stack.Navigator>
    <Day070Stack.Screen name='Home' component={HomeScreen070} options={{ headerShown: false }} />
    <Day070Stack.Screen name='Event' component={EventScreen070} options={{ headerShown: false }} />
  </Day070Stack.Navigator>
);

const Day071Stack = createNativeStackNavigator();
const Day071StackScreen = () => (
  <Day071Stack.Navigator>
    <Day071Stack.Screen name='Home' component={HomeScreen071} options={{ headerShown: false }} />
    <Day071Stack.Screen name='Calendar' component={CalendarScreen071} options={{ headerShown: false }} />
  </Day071Stack.Navigator>
);

const Day072Stack = createNativeStackNavigator();
const Day072StackScreen = () => (
  <Day072Stack.Navigator>
    <Day072Stack.Screen name='Home' component={HomeScreen072} options={{ headerShown: false }} />
  </Day072Stack.Navigator>
);

const Day073Stack = createNativeStackNavigator();
const Day073StackScreen = () => (
  <Day073Stack.Navigator>
    <Day073Stack.Screen name='Home' component={HomeScreen073} options={{ headerShown: false }} />
    <Day073Stack.Screen name='Game' component={GameScreen073} options={{ headerShown: false }} />
  </Day073Stack.Navigator>
);

const Day074Stack = createNativeStackNavigator();
const Day074StackScreen = () => (
  <Day074Stack.Navigator>
    <Day074Stack.Screen name='Home' component={HomeScreen074} options={{ headerShown: false }} />
  </Day074Stack.Navigator>
);

const Day075Stack = createNativeStackNavigator();
const Day075StackScreen = () => (
  <Day075Stack.Navigator>
    <Day075Stack.Screen name='Home' component={HomeScreen075} options={{ headerShown: false }} />
  </Day075Stack.Navigator>
);

const Day076Stack = createNativeStackNavigator();
const Day076StackScreen = () => (
  <Day076Stack.Navigator>
    <Day076Stack.Screen name='Home' component={HomeScreen076} options={{ headerShown: false }} />
  </Day076Stack.Navigator>
);

const Day077Stack = createNativeStackNavigator();
const Day077StackScreen = () => (
  <Day077Stack.Navigator>
    <Day077Stack.Screen name='Home' component={HomeScreen077} options={{ headerShown: false }} />
  </Day077Stack.Navigator>
);

const Day078Stack = createNativeStackNavigator();
const Day078StackScreen = () => (
  <Day078Stack.Navigator>
    <Day078Stack.Screen name='Home' component={HomeScreen078} options={{ headerShown: false }} />
  </Day078Stack.Navigator>
);

const Day079Stack = createNativeStackNavigator();
const Day079StackScreen = () => (
  <Day079Stack.Navigator>
    <Day079Stack.Screen name='Home' component={HomeScreen079} options={{ headerShown: false }} />
    <Day079Stack.Screen name='Nav' component={NavScreen079} options={{ headerShown: false }} />
  </Day079Stack.Navigator>
);

const Day080Stack = createNativeStackNavigator();
const Day080StackScreen = () => (
  <Day080Stack.Navigator>
    <Day080Stack.Screen name='Home' component={HomeScreen080} options={{ headerShown: false }} />
  </Day080Stack.Navigator>
);

const Day081Stack = createNativeStackNavigator();
const Day081StackScreen = () => (
  <Day081Stack.Navigator>
    <Day081Stack.Screen name='Home' component={HomeScreen081} options={{ headerShown: false }} />
  </Day081Stack.Navigator>
);

const Day082Stack = createNativeStackNavigator();
const Day082StackScreen = () => (
  <Day082Stack.Navigator>
    <Day082Stack.Screen name='Home' component={HomeScreen082} options={{ headerShown: false }} />
  </Day082Stack.Navigator>
);

const Day083Stack = createNativeStackNavigator();
const Day083StackScreen = () => (
  <Day083Stack.Navigator>
    <Day083Stack.Screen name='Home' component={HomeScreen083} options={{ headerShown: false }} />
  </Day083Stack.Navigator>
);

const Day084Stack = createNativeStackNavigator();
const Day084StackScreen = () => (
  <Day084Stack.Navigator>
    <Day084Stack.Screen name='Home' component={HomeScreen084} options={{ headerShown: false }} />
  </Day084Stack.Navigator>
);

const Day085Stack = createNativeStackNavigator();
const Day085StackScreen = () => (
  <Day085Stack.Navigator>
    <Day085Stack.Screen name='Home' component={HomeScreen085} options={{ headerShown: false }} />
  </Day085Stack.Navigator>
);

const Day086Stack = createNativeStackNavigator();
const Day086StackScreen = () => (
  <Day086Stack.Navigator>
    <Day086Stack.Screen name='Home' component={HomeScreen086} options={{ headerShown: false }} />
  </Day086Stack.Navigator>
);

const Day087Stack = createNativeStackNavigator();
const Day087StackScreen = () => (
  <Day087Stack.Navigator>
    <Day087Stack.Screen name='Home' component={HomeScreen087} options={{ headerShown: false }} />
  </Day087Stack.Navigator>
);

const Day088Stack = createNativeStackNavigator();
const Day088StackScreen = () => (
  <Day088Stack.Navigator>
    <Day088Stack.Screen name='Home' component={HomeScreen088} options={{ headerShown: false }} />
  </Day088Stack.Navigator>
);

const Day089Stack = createNativeStackNavigator();
const Day089StackScreen = () => (
  <Day089Stack.Navigator>
    <Day089Stack.Screen name='Home' component={HomeScreen089} options={{ headerShown: false }} />
  </Day089Stack.Navigator>
);

const Day090Stack = createNativeStackNavigator();
const Day090StackScreen = () => (
  <Day090Stack.Navigator>
    <Day090Stack.Screen name='Home' component={HomeScreen090} options={{ headerShown: false }} />
    <Day090Stack.Screen name='Project' component={ProjectScreen090} options={{ headerShown: false }} />
  </Day090Stack.Navigator>
);

const Day091Stack = createNativeStackNavigator();
const Day091StackScreen = () => (
  <Day091Stack.Navigator>
    <Day091Stack.Screen name='Home' component={HomeScreen091} options={{ headerShown: false }} />
  </Day091Stack.Navigator>
);

const Day092Stack = createNativeStackNavigator();
const Day092StackScreen = () => (
  <Day092Stack.Navigator>
    <Day092Stack.Screen name='Home' component={HomeScreen092} options={{ headerShown: false }} />
  </Day092Stack.Navigator>
);

const Day093Stack = createNativeStackNavigator();
const Day093StackScreen = () => (
  <Day093Stack.Navigator>
    <Day093Stack.Screen name='Home' component={HomeScreen093} options={{ headerShown: false }} />
  </Day093Stack.Navigator>
);

const Day094Stack = createNativeStackNavigator();
const Day094StackScreen = () => (
  <Day094Stack.Navigator>
    <Day094Stack.Screen name='Home' component={HomeScreen094} options={{ headerShown: false }} />
  </Day094Stack.Navigator>
);

const Day095Stack = createNativeStackNavigator();
const Day095StackScreen = () => (
  <Day095Stack.Navigator>
    <Day095Stack.Screen name='Home' component={HomeScreen095} options={{ headerShown: false }} />
    <Day095Stack.Screen name='Product' component={ProductScreen095} options={{ headerShown: false }} />
  </Day095Stack.Navigator>
);

const Day096Stack = createNativeStackNavigator();
const Day096StackScreen = () => (
  <Day096Stack.Navigator>
    <Day096Stack.Screen name='Home' component={HomeScreen096} options={{ headerShown: false }} />
  </Day096Stack.Navigator>
);

const Day097Stack = createNativeStackNavigator();
const Day097StackScreen = () => (
  <Day097Stack.Navigator>
    <Day097Stack.Screen name='Home' component={HomeScreen097} options={{ headerShown: false }} />
  </Day097Stack.Navigator>
);

const Day098Stack = createNativeStackNavigator();
const Day098StackScreen = () => (
  <Day098Stack.Navigator>
    <Day098Stack.Screen name='Home' component={HomeScreen098} options={{ headerShown: false }} />
  </Day098Stack.Navigator>
);

const Day099Stack = createNativeStackNavigator();
const Day099StackScreen = () => (
  <Day099Stack.Navigator>
    <Day099Stack.Screen name='Home' component={HomeScreen099} options={{ headerShown: false }} />
    <Day099Stack.Screen name='Categories' component={CategoriesScreen099} options={{ headerShown: false }} />
  </Day099Stack.Navigator>
);

const Day100Stack = createNativeStackNavigator();
const Day100StackScreen = () => (
  <Day100Stack.Navigator>
    <Day100Stack.Screen name='Home' component={HomeScreen100} options={{ headerShown: false }} />
  </Day100Stack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName={'Index'}>
    <RootStack.Screen name='Index' component={IndexScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day001' component={Day001StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day002' component={Day002StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day003' component={Day003StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day004' component={Day004StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day005' component={Day005StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day006' component={Day006StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day007' component={Day007StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day008' component={Day008StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day009' component={Day009StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day010' component={Day010StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day011' component={Day011StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day012' component={Day012StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day013' component={Day013StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day014' component={Day014StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day015' component={Day015StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day016' component={Day016StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day017' component={Day017StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day018' component={Day018StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day019' component={Day019StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day020' component={Day020StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day021' component={Day021StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day022' component={Day022StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day023' component={Day023StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day024' component={Day024StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day025' component={Day025StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day026' component={Day026StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day027' component={Day027StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day028' component={Day028StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day029' component={Day029StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day030' component={Day030StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day031' component={Day031StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day032' component={Day032StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day033' component={Day033StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day034' component={Day034StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day035' component={Day035StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day036' component={Day036StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day037' component={Day037StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day038' component={Day038StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day039' component={Day039StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day040' component={Day040StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day041' component={Day041StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day042' component={Day042StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day043' component={Day043StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day044' component={Day044StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day045' component={Day045StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day046' component={Day046StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day047' component={Day047StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day048' component={Day048StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day049' component={Day049StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day050' component={Day050StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day051' component={Day051StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day052' component={Day052StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day054' component={Day054StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day055' component={Day055StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day056' component={Day056StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day057' component={Day057StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day058' component={Day058StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day059' component={Day059StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day060' component={Day060StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day061' component={Day061StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day062' component={Day062StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day063' component={Day063StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day064' component={Day064StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day065' component={Day065StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day066' component={Day066StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day067' component={Day067StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day068' component={Day068StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day069' component={Day069StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day070' component={Day070StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day071' component={Day071StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day072' component={Day072StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day073' component={Day073StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day074' component={Day074StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day075' component={Day075StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day076' component={Day076StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day077' component={Day077StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day078' component={Day078StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day079' component={Day079StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day080' component={Day080StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day081' component={Day081StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day082' component={Day082StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day083' component={Day083StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day084' component={Day084StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day085' component={Day085StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day086' component={Day086StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day087' component={Day087StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day088' component={Day088StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day089' component={Day089StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day090' component={Day090StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day091' component={Day091StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day092' component={Day092StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day093' component={Day093StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day094' component={Day094StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day095' component={Day095StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day096' component={Day096StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day097' component={Day097StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day098' component={Day098StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day099' component={Day099StackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Day100' component={Day100StackScreen} options={{ headerShown: false }} />

  </RootStack.Navigator>
);

const IndexButton = ({ text, onPress = undefined }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#3498db', padding: 12, borderRadius: 8, marginBottom: 5 }}
      onPress={onPress}>
      <Text style={{ color: '#FFF' }}>{text}</Text>
    </TouchableOpacity>
  )
}


const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>React Native Space</Text>
    </View>
  )
};


const IndexScreen = ({ navigation, }) => {

  const navigateToStack = (stack, screen) => {
    navigation.navigate(stack, { screen: screen });
  }

  return (
    <View style={{ flex: 1 }}>

      {/*Header*/}
      <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20 }}>Daily UI Design Challenge</Text>
      </View>

      {/*Body*/}

      <ScrollView style={{ padding: 12 }}>
        <IndexButton text={'DAY 001: Sing Up'} onPress={() => navigateToStack('Day001', 'Home')} />
        <IndexButton text={'DAY 002: Credit Card Checkout'} onPress={() => navigateToStack('Day002', 'MyCart')} />
        <IndexButton text={'DAY 003: Landing Page'} onPress={() => navigateToStack('Day003', 'Intro')} />
        <IndexButton text={'DAY 004: Calculator'} onPress={() => navigateToStack('Day004', 'Intro')} />
        <IndexButton text={'DAY 005: App Icon'} onPress={() => navigateToStack('Day005', 'Home')} />
        <IndexButton text={'DAY 006: Profile'} onPress={() => navigateToStack('Day006', 'Home')} />
        <IndexButton text={'DAY 007: Settings'} onPress={() => navigateToStack('Day007', 'Settings')} />
        <IndexButton text={'DAY 008: 404'} onPress={() => navigateToStack('Day008', 'NotFound')} />
        <IndexButton text={'DAY 009: Music Player'} onPress={() => navigateToStack('Day009', 'Home')} />
        <IndexButton text={'DAY 010: Share'} onPress={() => navigateToStack('Day010', 'Share')} />
        <IndexButton text={'DAY 011: Message'} onPress={() => navigateToStack('Day011', 'Home')} />
        <IndexButton text={'DAY 012: E-com'} onPress={() => navigateToStack('Day012', 'Home')} />
        <IndexButton text={'DAY 013: Chat'} onPress={() => navigateToStack('Day013', 'Home')} />
        <IndexButton text={'DAY 014: Countdown'} onPress={() => navigateToStack('Day014', 'Home')} />
        <IndexButton text={'DAY 015: Switch'} onPress={() => navigateToStack('Day015', 'Home')} />
        <IndexButton text={'DAY 016: Modal'} onPress={() => navigateToStack('Day016', 'Home')} />
        <IndexButton text={'DAY 017: Email Receipt'} onPress={() => navigateToStack('Day017', 'Home')} />
        <IndexButton text={'DAY 018: Analytics Chart'} onPress={() => navigateToStack('Day018', 'Home')} />
        <IndexButton text={'DAY 019: Leaderboard UI'} onPress={() => navigateToStack('Day019', 'Home')} />
        <IndexButton text={'DAY 020: Location Tracker'} onPress={() => navigateToStack('Day020', 'Home')} />
        <IndexButton text={'DAY 021: Home Monitoring'} onPress={() => navigateToStack('Day021', 'Home')} />
        <IndexButton text={'DAY 022: Search'} onPress={() => navigateToStack('Day022', 'Home')} />
        <IndexButton text={'DAY 023: Onboarding'} onPress={() => navigateToStack('Day023', 'Home')} />
        <IndexButton text={'DAY 024: Boarding Pass'} onPress={() => navigateToStack('Day024', 'Home')} />
        <IndexButton text={'DAY 025: TV App'} onPress={() => navigateToStack('Day025', 'Home')} />
        <IndexButton text={'DAY 026: Subscribe'} onPress={() => navigateToStack('Day026', 'Home')} />
        <IndexButton text={'DAY 027: Dropdown'} onPress={() => navigateToStack('Day027', 'Home')} />
        <IndexButton text={'DAY 028: Contact Us'} onPress={() => navigateToStack('Day028', 'Home')} />
        <IndexButton text={'DAY 029: Map'} onPress={() => navigateToStack('Day029', 'Home')} />
        <IndexButton text={'DAY 030: Pricing'} onPress={() => navigateToStack('Day030', 'Home')} />
        <IndexButton text={'DAY 031: File Upload'} onPress={() => navigateToStack('Day031', 'Home')} />
        <IndexButton text={'DAY 032: Crowdfunding Campaign'} onPress={() => navigateToStack('Day032', 'Home')} />
        <IndexButton text={'DAY 033: Customize Product'} onPress={() => navigateToStack('Day033', 'Home')} />
        <IndexButton text={'DAY 034: Car Interface'} onPress={() => navigateToStack('Day034', 'Home')} />
        <IndexButton text={'DAY 035: Blog Post'} onPress={() => navigateToStack('Day035', 'Home')} />
        <IndexButton text={'DAY 036: Special Offer'} onPress={() => navigateToStack('Day036', 'Home')} />
        <IndexButton text={'DAY 037: Weather'} onPress={() => navigateToStack('Day037', 'Home')} />
        <IndexButton text={'DAY 038: Calendar'} onPress={() => navigateToStack('Day038', 'Home')} />
        <IndexButton text={'DAY 039: Testimonials'} onPress={() => navigateToStack('Day039', 'Home')} />
        <IndexButton text={'DAY 040: Recipe'} onPress={() => navigateToStack('Day040', 'Home')} />
        <IndexButton text={'DAY 041: Workout Tracker'} onPress={() => navigateToStack('Day041', 'Home')} />
        <IndexButton text={'DAY 042: Todo'} onPress={() => navigateToStack('Day042', 'Home')} />
        <IndexButton text={'DAY 043: Food/Drink Menu'} onPress={() => navigateToStack('Day043', 'Home')} />
        <IndexButton text={'DAY 044: Favorites'} onPress={() => navigateToStack('Day044', 'Home')} />
        <IndexButton text={'DAY 045: Info Card'} onPress={() => navigateToStack('Day045', 'Home')} />
        <IndexButton text={'DAY 046: Invoice'} onPress={() => navigateToStack('Day046', 'Home')} />
        <IndexButton text={'DAY 047: Activity Feed'} onPress={() => navigateToStack('Day047', 'Home')} />
        <IndexButton text={'DAY 048: Coming Soon'} onPress={() => navigateToStack('Day048', 'Home')} />
        <IndexButton text={'DAY 049: Notifications'} onPress={() => navigateToStack('Day049', 'Home')} />
        <IndexButton text={'DAY 050: Job Listing'} onPress={() => navigateToStack('Day050', 'Home')} />
        <IndexButton text={'DAY 051: Press Page'} onPress={() => navigateToStack('Day051', 'Home')} />
        <IndexButton text={'DAY 052: Logo Design'} onPress={() => navigateToStack('Day052', 'Home')} />
        <IndexButton text={'DAY 053: Header Navigation'} />
        <IndexButton text={'DAY 054: Confirmation'} onPress={() => navigateToStack('Day054', 'Home')} />
        <IndexButton text={'DAY 055: Icon Set'} onPress={() => navigateToStack('Day055', 'Home')} />
        <IndexButton text={'DAY 056: Breadcrumbs'} onPress={() => navigateToStack('Day056', 'Checkout')} />
        <IndexButton text={'DAY 057: Video Player'} onPress={() => navigateToStack('Day057', 'Home')} />
        <IndexButton text={'DAY 058: Shopping Cart'} onPress={() => navigateToStack('Day058', 'Home')} />
        <IndexButton text={'DAY 059: Background Pattern'} onPress={() => navigateToStack('Day059', 'Home')} />
        <IndexButton text={'DAY 060: Color Picker'} onPress={() => navigateToStack('Day060', 'Home')} />
        <IndexButton text={'DAY 061: Redeem Coupon'} onPress={() => navigateToStack('Day061', 'Home')} />
        <IndexButton text={'DAY 062: Workout of the Day'} onPress={() => navigateToStack('Day062', 'Home')} />
        <IndexButton text={'DAY 063: Best Of'} onPress={() => navigateToStack('Day063', 'Home')} />
        <IndexButton text={'DAY 064: Select User Type'} onPress={() => navigateToStack('Day064', 'Home')} />
        <IndexButton text={'DAY 065: Notes Widget'} onPress={() => navigateToStack('Day065', 'Home')} />
        <IndexButton text={'DAY 066: Statistics'} onPress={() => navigateToStack('Day066', 'Home')} />
        <IndexButton text={'DAY 067: Hotel Booking'} onPress={() => navigateToStack('Day067', 'Home')} />
        <IndexButton text={'DAY 068: Flight Search'} onPress={() => navigateToStack('Day068', 'Home')} />
        <IndexButton text={'DAY 069: Trending'} onPress={() => navigateToStack('Day069', 'Home')} />
        <IndexButton text={'DAY 070: Event Listing'} onPress={() => navigateToStack('Day070', 'Home')} />
        <IndexButton text={'DAY 071: Schedule'} onPress={() => navigateToStack('Day071', 'Home')} />
        <IndexButton text={'DAY 072: Image Slider'} onPress={() => navigateToStack('Day072', 'Home')} />
        <IndexButton text={'DAY 073: Virtual Reality'} onPress={() => navigateToStack('Day073', 'Home')} />
        <IndexButton text={'DAY 074: Download App'} onPress={() => navigateToStack('Day074', 'Home')} />
        <IndexButton text={'DAY 075: Pre-Order'} onPress={() => navigateToStack('Day075', 'Home')} />
        <IndexButton text={'DAY 076: Loading'} onPress={() => navigateToStack('Day076', 'Home')} />
        <IndexButton text={'DAY 077: Thank You'} onPress={() => navigateToStack('Day077', 'Home')} />
        <IndexButton text={'DAY 078: Pending Invitation'} onPress={() => navigateToStack('Day078', 'Home')} />
        <IndexButton text={'DAY 079: Itinerary'} onPress={() => navigateToStack('Day079', 'Home')} />
        <IndexButton text={'DAY 080: Date Picker'} onPress={() => navigateToStack('Day080', 'Home')} />
        <IndexButton text={'DAY 081: Status Update'} onPress={() => navigateToStack('Day081', 'Home')} />
        <IndexButton text={'DAY 082: From'} onPress={() => navigateToStack('Day082', 'Home')} />
        <IndexButton text={'DAY 083: Button'} onPress={() => navigateToStack('Day083', 'Home')} />
        <IndexButton text={'DAY 084: Badge'} onPress={() => navigateToStack('Day084', 'Home')} />
        <IndexButton text={'DAY 085: Pagination'} onPress={() => navigateToStack('Day085', 'Home')} />
        <IndexButton text={'DAY 086: Progress'} onPress={() => navigateToStack('Day086', 'Home')} />
        <IndexButton text={'DAY 087: Tooltip'} onPress={() => navigateToStack('Day087', 'Home')} />
        <IndexButton text={'DAY 088: Avatar'} onPress={() => navigateToStack('Day088', 'Home')} />
        <IndexButton text={'DAY 089: Terms of service'} onPress={() => navigateToStack('Day089', 'Home')} />
        <IndexButton text={'DAY 090: Create New'} onPress={() => navigateToStack('Day090', 'Home')} />
        <IndexButton text={'DAY 091: Curated For You'} onPress={() => navigateToStack('Day091', 'Home')} />
        <IndexButton text={'DAY 092: FAQ'} onPress={() => navigateToStack('Day092', 'Home')} />
        <IndexButton text={'DAY 093: Splash Screen'} onPress={() => navigateToStack('Day093', 'Home')} />
        <IndexButton text={'DAY 094: News'} onPress={() => navigateToStack('Day094', 'Home')} />
        <IndexButton text={'DAY 095: Product Tour'} onPress={() => navigateToStack('Day095', 'Home')} />
        <IndexButton text={'DAY 096: Currently In Stock'} onPress={() => navigateToStack('Day096', 'Home')} />
        <IndexButton text={'DAY 097: Giveaway'} onPress={() => navigateToStack('Day097', 'Home')} />
        <IndexButton text={'DAY 098: Advertisement'} onPress={() => navigateToStack('Day098', 'Home')} />
        <IndexButton text={'DAY 099: Categories'} onPress={() => navigateToStack('Day099', 'Home')} />
        <IndexButton text={'DAY 100: Redesign'} onPress={() => navigateToStack('Day100', 'Home')} />

        <View style={{ height: 20 }} />
      </ScrollView>


    </View>
  );
}

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  if (isLoading)
    return <LoadingScreen />

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;