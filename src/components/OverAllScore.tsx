import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OverAllScore: React.FC = () => {
  return (
    <View style={styles.topContainer}>
      <View
        style={{
          ...styles.topInner,
          borderRightWidth: 1,
          borderRightColor: 'lightgrey',
        }}>
        <Text style={styles.title}>Nutri-Score</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.grade}>A</Text>
          <Text style={styles.score}>90/100</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.topInner,
          borderRightWidth: 1,
          borderRightColor: 'lightgrey',
        }}>
        <Text style={styles.title}>Glycemic Load</Text>
        <View
          style={{
            backgroundColor: '#FBF2FD',
            width: 48,
            alignSelf: 'center',
            borderRadius: 8,
          }}>
          <Text style={{...styles.score, textAlign: 'center'}}>GL 5</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.topInner,
          backgroundColor: '#FBF2FD',
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}>
        <Text style={styles.title}>Get Insight</Text>
        <View>
          <AntDesign
            name='arrowright'
            size={18}
            color={colors.primary}
            style={styles.labelArrows}
          />
        </View>
      </View>
    </View>
  );
};

export default OverAllScore;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    marginVertical: 16,

    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    height: 80,
  },
  topInner: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex: 1,
  },
  labelArrows: {
    alignSelf: 'flex-end',
    backgroundColor: colors.arrowIconBackground,
    borderRadius: 50,
    padding: 4,
  },
  title: {
    color: colors.text_black,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  grade: {
    backgroundColor: colors.primary,
    color: colors.text_white,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 12,
  },
  score: {
    color: colors.primary,
    fontSize: 14,
  },
});
