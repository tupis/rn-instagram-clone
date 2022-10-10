import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../../screens/Feed";
import Perfil from "../../screens/Perfil";

export default function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
