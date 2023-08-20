import { ImageBackground, StatusBar } from "react-native";
import { RegisterForm } from "../components/Registration/RegisterForm";
import BackgroundImage from "../images/photo-bg.png";
import { imgStyles } from "./backgroundImg-styles";

export default function Register() {
  return (
    <ImageBackground
      source={BackgroundImage}
      resizeMode="cover"
      style={imgStyles.imageBackground}
    >
      <StatusBar style="auto" />
      <RegisterForm />
    </ImageBackground>
  );
}
