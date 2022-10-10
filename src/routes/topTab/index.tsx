import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CamStory from "../../screens/CamStory";
import Chat from "../../screens/Chat";
import Feed from "../../screens/Feed";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNav(props: any) {
  const { navigation } = props;
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { height: 0 } }}
      initialRouteName="FeedPost"
    >
      <Tab.Screen name="CamStory" component={CamStory} />
      <Tab.Screen name="FeedPost" component={Feed} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
