//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';

interface Header_3Props {
  backPress?: () => void;
  img?: any;
  cal?: string;
  text?: string;
}

// create a component
const Header_3: React.FC<Header_3Props> = ({backPress, img, cal, text}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back-outline"
        size={34}
        color="black"
        onPress={backPress}
        style={styles.backPress}
      />

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  backPress: {
    marginTop: 25,
    marginLeft: 16,
    marginBottom: 14,
  },
  text: {
    marginLeft: 16,
    
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 29,
    color: colors.text_black,
  },
});

//make this component available to the app
export default Header_3;
