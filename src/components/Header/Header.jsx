import { View, Pressable, Text } from "react-native";
import {styles} from "./Header-styles";

export default function AppHeader ({ title }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
