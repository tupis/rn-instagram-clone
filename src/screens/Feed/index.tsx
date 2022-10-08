import { View, Text, Button } from "react-native";

export default function Feed(props: any) {
  const { navigation } = props;
  return (
    <View>
      <Text>Feed</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
