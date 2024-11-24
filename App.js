import React from 'react';
import { View } from 'react-native';
import Header from './header';
import MovieSection from './movieSection';
import buttons from './buttons';

const App = () => {
  return (
    <View
      style={{
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 5,
        margin: 10,
        borderRadius: 10,
      }}>
      <Header buttons={buttons} />
      <MovieSection />
    </View>
  );
};
export default App;
