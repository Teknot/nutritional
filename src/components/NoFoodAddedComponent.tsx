import {StyleSheet, Text, View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const NoFoodAddedComponent = () => {
  return (
    <View style={styles.noFoodAddedContainer}>
      <Image
        source={require('../assets/no-food-img.png')}
        style={styles.noFoodAddedImage}
        resizeMode='contain'
      />
      <Text style={styles.noFoodAddedText}>No Food Added Yet</Text>
    </View>
  );
};

export default NoFoodAddedComponent;

const styles = StyleSheet.create({
  noFoodAddedContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  noFoodAddedImage: {
    marginRight: 20,
  },
  noFoodAddedText: {
    color: colors.text_black,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
