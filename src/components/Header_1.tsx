import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import {colors} from '../utils/colors';

interface Header_1Props {
  backPress?: () => void;
  img?: any;
  cal?: string;
  text?: string;
}

const Header_1: React.FC<Header_1Props> = ({backPress, img, cal, text}) => {
  return (
    <View>
      <ImageBackground
        source={img}
        style={styles.headerImage}
        resizeMode='cover'>
        <Ionicons
          name='arrow-back-outline'
          size={34}
          color='white'
          onPress={backPress}
          style={styles.backPress}
        />

        <View style={styles.leftContainer}>
          <Text style={styles.quantity}>{cal}</Text>
          <Text style={styles.title} numberOfLines={2}>
            {text}
          </Text>
          <Progress.Bar
            progress={0.7}
            width={180}
            height={10}
            borderWidth={2}
            borderColor='transparent'
            borderRadius={20}
            color={'white'}
            unfilledColor='rgba(255,255,255,0.5)'
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header_1;

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 260,
  },
  backPress: {
    marginTop: 25,
    marginLeft: 16,
    marginBottom: 14,
  },
  leftContainer: {
    width: '50%',
    marginLeft: 16,
    marginTop: 30,
  },
  quantity: {
    color: colors.text_white,
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    color: colors.text_white,
    fontSize: 28,
    lineHeight: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
