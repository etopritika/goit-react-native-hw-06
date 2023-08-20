import { Pressable,  Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {styles} from "./Form-link-styles"

export const FormLink = ({ children, screenName  }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.auth__link} onPress={() => navigation.navigate(screenName)}>
      <Text style={styles.auth__text}>{children}</Text>
    </Pressable>
  );
};


