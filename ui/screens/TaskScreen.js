import React from 'react';
import {
  SafeAreaView, Dimensions, StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../assets/styles'
import { NumberTask } from '../components/NumberTask';
import { StartButton } from '../components/StartButton';
import { setTasckBattons, setSecondMultiplier, setFirstMultiplier } from '../../bll/logikaSlise';
import { useSelector, useDispatch } from 'react-redux';
import { number10 } from '../../assets/data/data';

export const TaskScreen = (props) => {

  const { navigation } = props

  const dispatch = useDispatch();
  const { taskBattons } = useSelector((state) => state.logika);

  const onPressNumberButton = (number) => {

    const updateState = { ...taskBattons };
    updateState[number] = !updateState[number];
    dispatch(setTasckBattons(updateState))

  }

  const onPressStartTest = () => {

    navigation.navigate("Task", { screen: "TestScreen", initial: false })

    const selectNumbersArray = [];

    number10.map((item) => {
      taskBattons[item] === true && selectNumbersArray.push(item)
      return item;
    });

    const updatedFirstMultiplier = {
      1: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      2: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      3: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      4: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      5: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      6: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      7: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      8: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      9: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      10: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      11: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      12: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      13: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      14: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
      15: selectNumbersArray[Math.floor(Math.random() * selectNumbersArray.length)],
    }
    dispatch(setFirstMultiplier(updatedFirstMultiplier))

    const updatedSecondtMultiplier = {
      1: Math.floor(Math.random() * number10.length + 1),
      2: Math.floor(Math.random() * number10.length + 1 ),
      3: Math.floor(Math.random() * number10.length + 1),
      4: Math.floor(Math.random() * number10.length + 1),
      5: Math.floor(Math.random() * number10.length + 1),
      6: Math.floor(Math.random() * number10.length + 1),
      7: Math.floor(Math.random() * number10.length + 1),
      8: Math.floor(Math.random() * number10.length + 1),
      9: Math.floor(Math.random() * number10.length + 1),
      10: Math.floor(Math.random() * number10.length + 1),
      11: Math.floor(Math.random() * number10.length + 1),
      12: Math.floor(Math.random() * number10.length + 1),
      13: Math.floor(Math.random() * number10.length + 1),
      14: Math.floor(Math.random() * number10.length + 1),
      15: Math.floor(Math.random() * number10.length + 1),
    }
    dispatch(setSecondMultiplier(updatedSecondtMultiplier))

  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleBlock}>
        <Text style={styles.title} >Выберите числа для теста</Text>
      </View>
      <View style={styles.tableBlock}>
        <View style={styles.row}>
          <NumberTask title={'1'} onPress={() => { onPressNumberButton(1) }} />
          <NumberTask title={'2'} onPress={() => { onPressNumberButton(2) }} />
          <NumberTask title={'3'} onPress={() => { onPressNumberButton(3) }} />
        </View>
        <View style={styles.row}>
          <NumberTask title={'4'} onPress={() => { onPressNumberButton(4) }} />
          <NumberTask title={'5'} onPress={() => { onPressNumberButton(5) }} />
          <NumberTask title={'6'} onPress={() => { onPressNumberButton(6) }} />
        </View>
        <View style={styles.row}>
          <NumberTask title={'7'} onPress={() => { onPressNumberButton(7) }} />
          <NumberTask title={'8'} onPress={() => { onPressNumberButton(8) }} />
          <NumberTask title={'9'} onPress={() => { onPressNumberButton(9) }} />
        </View>
        <View style={styles.row}>
          <NumberTask title={'10'} onPress={() => { onPressNumberButton(10) }} />
        </View>
      </View>

      <View style={styles.btnsBlock}>
        <StartButton title='Начать тестирование' icon='rocket' onPress={onPressStartTest} />
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
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  tableBlock: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: 130,
    marginBottom: 90,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 5,
    width: Dimensions.get('window').width,
  }

});
