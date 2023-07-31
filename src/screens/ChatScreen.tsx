import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Header_1 from '../components/Header_1';
import {colors} from '../utils/colors';
import TotalLiquidCalaroies from '../components/TotalLiquidCalaroies';
import ItemAddedComponent from '../components/ItemAddedComponent';
import ButtonComp from '../components/ButtonComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
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

const listData = [
  'Soda&Colas',
  'Coffee',
  'Smoothies&Jucies',
  'Teas',
  'Alcohol',
  'Protein Shakes',
  'Keto drinks',
  'Milk',
];
const dataItem: DataItem = {
  name: 'Green Vegetables',
  calorie_count: '145 kcal',
  brand: 'Brand',
  food_functionality: 'food Functionality',
  rating: '85/100',
  gl_rate: 5,
};

type NotificationScreenProps = {
  navigation: NavigationProp<any>;
};

export default function NotificationScreen({
  navigation,
}: NotificationScreenProps): JSX.Element {
  const [itemClick, setItemClick] = useState<number[]>([]);

  const handleComponent = (key: number) => {
    if (itemClick.includes(key)) {
      setItemClick(itemClick.filter(item => item !== key));
    } else {
      setItemClick(pre => [...pre, key]);
    }
  };
  const handleNavigation = () => {
    navigation.navigate('LoginMeals');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor={'black'} />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <Header_1
              img={require('../assets/header_1.1.png')}
              cal='500/1700 Kcal'
              text='Dessert& Sugary snacks'
            />

            <View style={styles.calenderContainer}>
              <Feather name='calendar' size={18} color='black' />
              <Text style={styles.calenderText}>22 July 2022</Text>
              <AntDesign name='down' size={14} color='black' />
            </View>

            <View style={styles.labelsContainer}>
              <View style={styles.labelsContainerInner}>
                <Text style={styles.labelsContainerText} numberOfLines={2}>
                  Learn more about labels
                </Text>
                <AntDesign
                  name='arrowright'
                  size={22}
                  color={colors.primary}
                  style={styles.labelArrows}
                />
              </View>
              <View
                style={{
                  ...styles.labelsContainerInner,
                  backgroundColor: colors.rightLabelBox,
                }}>
                <Text
                  style={{
                    ...styles.labelsContainerText,
                    color: colors.secondary,
                  }}
                  numberOfLines={2}>
                  How to register meals
                </Text>
                <MaterialIcons
                  name='error-outline'
                  size={22}
                  color={colors.secondary}
                  style={{
                    ...styles.labelArrows,
                    backgroundColor: colors.infoIconBackground,
                  }}
                />
              </View>
            </View>

            <TotalLiquidCalaroies />

            <View style={styles.dashboardContainer}>
              <View style={styles.dashboardTop}>
                <Text style={styles.dashboardTopLeft}>Dashboard</Text>
                <Text style={styles.dashboardTopRight}>See all</Text>
              </View>

              {listData.map((item, index) => (
                <View key={index}>
                  <Pressable
                    onPress={() => {
                      handleComponent(index);
                    }}
                    style={styles.itemsContainer}>
                    {index === 0 && (
                      <View style={styles.itemNotification}>
                        <Text style={styles.notificationText}>1</Text>
                      </View>
                    )}
                    <Text style={styles.itemsText}>{item}</Text>
                    <AntDesign
                      name={itemClick.includes(index) ? 'up' : 'down'}
                      size={14}
                      color={colors.primary}
                    />
                  </Pressable>

                  {itemClick.includes(index) && (
                    <ItemAddedComponent item={dataItem} key={index} />
                  )}
                </View>
              ))}
            </View>

            <View style={styles.listTitleContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  name='menu'
                  size={16}
                  color={colors.background}
                  style={styles.listMenu}
                />
                <Text style={styles.listText}>List of recommanded Food</Text>
              </View>
              <AntDesign
                name='arrowright'
                size={22}
                color={colors.primary}
                style={styles.labelArrows}
              />
            </View>

            <View style={styles.commentContainer}>
              <TextInput
                placeholder='Add comment (optional)'
                placeholderTextColor='lightgrey'
                style={styles.textInput}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={{marginBottom: 10}}>
              <ButtonComp
                text='Enter your Meal'
                color={colors.primary}
                icon={true}
                onPress={handleNavigation}
              />
              <ButtonComp text='Save Changes' color={colors.secondary} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  calenderContainer: {
    width: '100%',
    marginVertical: 18,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  calenderText: {
    fontSize: 16,
    marginHorizontal: 6,
    color: colors.text_black,
  },
  labelsContainer: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  labelsContainerInner: {
    width: '48%',
    height: 60,
    backgroundColor: colors.leftLabelBox,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  labelsContainerText: {
    fontSize: 16,
    width: '80%',
    color: colors.primary,
    fontWeight: '500',
  },
  labelArrows: {
    alignSelf: 'flex-end',
    backgroundColor: colors.arrowIconBackground,
    borderRadius: 50,
    padding: 4,
  },
  dashboardContainer: {
    paddingHorizontal: 16,
  },
  dashboardTop: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dashboardTopLeft: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: colors.text_black,
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
  itemNotification: {
    backgroundColor: colors.secondary,
    width: 25,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    top: -4,
    left: 105,
    elevation: 4,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
  listTitleContainer: {
    marginTop: 8,
    padding: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FAF5',
    marginBottom: 8,
  },
  listMenu: {
    backgroundColor: colors.primary,
    width: 22,
    height: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 10,
    borderRadius: 4,
  },
  listText: {
    fontSize: 17,
    color: colors.text_black,
  },
  commentContainer: {
    paddingHorizontal: 16,
  },
  textInput: {
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: 'lightgrey',
    borderRadius: 10,
    textAlignVertical: 'top',
    fontSize: 20,
    color: colors.text_black,
  },
});
