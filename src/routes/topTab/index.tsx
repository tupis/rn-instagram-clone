import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CamStory from "../../screens/CamStory";
import Chat from "../../screens/Chat";
import Home from "../bottomTab";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNav(props: any): JSX.Element {
  const { navigation } = props;
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { height: 0 } }}
      initialRouteName="Feed"
    >
      <Tab.Screen name="CamStory" component={CamStory} />
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
