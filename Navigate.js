import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './ui/screens/HomeScreen';
import { LearnScreen } from './ui/screens/LearnScreen';
import { SettingsScreen } from './ui/screens/SettingsScreen';
import { TaskScreen } from './ui/screens/TaskScreen';
import book from './assets/images/book.png';
import task from './assets/images/task.png';
import settings from './assets/images/settings.png';
import home from './assets/images/home.png';
import { ResultScreen } from './ui/screens/ResultScreen';
import { TestScreen } from './ui/screens/TestScreen';
import { COLORS } from './assets/styles';
import { useDispatch } from 'react-redux';
import { setAnswers, setCurrentQuestions,setTimer } from './bll/logikaSlise';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export const Navigate = () => {

  const dispatch = useDispatch();

  const TestBlock = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }


  return (

    <NavigationContainer>
      {/* <ScrollView> */}
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarStyle: { position: 'absolute', backgroundColor: COLORS.green },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                style={focused ? styles.hoverTinyLogo : styles.tinyLogo}
                source={home}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              dispatch(setAnswers(
                {
                  1: '',
                  2: '',
                  3: '',
                  4: '',
                  5: '',
                  6: '',
                  7: '',
                  8: '',
                  9: '',
                  10: '',
                  11: '',
                  12: '',
                  13: '',
                  14: '',
                  15: '',
                }
              ))
            },
          })}
        />
        <Tab.Screen
          name="Learn"
          component={LearnScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                style={focused ? styles.hoverTinyLogo : styles.tinyLogo}
                source={book}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              dispatch(setAnswers(
                {
                  1: '',
                  2: '',
                  3: '',
                  4: '',
                  5: '',
                  6: '',
                  7: '',
                  8: '',
                  9: '',
                  10: '',
                  11: '',
                  12: '',
                  13: '',
                  14: '',
                  15: '',
                }
              )),
              dispatch(setTimer(-1))
            },
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                style={focused ? styles.hoverTinyLogo : styles.tinyLogo}
                source={settings}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              dispatch(setAnswers(
                {
                  1: '',
                  2: '',
                  3: '',
                  4: '',
                  5: '',
                  6: '',
                  7: '',
                  8: '',
                  9: '',
                  10: '',
                  11: '',
                  12: '',
                  13: '',
                  14: '',
                  15: '',
                }
              ))
              dispatch(setTimer(-1))
            },
          })}
        />
        <Tab.Screen
          name="Task"
          component={TestBlock}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                style={focused ? styles.hoverTinyLogo : styles.tinyLogo}
                source={task}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              dispatch(setAnswers(
                {
                  1: '',
                  2: '',
                  3: '',
                  4: '',
                  5: '',
                  6: '',
                  7: '',
                  8: '',
                  9: '',
                  10: '',
                  11: '',
                  12: '',
                  13: '',
                  14: '',
                  15: '',
                }
              )),
              dispatch(setCurrentQuestions(1)),
              dispatch(setTimer(-1))
              navigation.navigate("Task", { screen: "TaskScreen", initial: false })
            },
          })}
        />

      </Tab.Navigator>
      {/* </ScrollView> */}
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.green,
    borderRadius: 10,
  },
  hoverTinyLogo: {
    backgroundColor: 'pink',
    width: 50,
    height: 50,
    borderRadius: 10,
  }

});
