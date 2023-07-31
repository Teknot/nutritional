//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {Picker} from '@react-native-picker/picker';

interface AvgLengthComp_Prop {
  backPress?: () => void;
  monthsObject?: any;
  color?: string;
  backgroundColor?: string;
  text?: string;
}
const items = ['Years', 'Months', 'Weeks', 'Days'];
// create a component
const AvgLengthComp: React.FC<AvgLengthComp_Prop> = ({
  backPress,
  monthsObject,
  color,
  backgroundColor,
  text,
}) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>{text}</Text>
        <View style={{...styles.inputStyle, width: '30%'}}>
          <Text style={styles.dropDownText}>{selectedItem}</Text>
          <Picker
            selectedValue={selectedItem}
            mode='dropdown'
            style={{width: '100%'}}
            dropdownIconColor={colors.text_black}
            numberOfLines={1}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedItem(itemValue)
            }>
            {items.map((item, index) => (
              <Picker.Item
                // color='white'
                key={index}
                label={item}
                value={item}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.inner}>
        {monthsObject?.map((item: any, index: number) => (
          <View key={index} style={styles.chartItem}>
            <View style={{...styles.lengthContainer, borderColor: color}}>
              <Text style={{...styles.lengthText, color: color}}>
                {item?.length}
              </Text>
            </View>
            <View
              style={{
                ...styles.barChart,
                backgroundColor: color,
                height: `${item?.length * 3}%`,
              }}></View>
            <Text style={{...styles.monthText, color: color}}>
              {item?.month}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topText: {
    fontSize: 18,
    color: colors.text_black,
    fontWeight: '400',
  },
  inputStyle: {
    borderColor: '#FF8576',
    borderWidth: 1,
    marginVertical: 16,
    marginRight: 4,
    height: 40,
    textAlign: 'center',
    flexDirection: 'row',
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    position: 'relative',
  },
  dropDownText: {
    color: colors.text_black,
    position: 'absolute',
    left: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 160,
    marginTop: 36,
    // backgroundColor:'red'
  },
  chartItem: {
    alignItems: 'center',
  },
  lengthContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  lengthText: {
    fontSize: 10,
  },
  barChart: {
    width: 10,
    height: '40%',
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginBottom: 6,
  },
  monthText: {
    color: colors.text_black,
    fontSize: 9,
  },
});

//make this component available to the app
export default AvgLengthComp;
