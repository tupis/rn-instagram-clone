import { Text } from "react-native";
import { Container } from "./styles";

export default function Chat(props: any): JSX.Element {
  const { navigation } = props;

  return (
    <Container>
      <Text>Chat</Text>
    </Container>
  );
}
