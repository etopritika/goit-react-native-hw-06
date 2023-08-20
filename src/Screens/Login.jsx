import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import { LoginForm } from "../components/Login/LoginScreen";
import BackgroundImage from "../images/photo-bg.png";
import { imgStyles } from "./backgroundImg-styles";

export default function Login() {
  return (
    <ImageBackground
      source={BackgroundImage}
      resizeMode="cover"
      style={imgStyles.imageBackground}
    >
      <StatusBar style="auto" />
      <LoginForm />
    </ImageBackground>
  );
}
