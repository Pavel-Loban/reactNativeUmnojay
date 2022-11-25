import React from 'react';
import {
  SafeAreaView, Dimensions, StyleSheet, Text, View
} from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../../assets/styles';
import { number15 } from '../../assets/data/data';

export const ResultScreen = () => {

  const {answers, firstMultiplier, secondMultiplier} = useSelector((state) => state.logika);

  const correctAnswerArr = [];
  number15.map((item) => {
    if(answers[item] !== ''){
      const currentAnswerCorrect = +firstMultiplier[item] * (+secondMultiplier[item]) === +answers[item] ? true : false ;
    currentAnswerCorrect && correctAnswerArr.push(item);
    }

    return item;
  })
  const correctAnswer = correctAnswerArr.length;



  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}> Твой результат {correctAnswer} верных ответов</Text>
      </View>
      <View style={styles.contentBlock}>
      {number15.map((item) => {

const currentAnswerCorrect = +firstMultiplier[item] * (+secondMultiplier[item]) === +answers[item] ? true : false ;

        return (<View style={styles.itemBlock} key={item}>
        <Text style={styles.title} >{firstMultiplier[item]} x  </Text>
        <Text style={styles.title}>{secondMultiplier[item]} = </Text>
        <Text style={currentAnswerCorrect ? styles.answersCorrect : styles.answersNotCorrect}>{answers[item]}</Text>
      </View>)
      }
      )}
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
  titleBlock: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  answersCorrect: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
  },
  answersNotCorrect: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  contentBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * .8,
  },
  itemBlock: {
    display: 'flex',
    flexDirection: 'row',
  }

});
