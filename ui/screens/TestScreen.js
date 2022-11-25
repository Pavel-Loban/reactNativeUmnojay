import React from 'react';
import {
  SafeAreaView, Dimensions, StyleSheet, Text,View, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from '../../assets/styles';
import clock from '../../assets/images/clock.png';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import { setTimer, setCurrentAnswer, setCurrentQuestions, setAnswers } from '../../bll/logikaSlise';
import { NumberButtonForAnswer } from '../components/NumberButtonForAnswer';
import { ClearButton } from '../components/ClearButton';
import { AnswerButton } from '../components/AnswerButton copy';
import { ArrowButton } from '../components/ArrowButton copy';

export const TestScreen = (props) => {

  const {navigation, isDisabled} = props;
  const [currentAnswerDone,setCurrentAnswerDone ] = React.useState(false);
  const { timer, forSpeed, hurd, currentQuestions, currentAnswer, firstMultiplier, secondMultiplier, answers } = useSelector((state) => state.logika);
  const dispatch = useDispatch();

  React.useEffect(() => {
    hurd ? dispatch(setTimer(30)) : dispatch(setTimer(60))

  }, [hurd])

  React.useEffect(() => {
    if (forSpeed && timer > -1) {
      const timer2 = setInterval(() => {
        dispatch(setTimer(timer - 1))
      }, 1000);
      console.log('timer2 :',timer2)
      console.log('timer :',timer)
      return () => clearInterval(timer2);
    }
  }, [timer,forSpeed])


  React.useEffect(() => {
   const  currentAnswerIsDone = answers[currentQuestions] !== '' ? true : false;
   setCurrentAnswerDone(currentAnswerIsDone)
  },[answers, currentQuestions])


  const answersDone = Object.values(answers).every(item =>
    item !== '')

  React.useEffect(() => {
    if (forSpeed && hurd && (timer === 0 || answersDone)) {
      navigation.navigate("Task", {screen: "ResultScreen", initiale: false})
      dispatch(setTimer(0))
    } else if (forSpeed && !hurd && timer === 0 || answersDone) {
      navigation.navigate("Task", {screen: "ResultScreen", initiale: false})
    }
    else if (!forSpeed) {
      if(answersDone){
          navigation.navigate("Task", {screen: "ResultScreen", initiale: false})
        }
      console.log(Object.values(answers))
    }
  }, [timer,forSpeed,answers])

  const onPressNumberForAnswerButton = (number) => {
    dispatch(setCurrentAnswer(currentAnswer.concat(number)))
  }

  const onPressClearNumber = () => {
    dispatch(setCurrentAnswer(currentAnswer.slice(0, -1)))
  }


  const onPressAnswer = () => {
    const updateAnswers = { ...answers };
    updateAnswers[currentQuestions] = currentAnswer;
    dispatch(setAnswers(updateAnswers));
    dispatch(setCurrentAnswer(''));

    if (currentQuestions === 15) {
      dispatch(setCurrentQuestions(15))
    }else {
      dispatch(setCurrentQuestions(currentQuestions + 1))
    }
  }

  const nextQuestions = () => {
    if (currentQuestions < 15) {
      dispatch(setCurrentQuestions(currentQuestions + 1))
      dispatch(setCurrentAnswer(''))
    } else if (currentQuestions === 15) {
      dispatch(setCurrentQuestions(15))
      dispatch(setCurrentAnswer(''))
    }
  }

  const previouseQuestions = () => {
    if (currentQuestions > 1) {
      dispatch(setCurrentQuestions(currentQuestions - 1))
      dispatch(setCurrentAnswer(''))
    } else if (currentQuestions === 1) {
      dispatch(setCurrentQuestions(1))
      dispatch(setCurrentAnswer(''))
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleBlock}>


          <View style={styles.timerBlock}>
          {forSpeed && <Image
              style={styles.logo}
              source={clock}
            />}
            {forSpeed && <Text style={styles.timer}>{timer}</Text>}
          </View>


        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}> {currentQuestions} из 15</Text>
        </View>
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.titleText}  >{firstMultiplier[currentQuestions]} x {secondMultiplier[currentQuestions]} = { currentAnswerDone ? answers[currentQuestions] : currentAnswer}</Text>
      </View>

      <View style={styles.btnWrapper}>
        <View style={styles.btnsBlock}>
          <View style={styles.row}>
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(1) }} title={'1'} />
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(2) }} title={'2'} />
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(3) }} title={'3'} />
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(4) }} title={'4'} />
            <NumberButtonForAnswer style={styles.number} onPress={() => { onPressNumberForAnswerButton(5) }} title={'5'} />
          </View>
          <View style={styles.row}>
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(6) }} title={'6'} />
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(7) }} title={'7'} />
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(8) }} title={'8'} />
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(9) }} title={'9'} />
            <NumberButtonForAnswer onPress={() => { onPressNumberForAnswerButton(0) }} title={'0'} />
          </View>
        </View>
        <View style={styles.second}>
          <ClearButton onPress={onPressClearNumber} />
        </View>
      </View>
      <View style={styles.answerWrapper}>
        <View>
          <ArrowButton onPress={previouseQuestions} direction={left} />
        </View>
        <View>
          <AnswerButton onPress={onPressAnswer} title='Ответить' isDisabled={currentAnswerDone ? true : false} />
        </View>
        <View>
          <ArrowButton onPress={nextQuestions} direction={right} />
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
  timerBlock: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width * .25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  titleWrapper: {
    width: Dimensions.get('window').width * .6,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
  tableBlock: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * .5,
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 150,
    width: Dimensions.get('window').width,
  },
  btnsBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: 130,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    width: Dimensions.get('window').width * .8,
  },
  logo: {
    width: 50,
    height: 40,
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  timer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.pink,
    marginTop: 15,
  },
  second: {

  },
  answerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    height: 150,
    width: Dimensions.get('window').width,
  },


});
