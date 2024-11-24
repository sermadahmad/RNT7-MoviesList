import React from 'react';
import { View } from 'react-native';
import MovieCard from './movieCard';

const MoviesSection = () => {
  return (
    <View>
      {moviesdata.map((movie, index) => (
        <>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'black',
            }}
          />
          <MovieCard key={index} movieData={movie} />
        </>
      ))}
    </View>
  );
};
export default MoviesSection;

const moviesdata = [
  {
    poster: require('./img.webp'),
    title: 'Prognosis Negative',
    rating: ' 2.66',
    ageRating: 'PG-13',
    releaseYear: '2021',
    genre: 'Comedy',
    duration: '1h 46m',
    cast: ['Simon Pegg', 'Zach Galifianakis'],
  },
  {
    poster: require('./img.webp'),
    title: 'Rochelle, Rochelle',
    rating: '3.25',
    ageRating: 'R',
    releaseYear: '2020',
    genre: 'Romance',
    duration: '1h 56m',
    cast: ['Emilia Clarke'],
  },
  {
    poster: require('./img.webp'),
    title: 'Death Blow',
    rating: '4.95',
    ageRating: '18A',
    releaseYear: '2020',
    genre: 'Action',
    duration: '2h 5m',
    cast: ['Idris Elba', 'John Cena', 'Thandiwe Newton'],
  },
];
