import { View, Image, Text, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import MapPin from "../../images/map-pin.svg";
import MessageIcon from "../../images/message-icon.svg";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./UserPost-styles";

export default function UserPost({ newPost = [] }) {
  const navigation = useNavigation();

  const handleComments = (index) => {
    navigation.navigate("CommentsScreen", { newPost, selectedIndex: index });
  };

  const handleMap = (index) => {
    navigation.navigate("MapScreen", { newPost, selectedIndex: index });
  };

  return (
    <View style={styles.container}>
      {newPost.length !== 0 && (
        <View>
          {newPost.map(({ name, location, picture }, index) => (
            <View style={styles.post__container} key={name}>
              <Image style={styles.user__image} source={{ uri: picture }} />
              <Text style={styles.title}>{name}</Text>
              <View style={styles.user__info}>
                <Pressable
                  onPress={() => handleComments(index)}
                  style={styles.comments}
                >
                  <SvgXml style={styles.message__icon} xml={MessageIcon} />
                  <Text style={{ color: "#BDBDBD" }}>0</Text>
                </Pressable>
                <Pressable
                  onPress={() => handleMap(index)}
                  style={styles.location}
                >
                  <SvgXml style={styles.map__icon} xml={MapPin} />
                  <Text>{location}</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
