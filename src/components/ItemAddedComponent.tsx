import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

interface DataItem {
  name: string;
  calorie_count: string;
  brand: string;
  food_functionality: string;
  rating: string;
  gl_rate: number;
}

interface Props {
  item?: DataItem;
  addItem?: any;
}

export default function ItemAddedComponent({item, addItem}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={addItem}>
      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Feather name='plus' size={24} color={colors.text_white} />
      </TouchableOpacity>

      <View style={styles.leftContainer}>
        <Text style={styles.leftTitle} numberOfLines={1}>
          {item?.name}
        </Text>
        <Text style={styles.leftQuantity} numberOfLines={1}>
          {item?.calorie_count}
        </Text>
        <Text style={styles.leftBrand} numberOfLines={1}>
          {item?.brand}
        </Text>
        <Text style={styles.leftTag} numberOfLines={1}>
          {item?.food_functionality}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.rightFirstContainer}>
          <Text
            style={[
              styles.rightContainerText,
              {
                backgroundColor: colors.secondary,
                color: colors.text_white,
                paddingHorizontal: 4,
                borderRadius: 4,
              },
            ]}>
            A
          </Text>
          <Text style={[styles.rightContainerText, {color: colors.secondary}]}>
            {item?.rating}
          </Text>
        </View>

        <View
          style={[styles.rightSecondContainer, {borderColor: colors.primary}]}>
          <Text style={styles.rightContainerText}>GL</Text>
          <Text style={styles.rightContainerText}>{item?.gl_rate}</Text>
        </View>

        <View style={styles.rightThirdContainer}>
          <Entypo name='heart' size={24} color={colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    borderWidth: 1,
    borderColor: colors.primary,
    // marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 10,
    position: 'relative',
    paddingLeft: 51,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    height: 108,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.plusButton,
    width: 43,
    position: 'absolute',
  },
  leftContainer: {
    flex: 1,
  },
  leftTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.text_black,
  },
  leftQuantity: {
    fontSize: 13,
    marginBottom: 2,
    color: colors.text_black,
  },
  leftBrand: {
    fontSize: 13,
    marginBottom: 2,
    color: colors.text_black,
  },
  leftTag: {
    fontSize: 11,
    marginBottom: 2,
    color: colors.primary,
  },
  rightContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Platform.OS == 'ios' ? '50%' : '50%',
  },
  rightFirstContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 4,
    paddingHorizontal: 2,
    paddingVertical: 8,
  },
  rightSecondContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  rightThirdContainer: {
    flexDirection: 'row',
  },
  rightContainerText: {
    fontSize: 13,
    marginLeft: 1,
    color: 'grey',
  },
});
