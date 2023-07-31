import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const SearchScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.searchText}>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchText: {
    color: colors.text_black,
  },
});

export default SearchScreen;
