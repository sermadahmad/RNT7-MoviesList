import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import Header from './header';
import ColoredButton from './styledbtn';

const data = [
  { bgclr: 'blue', clr: 'white', title: 'New Releases' },
  { bgclr: 'white', clr: 'black', title: 'Top Rated' },
  { bgclr: 'white', clr: 'black', title: "Vincent's Pick's" },
];

// const App = () => {
//   return (
//     <View style={{ marginTop: 50 }}>
//       <Header data={data} />

//     </View>
//   );
// };

const src =
  'https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-upscale-after.webp';

const MovieCard = () => (
  <View style = {styles.mainBox}>
    <View>
      <Image style = {styles.img}  source = {{uri: src}}/>
    </View>
    <View style = {styles.contentBox}>
      <View style = {styles.titleBox}> 
        <Text>Prognosis Negative </Text>
        <Text>2.66 </Text>
      </View>
    
    </View>  
  </View>
);
export default MovieCard;

const styles = StyleSheet.create({
  mainBox:{
    flexDirection: 'row',
    padding:10,
  },
  img:{
    width: 50, 
    height: 100,
    borderRadius:10,
  },
  titleBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  contentBox:{
    
  },
  
});
