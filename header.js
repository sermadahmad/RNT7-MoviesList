import ColoredButton from './styledbtn';
import React from 'react';
import {View} from 'react-native';


export default Header = ({buttons}) => {
  return (
    <View style = {{padding: 10, flexDirection:'row'}}>
      {buttons.map((button, index) => (
        <ColoredButton key = {index} buttonData={button} />
      ))}
    </View>
  );
};
