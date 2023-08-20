import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import AppHeader from "../components/Header/Header";
import { Logout } from "../components/Logout/Logout";
import { HeaderLeftBtn } from "../components/HeaderLeftBtn/HeaderLeftBtn";

const Tabs = createBottomTabNavigator();

export default function Home() {
  const tabOptions = {
    headerStyle: {
      borderBottomColor: "#0000004d",
      borderBottomWidth: 1,
    },
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "PostsScreen") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: "",
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          borderTopColor: "#0000004d",
          borderTopWidth: 1,
          paddingTop: 9,
          maxHeight: 83,
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        },
        tabBarItemStyle: {
          borderRadius: 20,
          height: 40,
          maxWidth: 70,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarIconStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation }) => ({
          headerTitle: () => <AppHeader title="Публікації" />,
          ...tabOptions,
          headerRight: () => <Logout navigation={navigation} />,
          headerLeft: null,
        })}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerTitle: () => <AppHeader title="Створити публікацію" />,
          ...tabOptions,
          headerRight: null,
          tabBarStyle: { display: "none" },
          headerLeft: () => <HeaderLeftBtn />,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: () => <AppHeader title="Профіль" />,
          ...tabOptions,
        }}
      />
    </Tabs.Navigator>
  );
}
