import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../../screens/Feed";
import Perfil from "../../screens/Perfil";
import Reels from "../../screens/Reels";

export default function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}