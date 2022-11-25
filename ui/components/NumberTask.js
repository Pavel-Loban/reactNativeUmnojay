import React from 'react';
import { TouchableOpacity, StyleSheet,Dimensions, Text, View } from 'react-native';
import { COLORS } from '../../assets/styles';
import { useSelector } from 'react-redux';



export const NumberTask = (props) => {

  const { title, onPress } = props;
  const {taskBattons} = useSelector((state) => state.logika);
const currentTaskButton = taskBattons[title];

  return (
    // <View>
    <TouchableOpacity onPress={onPress} style={currentTaskButton ? styles.wrapper : styles.taskWrapper   } >

      <Text style={styles.title} >{title}</Text>


    </TouchableOpacity>
    // </View>

  );
};

const styles = StyleSheet.create({

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.pink,
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 20,
  },
  taskWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.yellow,
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },


});
