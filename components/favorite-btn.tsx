import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import emptyHeart from '../assets/images/empty-heart.png';
import filledHeart from '../assets/images/heart.png';

const FavoriteButton = ({ favorited, onPress }) => {

  return (
    <Pressable onPress={onPress}>
      <Image 
        source={ favorited ? filledHeart : emptyHeart }
        style={styles.heart}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({

  heart: {
    width: 22,
    height: 18,
    marginLeft: 10,
    zIndex: 1
  },

});

export default FavoriteButton;
