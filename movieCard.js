import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MovieCard = ({
  movieData: {
    poster,
    title,
    rating,
    ageRating,
    releaseYear,
    genre,
    duration,
    cast,
  },
}) => (
  <View style={styles.mainBox}>
    <View style={styles.imgBox}>
      <Image style={styles.img} source={poster} />
    </View>
    <View style={styles.contentBox}>
      <View style={styles.titleBox}>
        <Text style={[styles.title, styles.smallText]}>{title}</Text>
        <View style={styles.ratingBox}>
          <FontAwesome name="star" size={12} color="blue" />
          <Text style={styles.smallText}>{rating}</Text>
        </View>
      </View>
      <View style={styles.detailBox}>
        <Text style={[styles.smallText, styles.pg]}>{ageRating}</Text>
        <Text style={styles.smallText}>{releaseYear}</Text>
        <Text style={styles.separater}>●</Text>
        <Text style={styles.smallText}>{genre}</Text>
        <Text style={styles.separater}>●</Text>
        <Text style={styles.smallText}>{duration}</Text>
      </View>
      <View style={styles.actorsBox}>
        <Text style={styles.smallText}>{cast.join(', ')}</Text>
      </View>
    </View>
  </View>
);
export default MovieCard;

const styles = StyleSheet.create({
  actorsBox: {
    margin: 5,
  },
  separater: {
    fontSize: 9,
  },
  pg: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
  smallText: {
    fontSize: 12,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainBox: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
  imgBox: {
    margin: 5,
  },
  img: {
    width: 50,
    height: 80,
    borderRadius: 10,
  },
  contentBox: {
    margin: 5,
    flex: 1,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  detailBox: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    gap: 5,
  },
});
