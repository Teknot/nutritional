//import liraries
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Animated,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {colors} from '../../../utils/colors';
import diseaseNames from '../../../utils/SR_DiseaseData';
import {Picker} from '@react-native-picker/picker';

interface SRCalendar_Props {
  backPress?: () => void;
  img?: any;
  cal?: string;
  text?: string;
}
let month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
// create a component
let items1: any = ['Select Year'];


for (let year = 1950; year <= 2100; year++) {
  items1.push(year.toString());
}
const items2 = [
  'Select Month',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const SRCalendar: React.FC<SRCalendar_Props> = ({
  backPress,
  img,
  cal,
  text,
}) => {
  const [selectedItem1, setSelectedItem1] = useState(items1[0]);
  const [selectedItem2, setSelectedItem2] = useState(items2[0]);

  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const [completeScrollBarWidth, setCompleteScrollBarWidth] = useState(1);
  const [visibleScrollBarWidth, setVisibleScrollBarWidth] = useState(0);

  const scrollIndicator = useRef(new Animated.Value(0)).current;
  const scrollIndicator2 = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;
  // scrollIndicatorSize  = scrollIndicatorSize - ((10 / scrollIndicatorSize) * 100)
  const scrollIndicatorSize2 =
    completeScrollBarWidth > visibleScrollBarWidth
      ? (visibleScrollBarWidth * visibleScrollBarWidth) / completeScrollBarWidth
      : visibleScrollBarWidth;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;
  const difference2 =
    visibleScrollBarWidth > scrollIndicatorSize2
      ? visibleScrollBarWidth - scrollIndicatorSize2
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });
  const scrollIndicatorPosition2 = Animated.multiply(
    scrollIndicator2,
    visibleScrollBarWidth / completeScrollBarWidth,
  ).interpolate({
    inputRange: [0, difference2],
    outputRange: [0, difference2],
    extrapolate: 'clamp',
  });

  const borderStyle = (index: number) => {
    return {
      borderTopLeftRadius: index == 0 ? 20 : 0,
      borderTopRightRadius: index == 11 ? 20 : 0,
      borderBottomLeftRadius: index == 0 ? 20 : 0,
      borderBottomRightRadius: index == 11 ? 20 : 0,
    };
  };
  const diseaseContainerColor = (index: number) => {
    return {
      backgroundColor:
        index == 0
          ? colors.bloatingColor
          : index == 1
          ? colors.crampsColor
          : index == 2
          ? colors.cravingsColor
          : index == 3
          ? colors.fuColor
          : index == 4
          ? colors.backacheColor
          : index == 5
          ? colors.insomniaColor
          : index == 6
          ? colors.hbColor
          : index == 7
          ? colors.opColor
          : index == 8
          ? colors.fatigueColor
          : 'transparent',
    };
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.textContainer}>
                <View style={styles.textItem}>
                    <Text style={styles.text} >Year</Text>
                    <TextInput style={styles.textInput} keyboardType='decimal-pad' />
                </View>
                <View style={styles.textItem}>
                    <Text style={styles.text} >Month</Text>
                    <TextInput style={styles.textInput} keyboardType='decimal-pad' />
                </View>
            </View> */}
      <View style={styles.pickerContainer}>
        <View style={{...styles.inputStyle, width: '45%'}}>
          <Picker
            selectedValue={selectedItem1}
            mode='dropdown'
            style={{width: '100%', height: 20}}
            dropdownIconColor={colors.text_white}
            // numberOfLines={1}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedItem1(itemValue)
            }>
            {items1.map((item: any, index: any) => (
              <Picker.Item
                // color='white'
                style={{fontSize: 12}}
                key={index}
                label={item}
                value={item}
              />
            ))}
          </Picker>
        </View>
        <View style={{...styles.inputStyle, width: '45%'}}>
          <Picker
            selectedValue={selectedItem2}
            mode='dropdown'
            style={{width: '100%'}}
            dropdownIconColor={colors.text_white}
            // numberOfLines={1}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedItem2(itemValue)
            }>
            {items2.map((item, index) => (
              <Picker.Item
                style={{fontSize: 12}}
                key={index}
                label={item}
                value={item}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View
        style={{
          height: 4,
          width: '100%',
          backgroundColor: 'lightgrey',
          borderRadius: 8,
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Animated.View
          style={{
            width: scrollIndicatorSize2 + 20,
            borderRadius: 8,
            backgroundColor: colors.primary,
            height: 12,
            transform: [{translateX: scrollIndicatorPosition2}],
          }}
        />
      </View>

      <View style={styles.upperContainer}>
        <View
          style={{
            height: '90%',
            width: 4,
            backgroundColor: 'lightgrey',
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <Animated.View
            style={{
              width: 12,
              borderRadius: 8,
              backgroundColor: colors.primary,
              height: scrollIndicatorSize,
              transform: [{translateY: scrollIndicatorPosition}],
            }}
          />
        </View>

        <ScrollView
          contentContainerStyle={{paddingVertical: 10, paddingLeft: 12}}
          showsVerticalScrollIndicator={false}
          bounces={false}
          nestedScrollEnabled={true}
          scrollEventThrottle={16}
          onContentSizeChange={(_, height) => {
            setCompleteScrollBarHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {height},
            },
          }) => {
            setVisibleScrollBarHeight(height * 0.94);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
            {useNativeDriver: false},
          )}>
          <ScrollView
            horizontal
            contentContainerStyle={{flexDirection: 'column'}}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            onContentSizeChange={(width, _) => {
              setCompleteScrollBarWidth(width);
            }}
            onLayout={({
              nativeEvent: {
                // layout: { height }
                layout: {width},
              },
            }) => {
              setVisibleScrollBarWidth(width);
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollIndicator2}}}],
              {useNativeDriver: false},
            )}>
            <View style={styles.monthsCalendar}>
              {month?.map((item, index) => (
                <Text key={index} style={styles.monthsText}>
                  {item}
                </Text>
              ))}
            </View>

            <View style={styles.inner}>
              {diseaseNames?.map((item, index) => (
                <View key={index}>
                  <Text style={styles.diseaseNames}>{item.name}</Text>
                  <View style={styles.lineBarContainer}>
                    {month?.map((itm, ind) => (
                      <View
                        key={ind}
                        style={{...styles.lineBar, ...borderStyle(ind)}}>
                        {Object.keys(item?.months).includes(ind.toString()) && (
                          <View
                            style={{
                              ...styles.diseaseNumberContainer,
                              ...diseaseContainerColor(index),
                            }}>
                            <Text style={styles.diseaseNumber}>
                              {item?.months[ind]}
                            </Text>
                          </View>
                        )}
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 540,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '400',
    color: colors.text_black,
  },
  textInput: {
    fontSize: 16,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 6,
    width: 100,
    borderRadius: 6,
    color: colors.text_black,
  },
  pickerContainer: {
    backgroundColor: '#F4ECF6',
    borderRadius: 8,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    position: 'relative',
    marginBottom: 10,
  },
  pickerListItems: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 20,
    zIndex: 0,
    // height:200
  },
  pickerText: {
    color: colors.text_black,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  inputStyle: {
    // borderColor: '#FF8576',
    // borderWidth: 1,
    marginVertical: 16,
    marginRight: 4,
    height: 40,
    textAlign: 'center',
    flexDirection: 'row',
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    // position: 'relative',
    backgroundColor: colors.primary,
  },
  dropDownText: {
    color: colors.text_black,
    position: 'absolute',
    left: 10,
  },
  upperContainer: {
    backgroundColor: colors.background,
    marginBottom: 120,
    flexDirection: 'row',
  },
  monthsCalendar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  monthsText: {
    width: 60,
    fontSize: 16,
    textAlign: 'center',
    color: '#828282',
  },
  inner: {
    width: '100%',
  },
  diseaseNames: {
    fontSize: 16,
    color: colors.text_black,
  },
  lineBarContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 10,
  },
  lineBar: {
    height: 24,
    width: 60,
    backgroundColor: '#DCC5E3',
    alignItems: 'center',
  },
  diseaseNumberContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    // backgroundColor:colors.date1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diseaseNumber: {
    color: colors.text_white,
    fontSize: 16,
    fontWeight: '500',
  },
});

//make this component available to the app
export default SRCalendar;
