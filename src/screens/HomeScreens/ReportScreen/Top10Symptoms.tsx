import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';

interface Symptoms_Props {
  medical?: boolean;
}

const Top10Symptoms: React.FC<Symptoms_Props> = ({medical}) => {
  const tabData = [
    {
      text: 'Stomach Cramps',
      img: require('../../../assets/stomach.png'),
    },
    {
      text: 'Headache',
      img: require('../../../assets/headache.png'),
    },
    {
      text: 'Fatigue',
      img: require('../../../assets/fatigue.png'),
    },
    {
      text: 'Dizziness',
      img: require('../../../assets/fatigue.png'),
    },
    {
      text: 'Bloating',
      img: require('../../../assets/fatigue.png'),
    },
  ];

  const list = [
    {
      title: 'Yoga',
      teg: 'Learn yoga at home',
      desc: 'Just a few yoga exercises',
      img: require('../../../assets/image1.png'),
    },
    {
      title: 'Course',
      teg: 'Hormones 101',
      desc: 'Understand how hormones functions',
      img: require('../../../assets/image2.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 10 Reported Symptoms</Text>

      <ScrollView
        contentContainerStyle={{minWidth: '100%', marginBottom: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        {medical == true ? (
          <View
            style={{
              ...styles.buttonContainer,
              borderWidth: 1,
              borderColor: 'lightgrey',
              paddingHorizontal: 10,
              marginTop: 10,
              borderRadius: 10,
            }}>
            {tabData?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.appButtonContainer2,
                  backgroundColor:
                    index == 0 ? '#E8D5DB' : index == 1 ? '#DBA8DE' : '#F7D7B5',
                }}>
                <Text style={{...styles.appButtonText}}>{item.text}</Text>
                <Image source={item.img} style={styles.tabImages} />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            {tabData?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{...styles.appButtonContainer}}>
                <Text style={{...styles.appButtonText}}>{item.text}</Text>
                <Image source={item.img} style={styles.tabImages} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.listContainer}>
        {list?.map((item, index) => (
          <View style={styles.listItem} key={index}>
            <Image source={item.img} style={styles.listImage} />
            <View style={{width: '70%'}}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listTag}>{item.teg}</Text>
              <Text style={styles.listDesc} numberOfLines={1}>
                {item.desc}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 16,
    // marginRight: 16
    width: '100%',
    marginTop: 16,
  },
  title: {
    // 
    fontWeight: '600',
    fontSize: 16,
    color: colors.text_black,
  },
  buttonContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 16,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    // backgroundColor:'red'
  },
  appButtonContainer: {
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 4,
    borderWidth: 1,
    width: 100,
    height: 98,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary2,
  },
  appButtonContainer2: {
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 38,
    borderWidth: 1,
    width: 102,
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: colors.primary2,
  },
  appButtonText: {
    
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 10,
    color: colors.text_black,
    // alignSelf: 'center',
  },
  tabImages: {
    width: 30,
    height: 33,
  },
  listContainer: {
    paddingBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    elevation: 1,
    backgroundColor: colors.background,
    marginBottom: 8,
    width: '100%',
  },
  listImage: {
    width: 120,
    height: 66,
    marginRight: 12,
  },
  listTitle: {
    textTransform: 'uppercase',
    color: '#CCAE15',
    fontWeight: '600',
    fontSize: 16,
  },
  listTag: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text_black,
  },
  listDesc: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.text_black,
  },
});

export default Top10Symptoms;
