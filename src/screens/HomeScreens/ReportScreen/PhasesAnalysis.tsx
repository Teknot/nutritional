import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import CycleInfo from './CycleInfo';
import AvgLengthComp from './AvgLengthComp';

const monthsObject1 = [
  {
    month: 'Jan',
    length: 28,
  },
  {
    month: 'Feb',
    length: 26,
  },
  {
    month: 'Mar',
    length: 28,
  },
  {
    month: 'Apr',
    length: 27,
  },
  {
    month: 'May',
    length: 27,
  },
  {
    month: 'Jun',
    length: 29,
  },
  {
    month: 'July',
    length: 28,
  },
  {
    month: 'Aug',
    length: 28,
  },
  {
    month: 'Sep',
    length: 29,
  },
  {
    month: 'Oct',
    length: 27,
  },
  {
    month: 'Nov',
    length: 28,
  },
  {
    month: 'Dec',
    length: 28,
  },
];
const monthsObject2 = [
  {
    month: 'Jan',
    length: 5,
  },
  {
    month: 'Feb',
    length: 4,
  },
  {
    month: 'Mar',
    length: 4,
  },
  {
    month: 'Apr',
    length: 5,
  },
  {
    month: 'May',
    length: 4,
  },
  {
    month: 'Jun',
    length: 5,
  },
  {
    month: 'July',
    length: 5,
  },
  {
    month: 'Aug',
    length: 5,
  },
  {
    month: 'Sep',
    length: 5,
  },
  {
    month: 'Oct',
    length: 4,
  },
  {
    month: 'Nov',
    length: 4,
  },
  {
    month: 'Dec',
    length: 4,
  },
];
const monthsObject3 = [
  {
    month: 'Jan',
    length: 14,
  },
  {
    month: 'Feb',
    length: 13,
  },
  {
    month: 'Mar',
    length: 14,
  },
  {
    month: 'Apr',
    length: 13,
  },
  {
    month: 'May',
    length: 13,
  },
  {
    month: 'Jun',
    length: 14,
  },
  {
    month: 'July',
    length: 14,
  },
  {
    month: 'Aug',
    length: 14,
  },
  {
    month: 'Sep',
    length: 14,
  },
  {
    month: 'Oct',
    length: 14,
  },
  {
    month: 'Nov',
    length: 14,
  },
  {
    month: 'Dec',
    length: 13,
  },
];

const monthsObject4 = [
  {
    month: 'Jan',
    length: 15,
  },
  {
    month: 'Feb',
    length: 12,
  },
  {
    month: 'Mar',
    length: 14,
  },
  {
    month: 'Apr',
    length: 15,
  },
  {
    month: 'May',
    length: 12,
  },
  {
    month: 'Jun',
    length: 14,
  },
  {
    month: 'July',
    length: 15,
  },
  {
    month: 'Aug',
    length: 12,
  },
  {
    month: 'Sep',
    length: 13,
  },
  {
    month: 'Oct',
    length: 12,
  },
  {
    month: 'Nov',
    length: 15,
  },
  {
    month: 'Dec',
    length: 14,
  },
];

const PhasesAnalysis: React.FC = () => {
  let dummyDate = new Date().getDate();
  let date = dummyDate < 10 ? '0' + dummyDate : dummyDate.toString();

  return (
    <View style={styles.container}>
      <CycleInfo
        date={date}
        title='See Cycle Information'
        desc='CD27 - Periods in 1 day'
      />

      <AvgLengthComp
        monthsObject={monthsObject1}
        color={colors.chart1}
        backgroundColor='rgba(255, 133, 118, 0.05)'
        text='Avg. Cycle Length'
      />
      <AvgLengthComp
        monthsObject={monthsObject2}
        color={colors.chart2}
        backgroundColor='#FFFAEE'
        text='Avg. Period Length'
      />
      <AvgLengthComp
        monthsObject={monthsObject3}
        color={colors.chart3}
        backgroundColor='#FFFAEE'
        text='Avg. Ovulation Length'
      />
      <AvgLengthComp
        monthsObject={monthsObject4}
        color={colors.chart4}
        backgroundColor='#FFFAEE'
        text='Avg. Follicular Length'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
});

export default PhasesAnalysis;
