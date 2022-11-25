import React from 'react';
import {SafeAreaView,StyleSheet,Dimensions,Image, Text, View} from 'react-native';
import { StartButton } from '../components/StartButton';
import settings from '../../assets/images/settings.png';
import { COLORS } from '../../assets/styles';
import {setCurrentQuestions } from '../../bll/logikaSlise';
import { useDispatch } from 'react-redux';

export const HomeScreen = (props) => {

  const dispatch = useDispatch();

  const { navigation } = props;
  const onPresLearn = () => {
    navigation.navigate('Learn')
  }

  const onPresSettings = () => {
    navigation.navigate('Settings')
  }

  const onPresTest = () => {
    dispatch(setCurrentQuestions(1))
    navigation.navigate("Task", {screen: "TaskScreen", initiale: false})
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleBlock}>
      <Image
        style={styles.logo}
        source={settings}
      />
        <Text style={styles.title} >Таблица умножения</Text>
        <Text style={styles.title}>(тренажер)</Text>
      </View>
      <View style={styles.btnBlock}>
        <StartButton title='Учить' icon={'book'} onPress={onPresLearn} ></StartButton>
        <StartButton title='Настройки' icon={'settings'} onPress={onPresSettings}></StartButton>
        <StartButton title='Тренироваться' icon={'test'} onPress={onPresTest}></StartButton>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.green,
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    alignItems:'center',
    height:Dimensions.get('window').height,
  },
  titleBlock: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  logo:{
    width: 80,
    height:80,
  },
  btnBlock: {
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    alignItems:'center',
    height:Dimensions.get('window').height *.5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  }

});

