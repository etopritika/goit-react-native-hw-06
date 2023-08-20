import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { styles } from "./CreatePostsScreen-styles";
import CameraView from "../../components/CameraView/CameraView";
import { SvgXml } from 'react-native-svg';
import TrashIcon from "../../images/trash-icon.svg";
import { useDispatch } from "react-redux";
import { createPostThunk } from "../../redux/Post/postOperations";

import * as Location from "expo-location";

export default function CreatePostsScreen() {
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({});
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const redoPicture = () => {
    setPicture(null);
    setName("");
    setLocation("");
  };

  const handleLocation = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;

      setCurrentLocation({ latitude, longitude });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleLocation();
  }, []);

  const handleMakePost = () => {
    const newPost = {
      picture: picture,
      name: name,
      location: location,
      currentLocation: currentLocation,
    };
    dispatch(createPostThunk(newPost));
    navigation.navigate("PostsScreen", { newPost });
    
    redoPicture();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.input__container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.camera__container}>
            {picture ? (
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: `${picture}` }}
              />
            ) : (
              <CameraView onPictureTaken={setPicture} />
            )}
          </View>
          {!picture ? (
            <Text style={styles.camera__title}>Завантажте фото</Text>
          ) : (
            <Text style={styles.camera__title}>Редагувати фото</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            type="text"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Місцевість..."
            type="text"
            value={location}
            onChangeText={setLocation}
          />
          <Pressable
            style={[
              styles.publish__btn,
              !picture && styles.publish__btn_disabled,
            ]}
            disabled={!picture}
            onPress={handleMakePost}
          >
            <Text
              style={[
                styles.publish__text,
                !picture && styles.publish__text_disabled,
              ]}
            >
              Опублікувати
            </Text>
          </Pressable>
          <Pressable onPress={redoPicture} style={styles.delete__btn}>
          <SvgXml width="24" height="24" xml={TrashIcon} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
