import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default ColoredButton = ({ buttonData: {bgclr, clr, title} }) => (
  <View style={{ alignItems: 'center', margin: 5 }}>
    <TouchableOpacity
      style={{
        backgroundColor: bgclr,
        borderRadius: 5,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3
      }}>
      <Text
        style={{
          color: clr,
          fontSize: 9,
          padding: 6,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);
