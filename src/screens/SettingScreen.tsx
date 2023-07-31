import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header_2 from '../components/Header_2';
import OverAllScore from '../components/OverAllScore';
import {colors} from '../utils/colors';

type ItemData = {
  title: string;
  totalCal: string;
  items: {
    item: string;
    cal: string;
  }[];
};

const itemsData: ItemData[] = [
  {
    title: 'Protein',
    totalCal: '6.4g',
    items: [
      {
        item: 'Dietary Fiber',
        cal: '2.5 g',
      },
      {
        item: 'Cholestrol',
        cal: '70 mg',
      },
      {
        item: 'Salt',
        cal: '0.62 g',
      },
    ],
  },
  {
    title: 'Fats',
    totalCal: '6.4g',
    items: [
      {
        item: 'Dietary Fiber',
        cal: '2.5 g',
      },
      {
        item: 'Cholestrol',
        cal: '70 mg',
      },
      {
        item: 'Salt',
        cal: '0.62 g',
      },
    ],
  },
];
const SettingScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <Header_2 type={2} bgColor={colors.primary} />
          <OverAllScore />
          <View style={styles.tagsContainer}>
            <Text style={styles.tags}>High Fiber</Text>
            <Text style={styles.tags}>Low Carbs</Text>
            <Text style={styles.tags}>Iron</Text>
          </View>
          <View style={styles.addContainer}>
            <TextInput
              placeholder="300"
              placeholderTextColor="lightgrey"
              style={{
                ...styles.inputStyle,
                width: '26%',
                color: colors.text_black,
              }}
              keyboardType="decimal-pad"
            />
            <View style={{...styles.inputStyle, width: '30%'}}>
              <Text style={{color: colors.text_black}}>Grams</Text>
              <AntDesign
                name="down"
                size={12}
                color="black"
                style={{marginLeft: 20}}
              />
            </View>
            <View style={{width: '40%'}}>
              <TouchableOpacity
                style={{...styles.inputStyle, backgroundColor: colors.primary}}>
                <Text style={{color: colors.text_white, fontWeight: '500'}}>
                  ADD
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoTop}>
              <Text style={styles.infoTopLeft}>Nutritional Information</Text>
              <Text style={styles.infoTopRight}>518 Kcal</Text>
            </View>
          </View>
          <View style={styles.itemsContainer}>
            {itemsData.map((item, index) => (
              <View key={index}>
                <View style={styles.itemsHeader}>
                  <Text style={styles.infoTopLeft}>{item.title}</Text>
                  <Text style={styles.listItems}>{item.totalCal}</Text>
                </View>
                {item.items.map((itm, ind) => (
                  <View style={styles.itemsContentContainer} key={ind}>
                    <Text style={styles.listItems}>{itm.item}</Text>
                    <Text style={styles.listItems}>{itm.cal}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  tagsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    backgroundColor: '#8D43A41A',
    width: '32%',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 6,
    color: colors.text_black,
  },
  addContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: colors.primary,
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
  },
  infoContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  infoTop: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoTopLeft: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text_black,
  },
  infoTopRight: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text_black,
  },
  itemsContainer: {
    paddingHorizontal: 16,
  },
  itemsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopColor: 'lightgrey',
    borderTopWidth: 2,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
  itemsContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  listItems: {
    color: colors.text_black,
  },
});
