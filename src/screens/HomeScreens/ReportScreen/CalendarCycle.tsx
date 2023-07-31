import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import CycleInfo from './CycleInfo';
import Top10Symptoms from './Top10Symptoms';
import CycleChart from './CycleCharts';

const CalendarCycle: React.FC = () => {
  let dummyDate = new Date().getDate();
  let date = dummyDate < 10 ? '0' + dummyDate : dummyDate.toString();

  return (
    <View style={styles.container}>
      <CycleInfo
        date={date}
        title='See Cycle Information'
        desc='CD27 - Periods in 1 day'
      />

      <CycleChart />

      <Top10Symptoms />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
});

export default CalendarCycle;
