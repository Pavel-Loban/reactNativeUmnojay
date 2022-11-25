import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../assets/styles'


export const NumberButton = (props) => {

  const { title, onPress } = props;


  return (
    // <View>
    <TouchableOpacity onPress={onPress} style={styles.wrapper} >

      <Text style={styles.title} >{title}</Text>


    </TouchableOpacity>
    // </View>

  );
};

const styles = StyleSheet.create({

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    width: 75,
    height: 60,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
