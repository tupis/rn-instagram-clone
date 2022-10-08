import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={style.container}>
      <Text>Login</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
