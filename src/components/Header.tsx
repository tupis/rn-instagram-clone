import CameraIcon from "react-native-vector-icons/Entypo";
import ChatIcon from "react-native-vector-icons/Ionicons";
import { Cookie_400Regular, useFonts } from "@expo-google-fonts/cookie";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  /* paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 */
  margin-top: 25px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: absolute;
  top: 0;
`;

const Logo = styled.Text`
  font-size: 35px;
  font-family: "Cookie_400Regular";
`;

export default function Header(props: any) {
  const { navigation } = props;
  const [fontsLoaded] = useFonts({ Cookie_400Regular });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Container>
      <CameraIcon
        style={{ marginLeft: 10 }}
        name="camera"
        size={30}
        onPress={() => navigation.navigate("CamStory")}
      />
      <Logo>Instagram</Logo>
      <ChatIcon
        style={{ marginRight: 10 }}
        name="ios-chatbubble-ellipses-outline"
        size={30}
        onPress={() => navigation.navigate("Chat")}
      />
    </Container>
  );
}
