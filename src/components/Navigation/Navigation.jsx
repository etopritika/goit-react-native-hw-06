import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../Screens/Login";
import Register from "../../Screens/Register";
import Home from "../../Screens/Home";
import CommentsScreen from "../../Screens/CommentsScreen";
import MapScreen from "../../Screens/MapScreen";
import HeaderLeftBtn from "../HeaderLeftBtn/HeaderLeftBtn";
import AppHeader from "../Header/Header"

const MainStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerTitle: () => <AppHeader title="Коментарі" />,
            headerRight: null,
            headerLeft: () => <HeaderLeftBtn />,
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerTitle: () => <AppHeader title="Мапа" />,
            headerRight: null,
            headerLeft: () => <HeaderLeftBtn />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
