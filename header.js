import ColoredButton from './styledbtn';
import React from 'react';
import {View} from 'react-native';


export default Header = ({data}) => {
  return (
    <View style = {{flexDirection:'row'}}>
      <ColoredButton data = {data[0]}/>
      <ColoredButton data = {data[1]}/>
      <ColoredButton data = {data[2]}/>
    </View>
  );
};
