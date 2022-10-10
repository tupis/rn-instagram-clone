import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "../../screens/Perfil";
import TopTabNav from "../topTab";

export default function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={TopTabNav}
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
