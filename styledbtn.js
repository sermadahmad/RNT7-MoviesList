import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default ColoredButton = ({ data }) => (
  <View style={{ alignItems: 'center', margin: 5 }}>
    <TouchableOpacity
      style={{
        backgroundColor: data.bgclr,
        borderRadius: 5,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3
      }}>
      <Text
        style={{
          color: data.clr,
          fontSize: 9,
          padding: 6,
        }}>
        {data.title}
      </Text>
    </TouchableOpacity>
  </View>
);
