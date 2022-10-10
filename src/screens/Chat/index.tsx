import { StyleSheet, Text, View } from "react-native";

export default function Chat(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
