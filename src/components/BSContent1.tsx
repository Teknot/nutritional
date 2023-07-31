import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonComp from './ButtonComp';
import {colors} from '../utils/colors';

type Item = {
  title: string;
  items: string[];
  button: string;
};

const data: Item[] = [
  {
    title: 'Feeling',
    items: ['Good', 'Bloating', 'Nausea', 'Heave'],
    button: 'Add Other Feelings',
  },
  {
    title: 'Where',
    items: ['Desk', 'On the go', 'Dinner table', 'open place'],
    button: 'Add Other Place',
  },
  {
    title: 'Time to consume',
    items: ['5 min', '10 min', '20 min', '30 min'],
    button: 'Select Other Time',
  },
  {
    title: 'Select Meal Cooking Method',
    items: ['Raw', 'Slow Cooked', 'Roasted', 'Grilled'],
    button: 'Select Other Cooking methods',
  },
];

interface Props {
  onPress?: () => void;
  onPress2?: () => void;
}

const BottomSheetContent1: React.FC = ({onPress, onPress2}: Props) => {
  const [itemClick, setItemClick] = useState<string[]>([]);

  const handleClick = (key: string) => {
    if (itemClick.includes(key)) {
      setItemClick(itemClick.filter(item => item !== key));
    } else {
      setItemClick(pre => [...pre, key]);
    }
  };

  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={{justifyContent: 'center'}}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.container}>
            {item.items.map((itm, ind) => (
              <Pressable
                style={{
                  ...styles.item,
                  backgroundColor: itemClick.includes(ind + index.toString())
                    ? colors.primary
                    : colors.background,
                }}
                key={ind}
                onPress={() => handleClick(ind + index.toString())}>
                <Text
                  style={{
                    ...styles.itemText,
                    color: itemClick.includes(ind + index.toString())
                      ? colors.text_white
                      : colors.text_black,
                  }}>
                  {itm}
                </Text>
              </Pressable>
            ))}
          </View>
          <TouchableOpacity
            style={{
              ...styles.item,
              width: undefined,
              paddingHorizontal: 25,
              alignSelf: 'center',
            }}
            onPress={onPress2}>
            {index != 2 && (
              <AntDesign
                name='pluscircle'
                size={16}
                color={colors.primary}
                style={{marginRight: 6}}
              />
            )}
            <Text style={{...styles.itemText}}>{item.button}</Text>
            {index == 2 && (
              <AntDesign
                name='down'
                size={14}
                color='black'
                style={{marginLeft: 4}}
              />
            )}
          </TouchableOpacity>
        </View>
      ))}
      <View style={{marginBottom: 10}}>
        <ButtonComp text='Done' color={colors.primary} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: colors.text_black,
  },
  item: {
    width: '24%',
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 4,
  },
  itemText: {
    fontSize: 12,
    color: colors.text_black,
  },
});

export default BottomSheetContent1;
