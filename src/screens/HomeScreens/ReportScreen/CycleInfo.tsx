import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import DateCalendar from '../../../assets/DateCalendar.png';
import NextButton from '../../../assets/next.png';

interface CycleInfo_Props {
  date?: string;
  title?: string;
  desc?: string;
}

const CycleInfo: React.FC<CycleInfo_Props> = ({date, title, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={{position: 'relative'}}>
          <Image source={DateCalendar} style={styles.calendarImage} />
          <Text style={styles.calendarText}>{date}</Text>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      <View>
        <Image
          source={NextButton}
          resizeMode='contain'
          style={styles.nextImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 12,
    // elevation:5,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    
    fontSize: 14,
    color: colors.text_white,
    fontWeight: '600',
  },
  desc: {
    
    fontSize: 12,
    color: colors.text_white,
    fontWeight: '400',
  },
  calendarImage: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  calendarText: {
    color: colors.text_white,
    fontSize: 11,
    fontWeight: '600',
    position: 'absolute',
    bottom: 8,
    left: 13,
  },
  nextImage: {
    width: 24,
    height: 40,
  },
});

export default CycleInfo;
