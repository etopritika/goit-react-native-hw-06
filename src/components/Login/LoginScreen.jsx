import {
  View,
  TextInput,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { FormLink } from "../Form-link/Form-link";
import { styles } from "../Registration/Registration-styles";
import { loginStyles } from "./Login-styles";
import { useDispatch } from "react-redux";
import { logInAuthThunk } from "../../redux/Auth/authOperations";
import { setUser } from "../../redux/Auth/authSlice";
import { auth } from "../../../config";
import { onAuthStateChanged } from "firebase/auth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (token) => {
      if (token) {
        console.log("Користувач log in!", token.uid);
        navigation.navigate("Home");
      } else {
        console.log("Користувач log out!");
        navigation.navigate("Login");
      }
    });
  }, []);

  const handleShowPress = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    if (email.trim() === "" && password.trim() === "") {
      alert("Email and password is required");
      return;
    }

    try {
      await dispatch(logInAuthThunk({ email, password }));
      dispatch(setUser({ email }));
      navigation.navigate("Home");
    } catch (error) {
      throw error;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.input__container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={loginStyles.container}>
          <Text style={styles.title}>Увійти</Text>

          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            type="email"
            name="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.pass__container}>
            <TextInput
              style={styles.pass__input}
              placeholder="Пароль"
              type="password"
              name="password"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable style={styles.show__password} onPress={handleShowPress}>
              <Text style={styles.pass__text}>Показати</Text>
            </Pressable>
          </View>

          <Pressable style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.submit__text}>Увійти</Text>
          </Pressable>
          <FormLink screenName="Register">
            Немає акаунту? Зареєструватися
          </FormLink>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
