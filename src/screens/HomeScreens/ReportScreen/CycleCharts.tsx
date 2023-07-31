import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import Pie from 'react-native-pie';

interface CycleInfo_Props {
  date?: string;
  title?: string;
  desc?: string;
}

const CycleChart: React.FC<CycleInfo_Props> = ({date, title, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Pie
          key={1}
          radius={90}
          innerRadius={70}
          sections={[
            {
              key: 1,
              percentage: 40,
              color: '#68B1F5',
            },
            {
              key: 2,
              percentage: 25,
              color: '#F64E8B',
            },
            {
              key: 3,
              percentage: 20,
              color: '#90EE90',
            },
            {
              key: 4,
              percentage: 15,
              color: '#000081',
            },
          ]}
          dividerSize={1}
          strokeCap={'round'}
        />
        <View style={styles.textContainer}>
          <Text style={styles.chartText}>Periods in</Text>
          <Text style={{...styles.chartText, color: '#918868'}}>2</Text>
        </View>
        <Image
          source={require('../../../assets/miniCalendar.png')}
          style={styles.miniCalander}
        />

        <View style={styles.tempContainer}>
          <Image
            source={require('../../../assets/temperature.png')}
            style={styles.temperatureImg}
          />
          <Text style={styles.tempText}>
            Body Temperature:<Text style={{color: '#918868'}}> 340C</Text>{' '}
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <View
            style={{...styles.infoColor, backgroundColor: '#68B1F5'}}></View>
          <Text style={styles.infoText}>Menstruation Phase</Text>
        </View>
        <View style={styles.infoItem}>
          <View
            style={{...styles.infoColor, backgroundColor: '#F64E8B'}}></View>
          <Text style={styles.infoText}>Follicular Phase</Text>
        </View>
        <View style={styles.infoItem}>
          <View
            style={{...styles.infoColor, backgroundColor: '#FFCC00'}}></View>
          <Text style={styles.infoText}>Ovulation Phase</Text>
        </View>
        <View style={styles.infoItem}>
          <View
            style={{...styles.infoColor, backgroundColor: '#90EE90'}}></View>
          <Text style={styles.infoText}>Luteal Phase</Text>
        </View>
        <View style={styles.infoItem}>
          <View
            style={{...styles.infoColor, backgroundColor: '#000081'}}></View>
          <Text style={styles.infoText}>Pre-menstrual Phase</Text>
        </View>
        <View style={styles.infoItem}>
          <View
            style={{...styles.infoColor, backgroundColor: '#90EE90'}}></View>
          <Text style={styles.infoText}>Forecasted Phase</Text>
        </View>
      </View>

      <View style={styles.circleContainer}>
        <View style={styles.circleItem}>
          <Pie
            radius={44}
            innerRadius={41}
            sections={[
              {
                percentage: 25,
                color: colors.circle0,
              },
            ]}
            backgroundColor='#ffffff'
          />
          <View style={styles.circleTextContainer}>
            <Text style={styles.circleTitle}>Vitamin A</Text>
            <Text style={styles.circleDesc}>Compilance Rate: 26%</Text>
          </View>
        </View>
        <View style={styles.circleItem}>
          <Pie
            radius={44}
            innerRadius={41}
            sections={[
              {
                percentage: 75,
                color: colors.circle0,
              },
            ]}
            backgroundColor='#ffffff'
          />
          <View style={styles.circleTextContainer}>
            <Text style={styles.circleTitle}>Paracetamol</Text>
            <Text style={styles.circleDesc}>Compilance Rate: 70%</Text>
          </View>
        </View>
        <View style={styles.circleItem}>
          <Pie
            radius={44}
            innerRadius={41}
            sections={[
              {
                percentage: 25,
                color: colors.circle0,
              },
            ]}
            backgroundColor='#ffffff'
          />
          <View style={styles.circleTextContainer}>
            <Text style={styles.circleTitle}>Vitamin B</Text>
            <Text style={styles.circleDesc}>Compilance Rate: 70%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inner: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '50%',
  },
  chartText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.text_black,
  },
  miniCalander: {
    width: 24,
    height: 25,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureImg: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  tempText: {
    fontWeight: '600',
    fontSize: 13,
    color: colors.text_black,
  },
  infoContainer: {
    width: '100%',
    // backgroundColor:'blue',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
  },
  infoColor: {
    width: 8,
    height: 8,
    backgroundColor: 'blue',
    borderRadius: 4,
    marginRight: 8,
  },
  infoText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text_black,
  },
  circleContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#F1D282',
    width: '100%',
    marginTop: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleItem: {
    backgroundColor: '#F1D282',
    padding: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    position: 'relative',
  },
  circleTextContainer: {
    position: 'absolute',
  },
  circleTitle: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.circle0,
  },
  circleDesc: {
    fontSize: 8,
    textAlign: 'center',
    fontWeight: '300',
    color: colors.text_black,
    paddingHorizontal: 6,
  },
});

export default CycleChart;
