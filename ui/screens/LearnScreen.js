import React from 'react';
import {SafeAreaView,StyleSheet, Text,Dimensions, View} from 'react-native';
import { COLORS } from '../../assets/styles';
import { data } from '../../assets/data/data';
import { NumberButton } from '../components/NumberButton';
import { useSelector,useDispatch } from 'react-redux';
import {setCurrentNumber} from '../../bll/logikaSlise'

export const LearnScreen = () => {

  const dispatch = useDispatch();
  const {currentNumber} = useSelector((state) => state.logika)

  const onPressNumberButton = (number) => {

    dispatch(setCurrentNumber(number))
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>{currentNumber} x</Text>
      <View style={styles.tableBlock}>
        {data[currentNumber].map((item) => <Text style={styles.title} key={item}>{item}</Text>)}
      </View>
      <View style={styles.btnsBlock}>
        <View style={styles.row}>
          <NumberButton onPress={() => {onPressNumberButton(1) }} title={'1'} />
          <NumberButton onPress={() => {onPressNumberButton(2) }} title={'2'} />
          <NumberButton onPress={() => {onPressNumberButton(3) }} title={'3'} />
          <NumberButton onPress={() => {onPressNumberButton(4) }} title={'4'} />
          <NumberButton onPress={() => {onPressNumberButton(5) }} title={'5'} />
        </View>
        <View style={styles.row}>
          <NumberButton onPress={() => {onPressNumberButton(6) }} title={'6'} />
          <NumberButton onPress={() => {onPressNumberButton(7) }} title={'7'} />
          <NumberButton onPress={() => {onPressNumberButton(8) }} title={'8'} />
          <NumberButton onPress={() => {onPressNumberButton(9) }} title={'9'} />
          <NumberButton onPress={() => {onPressNumberButton(10) }} title={'10'} />
        </View>
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
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    width: Dimensions.get('window').width,
  }
});

