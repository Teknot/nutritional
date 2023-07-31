import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/colors';
import CycleInfo from './CycleInfo';
import Top10Symptoms from './Top10Symptoms';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';


const MedicalTracking: React.FC = () => {
  const [yearChanger, setYearChanger] = useState(1);

  const dates = {
    1: {
      color: colors.date1,
      tag: 5,
    },
    2: {
      color: colors.date2,
      tag: 2,
    },
    3: {
      color: colors.date2,
      tag: 2,
    },
    6: {
      color: colors.date2,
    },
    8: {
      color: colors.date3,
    },
    12: {
      color: colors.date3,
      tag: 3,
    },
    15: {
      color: colors.date1,
      tag: 4,
    },
    24: {
      color: colors.date4,
      tag: 2,
    },
    29: {
      color: colors.date4,
      tag: 2,
    },
  };
  const listData = ['Cramps', 'Bloating', 'Insomnia', 'Backache', 'Fatigue'];
  return (
    <View style={styles.container}>
      <View style={styles.yearChangeContainer}>
        <View style={styles.yearChangeInner}>
          <TouchableOpacity
            style={{
              ...styles.yearChangeItem,
              backgroundColor:
                yearChanger == 0 ? colors.primary : 'transparent',
            }}
            onPress={() => setYearChanger(0)}>
            <Text
              style={{
                ...styles.yearChangeText,
                color: yearChanger == 0 ? colors.text_white : colors.text_black,
              }}>
              Year View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.yearChangeItem,
              backgroundColor:
                yearChanger == 1 ? colors.primary : 'transparent',
            }}
            onPress={() => setYearChanger(1)}>
            <Text
              style={{
                ...styles.yearChangeText,
                color: yearChanger == 1 ? colors.text_white : colors.text_black,
              }}>
              Month View
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Calendar
        renderArrow={direction => {
          return direction == 'left' ? (
            <Ionicons name='chevron-back' size={20} color={colors.text_black} />
          ) : (
            <Ionicons
              name='chevron-forward'
              size={20}
              color={colors.text_black}
            />
          );
        }}
        hideExtraDays={true}
        style={styles.calendarStyle}
        dayComponent={({date, state}) => {
          const datePresent = Object.keys(dates).includes(date?.day + '');
          let currDate = null;
          if (datePresent) {
            currDate = date?.day;
          }
          return (
            <View
              style={{
                ...styles.dateContainer,
                backgroundColor: currDate ? dates[currDate].color : null,
              }}>
              {dates[currDate]?.tag && (
                <View style={styles.tagContainer}>
                  <Text style={styles.tagText}>{dates[currDate]?.tag}</Text>
                </View>
              )}
              <Text
                style={{
                  ...styles.dateText,
                  textAlign: 'center',
                  color: currDate ? 'white' : 'black',
                  fontWeight: currDate ? '800' : '500',
                }}>
                {date?.day}
              </Text>
              <Text
                style={{
                  ...styles.dateDesc,
                  color: currDate ? 'white' : 'black',
                  fontWeight: currDate ? '800' : '400',
                }}>
                CD{date?.day}
              </Text>
            </View>
          );
        }}
      />

      <View style={styles.dashboardContainer}>
        <View style={styles.dashboardTop}>
          <Text style={styles.dashboardTopLeft}>1st January 2021</Text>
          <Text style={styles.dashboardTopLeftDesc}>Reported Symptoms</Text>
        </View>

        {listData.map((item, index) => (
          <View key={index}>
            <Pressable style={styles.itemsContainer}>
              <Text style={styles.itemsText}>{item}</Text>
              <View
                style={{
                  ...styles.tagContainer,
                  position: undefined,
                  top: 0,
                  right: 0,
                }}>
                <Text style={styles.tagText}>{2}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </View>

      <Top10Symptoms medical={true} />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  yearChangeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  yearChangeInner: {
    width: '75%',
    backgroundColor: 'rgba(224, 217, 234, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    borderRadius: 6,
  },
  yearChangeItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    // backgroundColor:colors.primary,

    borderRadius: 6,
  },
  yearChangeText: {
    fontWeight: '500',
    fontSize: 14,
    // color:colors.text_black
  },
  calendarStyle: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    elevation: 0.5,
    borderRadius: 8,
    padding: 1,
  },
  dateContainer: {
    backgroundColor: 'red',
    position: 'relative',
    padding: 5,
    width: 46,
    height: 46,
    borderRadius: 12,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text_black,
  },
  dateDesc: {
    fontSize: 9,
    textAlign: 'center',
    marginTop: -4,
    color: colors.text_black,
  },
  tagContainer: {
    backgroundColor: '#E1F5EA',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -2,
    top: -8,
    elevation: 2,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.text_black,
  },
  dashboardContainer: {
    // paddingHorizontal: 16,
  },
  dashboardTop: {
    // flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  dashboardTopLeft: {
    fontSize: 18,
    // textTransform: 'uppercase',
    color: colors.text_black,
  },
  dashboardTopLeftDesc: {
    fontSize: 16,
    color: 'grey',
  },
  dashboardTopRight: {
    fontSize: 14,
    color: colors.text_black,
  },
  itemsContainer: {
    width: '100%',
    backgroundColor: colors.background,
    padding: 10,
    borderWidth: 0,
    borderBottomColor: 'rgba(141, 67, 164,0.2)',
    borderBottomWidth: 2,
    marginBottom: 8,
    shadowColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  itemsText: {
    fontSize: 15,
    color: colors.text_black,
  },

  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    marginBottom: 20,
    borderRadius: 12,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.text_white,
  },
});

export default MedicalTracking;
