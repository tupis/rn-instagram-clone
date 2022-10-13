import { Text, Button } from "react-native";
import Header from "../../components/Header";
import { Container } from "./styles";

export default function Feed(props: any): JSX.Element {
  const { navigation } = props;

  return (
    <Container>
      <Header navigation={navigation} />
      <Text>Feed</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </Container>
  );
}
