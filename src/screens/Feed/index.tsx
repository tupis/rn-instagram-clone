import { Text, Button, SafeAreaView } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";

export default function Feed(props: any) {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Text>Feed</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
}
