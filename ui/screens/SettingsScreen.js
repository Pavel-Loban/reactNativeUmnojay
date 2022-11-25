import React from 'react';
import {
  SafeAreaView,  Image, StyleSheet, Dimensions, Text,
   View
} from 'react-native';
import { ToogleSwitch } from '../components/ToogleSwitch';
import { COLORS } from '../../assets/styles';
import settings from '../../assets/images/settings.png';
import { StartButton } from '../components/StartButton';
import { setHurd, setForSpeed,setTimer, setCurrentQuestions, setAnswers } from '../../bll/logikaSlise';
import { useSelector, useDispatch } from 'react-redux';

export const SettingsScreen = (props) => {

  const {navigation} = props

  const dispatch = useDispatch();
  const { forSpeed, hurd,answers,timer } = useSelector((state) => state.logika)
  console.log(timer)
  const ToogleHurd = () => {
    dispatch(setHurd(!hurd))
    // console.log(hurd)
  }

  const ToogleSpeed = () => {
    dispatch(setForSpeed(!forSpeed))
  }

  const onStartTest = () => {
    dispatch(setCurrentQuestions(1))
    // dispatch(setTimer(2))
    navigation.navigate("Task", {screen: "TaskScreen", initiale: false})
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleBlock}>

        <Image
          style={styles.logo}
          source={settings}
        />
        <Text style={styles.title} >Настройки</Text>
      </View>
      <View style={styles.switchBlock}>
        <View style={styles.switchWrapper}>
          <Text style={styles.title}>1 мин</Text>
          <ToogleSwitch  onToogleSwitch={ToogleHurd} value={hurd} />
          <Text style={styles.title}> 30 сек</Text>
        </View>

        <View style={styles.switchWrapper}>
        <Text style={styles.title}>без таймера</Text>
        <ToogleSwitch onToogleSwitch={ToogleSpeed} value={forSpeed} />
        <Text style={styles.title}>с таймером</Text>
        </View>
      </View>
      <View style={styles.btnsBlock}>
      <StartButton title='Начать тренировку' icon={'test'} onPress={onStartTest} />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.green,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems:'center',
    height: Dimensions.get('window').height,
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  switchBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height * .2,
    width: Dimensions.get('window').width * .9,
  },
  switchWrapper:{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * .9,
  }

});