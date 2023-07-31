import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {colors} from '../utils/colors';

interface ProgressBarData {
  id: number;
  color: string;
  percent: string;
}

interface ItemsData {
  id: number;
  title: string;
  color: string;
  percent: number;
  grams: string;
  calories: string;
}

const progressBarData: ProgressBarData[] = [
  {
    id: 1,
    color: colors.carbs,
    percent: '10%',
  },
  {
    id: 2,
    color: colors.fat,
    percent: '10%',
  },
  {
    id: 3,
    color: colors.protein,
    percent: '7%',
  },
  {
    id: 4,
    color: colors.fiber,
    percent: '10%',
  },
];

const itemsData: ItemsData[] = [
  {
    id: 1,
    title: 'Carbs',
    color: colors.carbs,
    percent: 0.288,
    grams: '17 / 60 g',
    calories: '300Kcal',
  },
  {
    id: 2,
    title: 'Fats',
    color: colors.fat,
    percent: 0.288,
    grams: '17 / 60 g',
    calories: '150Kcal',
  },
  {
    id: 4,
    title: 'Proteins',
    color: colors.protein,
    percent: 0.333,
    grams: '20 / 60 g',
    calories: '50Kcal',
  },
  {
    id: 1,
    title: 'Fiber',
    color: colors.fiber,
    percent: 0.0,
    grams: '0 / 60 g',
    calories: '0Kcal',
  },
];

interface ProgressBarCompProps {
  item: ProgressBarData;
}

const ProgressBarComp = ({item}: ProgressBarCompProps) => {
  return (
    <View
      style={{
        backgroundColor: item.color,
        width: item.percent,
        borderTopLeftRadius: item.id == 1 ? 20 : 0,
        borderBottomLeftRadius: item.id == 1 ? 20 : 0,
        borderTopRightRadius: item.id == 4 ? 20 : 0,
        borderBottomRightRadius: item.id == 4 ? 20 : 0,
        marginLeft: -0.05,
      }}></View>
  );
};

const TotalLiquidCalaroies: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerConatainer}>
        <Text style={styles.title}>Total Liquid Calaroies</Text>

        <View style={styles.progressBarContainer}>
          {progressBarData.map((item, index) => (
            <ProgressBarComp key={index} item={item} />
          ))}
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>500 / 1700 Kcal</Text>
          <Text style={styles.statusText}>Consumption: 29%</Text>
        </View>

        <View style={styles.dataContainer}>
          <View style={styles.dataContainerInner}>
            {itemsData.map((item, index) => (
              <View style={{alignItems: 'center'}} key={index}>
                <Text style={styles.dataTitle}>{item.title}</Text>
                <Progress.Bar
                  progress={item.percent}
                  width={75}
                  height={5}
                  borderWidth={2}
                  borderColor='transparent'
                  borderRadius={20}
                  color={item.color}
                  unfilledColor='white'
                />
                <Text style={styles.dataGrams}>{item.grams}</Text>
                <Text style={styles.dataCalories}>{item.calories}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TotalLiquidCalaroies;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  innerConatainer: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: colors.totalCaloriesContainer,
  },
  title: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: 6,
  },
  progressBarContainer: {
    width: '100%',
    height: 16,
    backgroundColor: colors.background,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 6,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: 15,
    color: colors.text_black,
  },
  dataContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  dataContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 60,
  },
  dataTitle: {
    marginBottom: 6,
    fontWeight: '400',
    fontSize: 15,
    color: colors.text_black,
  },
  dataGrams: {
    marginTop: 6,
    marginBottom: 6,
    color: colors.text_black,
  },
  dataCalories: {
    color: '#787571',
    fontSize: 13,
  },
});
