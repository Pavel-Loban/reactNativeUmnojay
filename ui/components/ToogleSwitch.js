import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../assets/styles';
import { Switch } from 'react-native-switch';



export const ToogleSwitch = (props) => {



  const { value, onToogleSwitch } = props;


  return (

    <View >

<Switch
    value={value}
    onValueChange={onToogleSwitch}
    disabled={false}
    // activeText={'On'}
    // inActiveText={'Off'}
    circleSize={30}
    barHeight={30}
    circleBorderWidth={1}
    backgroundActive={'gray'}
    // backgroundInactive={}
    circleActiveColor={'white'}
    circleInActiveColor={COLORS.pink}



    // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
    outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={false}
    renderInActiveText={false}
    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
    switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
    switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  />


    </View>


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
