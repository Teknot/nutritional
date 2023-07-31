import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputComponent from './InputComponent';
import {colors} from '../utils/colors';

type Header2Props = {
  backPress?: () => void;
  type: number;
  bgColor: string;
  icon1Press?: () => void;
  icon2Press?: () => void;
  text?: string;
  value?: string;
  onChange?: any;
};

const Header2: FC<Header2Props> = ({
  backPress,
  type,
  bgColor,
  icon1Press,
  icon2Press,
  text,
  value,
  onChange,
}) => {
  return (
    <View style={{...styles.container, backgroundColor: bgColor}}>
      <Ionicons
        name='arrow-back-outline'
        size={34}
        color='white'
        onPress={backPress}
        style={styles.backPress}
      />

      {type === 1 && (
        <>
          <Text style={styles.upperText}>Log In Meals</Text>

          <View style={styles.inputContainer}>
            <InputComponent
              placeholder='Search food or brand'
              onChangeText={onChange}
              value={value}
            />
            <Pressable style={styles.icons} onPress={icon1Press}>
              <Image
                source={require('../assets/img1.png')}
                style={{width: 16, height: 16}}
                resizeMode='contain'
              />
            </Pressable>
            <View style={styles.icons}>
              <Image
                source={require('../assets/heart.png')}
                style={{width: 16, height: 16}}
                resizeMode='contain'
              />
            </View>
            <Pressable style={styles.icons} onPress={icon2Press}>
              <Image
                source={require('../assets/rx.png')}
                style={{width: 16, height: 16}}
                resizeMode='contain'
              />
            </Pressable>
          </View>
        </>
      )}

      {type === 2 && (
        <>
          <View style={styles.type2Container}>
            <Text style={styles.type2UpperText}>{text}</Text>
            <View style={{...styles.icons, width: 40, height: 40}}>
              <Image
                source={require('../assets/heart.png')}
                style={{width: 20, height: 20}}
                resizeMode='contain'
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
  },
  backPress: {
    marginTop: 25,
    marginLeft: 16,
    marginBottom: 14,
  },
  upperText: {
    color: colors.text_white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 16,
  },
  icons: {
    backgroundColor: colors.background,
    height: 48,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  type2Container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  type2UpperText: {
    color: colors.text_white,
    fontSize: 26,
    fontWeight: '500',
  },
});
