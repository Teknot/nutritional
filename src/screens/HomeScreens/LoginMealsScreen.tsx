import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Button,
  FlatList,
  LogBox,
  Platform,
} from 'react-native';

import {colors} from '../../utils/colors';
import Header_2 from '../../components/Header_2';
import ItemAddedComponent from '../../components/ItemAddedComponent';
import NoFoodAddedComponent from '../../components/NoFoodAddedComponent';
import BottomSheetContent2 from '../../components/BSContent2';
import BottomSheetContent1 from '../../components/BSContent1';
import {Modalize} from 'react-native-modalize';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationProp} from '@react-navigation/native';

interface DataItem {
  name: string;
  calorie_count: string;
  brand: string;
  food_functionality: string;
  rating: string;
  gl_rate: number;
}

const data: DataItem[] = [
  {
    name: 'Spinach',
    calorie_count: '23 kcal',
    brand: 'Farm Fresh',
    food_functionality: 'Good source of iron',
    rating: '90/100',
    gl_rate: 3,
  },
  {
    name: 'Kale',
    calorie_count: '50 kcal',
    brand: 'Organic Farms',
    food_functionality: 'Rich in antioxidants',
    rating: '95/100',
    gl_rate: 2,
  },
  {
    name: 'Broccoli',
    calorie_count: '55 kcal',
    brand: 'Fresh Produce',
    food_functionality: 'High in fiber',
    rating: '80/100',
    gl_rate: 4,
  },
  {
    name: 'Brussels Sprouts',
    calorie_count: '56 kcal',
    brand: 'Garden Fresh',
    food_functionality: 'Rich in vitamins C and K',
    rating: '85/100',
    gl_rate: 3,
  },
  {
    name: 'Asparagus',
    calorie_count: '27 kcal',
    brand: 'Organic Fields',
    food_functionality: 'Low in calories',
    rating: '75/100',
    gl_rate: 2,
  },
];

type NotificationScreenProps = {
  navigation: NavigationProp<any>;
};

function LoginMealsScreen({navigation}: NotificationScreenProps): JSX.Element {
  const [indicator, setIndicator] = useState(1);
  const [DATA, setDataList] = useState<DataItem[]>([]);
  const [search, setSearch] = useState('');
  const refRBSheet = useRef<Modalize>(null);
  const refRBSheet2 = useRef<Modalize>(null);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const handleFirst = () => {
    setIndicator(1);
    setDataList([...data]);
  };
  const handleSecond = () => {
    setIndicator(2);
    setDataList([]);
  };
  const handleThird = () => {
    setIndicator(3);
    setDataList([...data]);
  };
  const handleFourth = () => {
    setIndicator(4);
    setDataList([]);
  };

  const handleClose = () => {
    refRBSheet?.current?.close();
  };
  const handleClose2 = () => {
    refRBSheet2?.current?.close();
  };

  const handleBack = () => {
    navigation.goBack();
  };
  const addItem = (name: string) => {
    navigation.navigate('MealDetailsScreen', {name});
  };
  const handleSearch = (text: string) => {
    const result = [];
    const inputLower = text.toLowerCase();
    for (let i = 0; i < data.length; i++) {
      const nameLower = data[i].name.toLowerCase();
      if (nameLower.includes(inputLower)) {
        result.push(data[i]);
      }
    }
    setDataList(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={'black'} />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Header_2
          type={1}
          bgColor={colors.secondary}
          icon1Press={() => refRBSheet?.current?.open()}
          icon2Press={() => refRBSheet2?.current?.open()}
          backPress={handleBack}
          value={search}
          onChange={(text: string) => {
            setSearch(text);
            handleSearch(text);
          }}
        />

        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.timeTitle}>Today</Text>
            <Text style={styles.timeContent}>09:47AM</Text>
          </View>

          <View style={styles.selectTimeContainer}>
            <Feather
              name='clock'
              color={colors.text_black}
              style={styles.selectIcon}
            />
            <Text style={styles.selectTimeContent}>Select Time</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{minWidth: '100%', marginBottom: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 1 ? colors.secondary : colors.background,
              }}
              onPress={handleFirst}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 1 ? colors.text_white : colors.text_black,
                }}>
                Breakfast
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 2 ? colors.secondary : colors.background,
              }}
              onPress={handleSecond}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 2 ? colors.text_white : colors.text_black,
                }}>
                Lunch
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 3 ? colors.secondary : colors.background,
              }}
              onPress={handleThird}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 3 ? colors.text_white : colors.text_black,
                }}>
                Dinner
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.appButtonContainer,
                backgroundColor:
                  indicator === 4 ? colors.secondary : colors.background,
              }}
              onPress={handleFourth}>
              <Text
                style={{
                  ...styles.appButtonText,
                  color:
                    indicator === 4 ? colors.text_white : colors.text_black,
                }}>
                Snakes
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{paddingHorizontal: 16}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <ItemAddedComponent
                item={item}
                addItem={() => addItem(item.name)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            extraData={indicator}
            ListEmptyComponent={NoFoodAddedComponent}
            bounces={false}
          />
        </View>

        <Modalize
          ref={refRBSheet}
          adjustToContentHeight
          // onClose={handleClose}
          withReactModal={true}>
          <BottomSheetContent2 />
        </Modalize>

        <Modalize
          ref={refRBSheet2}
          adjustToContentHeight
          // onClose={handleClose2}
          withReactModal={true}>
          <BottomSheetContent1 />
        </Modalize>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginMealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  backgroundShadow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  timeTitle: {
    color: colors.text_black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  timeContent: {
    color: colors.text_black,
    fontSize: 15,
  },
  selectTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  selectIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  selectTimeContent: {
    fontSize: 12,
    color: colors.text_black,
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
    borderRadius: 20,
    borderWidth: 1,
    width: Platform?.OS === 'ios' ? '24%' : undefined,
    borderColor: colors.secondary,
  },
  appButtonText: {
    fontSize: 13,
    alignSelf: 'center',
  },
});
