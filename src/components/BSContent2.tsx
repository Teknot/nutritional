import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import ButtonComp from './ButtonComp';

const data = [
  'Raw',
  'SlowCooked',
  'Pressure coo',
  'Grilled',
  'Broiled',
  'Baked',
  'Raw',
  'SlowCooked',
  'Pressure coo',
  'Grilled',
  'Broiled',
  'Baked',
  'Raw',
  'SlowCooked',
  'Pressure coo',
  'Grilled',
  'Broiled',
  'Baked',
];
interface Props {
  onPress?: () => void;
}
const BottomSheetContent2: React.FC = ({onPress}: Props) => {
  const [itemClick, setItemClick] = useState<number[]>([]);

  const handleClick = (key: number) => {
    if (itemClick.includes(key)) {
      setItemClick(itemClick.filter(item => item != key));
    } else {
      setItemClick(pre => [...pre, key]);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Select Meal Cooking Method</Text>
      <View style={styles.container}>
        {data.map((item, index) => (
          <Pressable
            style={{
              ...styles.item,
              backgroundColor: itemClick.includes(index)
                ? colors.primary
                : colors.background,
            }}
            key={index}
            onPress={() => handleClick(index)}>
            <Text
              style={{
                ...styles.itemText,
                color: itemClick.includes(index)
                  ? colors.text_white
                  : colors.text_black,
              }}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={{marginBottom: 10}}>
        <ButtonComp text='Done' color={colors.primary} onPress={onPress} />
      </View>
    </View>
  );
};

export default BottomSheetContent2;

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
    marginTop: 18,
    color: colors.text_black,
  },
  item: {
    width: '32%',
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: 10,
  },
  itemText: {
    fontSize: 14,
    color: colors.text_white,
  },
});
