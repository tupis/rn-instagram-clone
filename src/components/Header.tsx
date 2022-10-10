import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import CameraIcon from "react-native-vector-icons/Entypo";
import ChatIcon from "react-native-vector-icons/Ionicons";
import { Cookie_400Regular, useFonts } from "@expo-google-fonts/cookie";

export default function Header(props: any) {
  const { navigation } = props;
  const [fontsLoaded] = useFonts({ Cookie_400Regular });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CameraIcon
          name="camera"
          size={30}
          onPress={() => navigation.navigate("CamStory")}
        />
        <Text style={styles.logo}>Instagram</Text>
        <ChatIcon
          name="ios-chatbubble-ellipses-outline"
          size={30}
          onPress={() => navigation.navigate("Chat")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    top: 0,
  },
  logo: {
    fontSize: 35,
    fontFamily: "Cookie_400Regular",
  },
});
