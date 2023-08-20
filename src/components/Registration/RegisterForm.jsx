import { useState } from "react";
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
import { FormLink } from "../Form-link/Form-link";
import { styles } from "./Registration-styles";
import { useDispatch } from "react-redux";
import { registerAuthThunk } from "../../redux/Auth/authOperations";
import { setUser } from "../../redux/Auth/authSlice";

export const RegisterForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleShowPress = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    if (email.trim() === "" && password.trim() === "" && login.trim() === "") {
      alert("Email, login and password is required");
      return;
    }
    try {
      await dispatch(registerAuthThunk({ login, email, password }));
      dispatch(setUser({ email, login }));
      navigation.navigate("Home");
    } catch (error) {
      throw error;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.avatar__container}>
            {/* <Avatar style={styles.avatar__image} /> */}
          </View>
          <Text style={styles.title}>Реєстрація</Text>

          <TextInput
            style={styles.input}
            placeholder="Логін"
            type="text"
            name="login"
            value={login}
            onChangeText={setLogin}
          />
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
            <Text style={styles.submit__text}>Зареєстуватися</Text>
          </Pressable>
          <FormLink screenName="Login">Вже є акаунт? Увійти</FormLink>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
