import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import Header_3 from '../../components/Header_3';
import {NavigationProp} from '@react-navigation/native';
import {
  CalendarCycle,
  PhasesAnalysis,
  SymptomReport,
  MedicalTracking,
} from './ReportScreen/index';

type NotificationScreenProps = {
  navigation: NavigationProp<any>;
};

function ReportScreen({navigation}: NotificationScreenProps): JSX.Element {
  const [indicator, setIndicator] = useState(0);
  const title = [
    'Calender & Cycle',
    'Phases Analysis',
    'Symptom Report',
    'Medical Tracking',
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={'black'} />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Header_3 backPress={handleBack} text={title[indicator]} />

        <ScrollView
          contentContainerStyle={{
            minWidth: '100%',
            marginBottom: 10,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          nestedScrollEnabled={true}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 0 ? colors.primary2 : colors.background,
              }}
              onPress={() => setIndicator(0)}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 0 ? colors.text_white : colors.text_black,
                }}>
                Cycle
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 1 ? colors.primary2 : colors.background,
              }}
              onPress={() => setIndicator(1)}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 1 ? colors.text_white : colors.text_black,
                }}>
                Phases Analysis
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 2 ? colors.primary2 : colors.background,
              }}
              onPress={() => setIndicator(2)}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 2 ? colors.text_white : colors.text_black,
                }}>
                Symptom Report
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 3 ? colors.primary2 : colors.background,
              }}
              onPress={() => setIndicator(3)}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 3 ? colors.text_white : colors.text_black,
                }}>
                Medical
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {indicator === 0 ? (
          <CalendarCycle />
        ) : indicator === 1 ? (
          <PhasesAnalysis />
        ) : indicator === 2 ? (
          <SymptomReport />
        ) : indicator === 3 ? (
          <MedicalTracking />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  appButtonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 10,
    marginRight: 6,
    borderRadius: 4,
    borderWidth: 1,
    // width: Platform?.OS === 'ios' ? '24%' : undefined,
    borderColor: colors.primary2,
  },
  appButtonText: {
    
    fontSize: 13,
    alignSelf: 'center',
  },
});

export default ReportScreen;
