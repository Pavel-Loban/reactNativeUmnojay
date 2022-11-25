import React from 'react';
import {TouchableOpacity,StyleSheet,Text} from 'react-native';
import {COLORS} from '../../assets/styles'


export const AnswerButton = (props) => {

    const {title,onPress, isDisabled} = props;

  return (
        <TouchableOpacity onPress={onPress} style={isDisabled ? styles.disabledWrapper : styles.wrapper} disabled={isDisabled} >
       <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  wrapper: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: COLORS.yellow,
    width: 220,
    height: 80,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
  disabledWrapper: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'grey',
    width: 220,
    height: 80,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
    opacity: 0.5,
  },


});
