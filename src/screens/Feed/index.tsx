import Header from "../../components/Header";
import Post from "../../components/Post";
import { Container, Scroll } from "./styles";

export default function Feed(props: any): JSX.Element {
  const { navigation } = props;

  return (
    <Container>
      <Header navigation={navigation} />
      {/* <Scroll> */}
      <Post />
      {/* </Scroll> */}
    </Container>
  );
}
