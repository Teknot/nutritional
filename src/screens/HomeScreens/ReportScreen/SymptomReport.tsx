import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import Top10Symptoms from './Top10Symptoms';
import SRCalendar from './SRCalendar';
const SymptomReport: React.FC = () => {
  return (
    <View style={styles.container}>
      <SRCalendar />

      <Top10Symptoms />

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

export default SymptomReport;
