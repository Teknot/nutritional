import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ButtonCompProps extends TouchableOpacityProps {
  text: string;
  color: string;
  icon?: boolean;
  onPress?: any;
}

const ButtonComp: FC<ButtonCompProps> = ({
  onPress,
  text,
  color,
  icon,
  ...rest
}) => {
  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{...styles.buttonContainer, backgroundColor: color}}
          onPress={onPress}
          {...rest}>
          {icon && (
            <AntDesign
              name='pluscircleo'
              size={20}
              color={colors.text_white}
              style={{marginRight: 6}}
            />
          )}
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 6,
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text_white,
    fontSize: 16,
  },
});
