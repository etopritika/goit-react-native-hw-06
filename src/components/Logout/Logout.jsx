import { Pressable } from "react-native";
import { SvgXml } from 'react-native-svg';
import LogoutImg from "../../images/logout/log-out.svg";
import { logOutAuthThunk } from "../../redux/Auth/authOperations";
import { useDispatch } from "react-redux";

export const Logout = ({navigation}) => {
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    navigation.navigate("Login");
    dispatch(logOutAuthThunk());
  };

  return (
    <Pressable style={{ marginRight: 16 }} onPress={handleSubmit}>
      <SvgXml width="24" height="24" xml={LogoutImg} />
    </Pressable>
  );
}
