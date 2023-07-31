import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';

interface Props {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  image?: string;
  keyboardType?: KeyboardTypeOptions;
  onEndEditing?: () => void;
  error?: boolean;
  errorMessage?: string;
  isPassword?: boolean;
}

const InputComponent = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  image,
  keyboardType,
  onEndEditing,
  error,
  errorMessage,
  isPassword = false,
}: Props) => {
  const [isPasswordSecure, setPasswordSecure] = useState(false);

  return (
    <View style={{width: '68%'}}>
      <View style={styles.sectionStyle}>
        <TextInput
          style={{
            flex: 1,
            marginHorizontal: 7,
            paddingVertical: 2,
            color: colors.text_black,
          }}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          onEndEditing={onEndEditing}
          placeholderTextColor="lightgrey"
          secureTextEntry={isPasswordSecure || secureTextEntry}
        />

        <TouchableOpacity
          onPress={() => {
            // setPasswordSecure(!isPasswordSecure);
          }}>
          <Ionicons name="ios-search" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
      {error ? (
        <Text style={{color: '#FF0000', fontSize: 10}}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    height: 46,
    borderRadius: 8,
    marginVertical: 5,
    padding: 10,
  },
  imageStyle: {
    margin: 5,
    height: 20,
    width: 20,
    alignItems: 'center',
  },
});
