import { View, Image, Text } from "react-native";
import { styles } from "./User-styles";

export default function User({email, login}) {
  return (
    <View style={styles.container}>
      <View style={styles.user__container}>
        <Image style={styles.avatar} source={require('../../images/avatar/girl.jpeg')} />
        <View style={styles.user__title}>
          <Text style={styles.user__name}>{login}</Text>
          <Text style={styles.user__email}>{email}</Text>
        </View>
      </View>
    </View>
  );
}
