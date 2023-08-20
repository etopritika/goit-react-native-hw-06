import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { SvgXml } from "react-native-svg";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
// import ArrowLeft from "../../images/arrow-left.svg";

export const HeaderLeftBtn = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PostsScreen");
      }}
      style={{ marginLeft: 16 }}
    >
      <Svg width={props.width || 24} height={props.height || 24} fill="none">
        <Circle cx={12} cy={12} r={8} stroke="#C1C5D2" />
        <Path stroke="#C1C5D2" strokeLinecap="round" d="m9 15 6-6M15 15 9 9" />
      </Svg>
    </TouchableOpacity>
  );
};
