import styled from "styled-components/native";
import { IPost } from "./index";
import HeartVector from "react-native-vector-icons/AntDesign";
import PlaneVector from "react-native-vector-icons/Ionicons";
import ChatVector from "react-native-vector-icons/Ionicons";
import BookmarkVector from "react-native-vector-icons/Ionicons";

const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const Heart = styled(HeartVector)`
  font-size: 25px;
  font-weight: bolder;
  stroke: 10px;
  margin-right: 10px;
`;

const HeartOutlined = styled(HeartVector)`
  font-size: 25px;
  font-weight: bolder;
  stroke: 10px;
  margin-right: 10px;
  color: red;
`;

const Comment = styled(ChatVector)`
  font-size: 25px;
  margin-right: 10px;
`;
const Plane = styled(PlaneVector)`
  font-size: 25px;
`;

const Bookmark = styled(BookmarkVector)`
  font-size: 25px;
`;

interface PropsBottom {
  post: IPost;
  liked: [boolean, Function];
  favorited: [isFavorited: boolean, setIsFavorited: Function];
}

export default function BottomPost(props: PropsBottom): JSX.Element {
  const { post, liked, favorited } = props;
  const [isliked, setIsLiked] = liked;
  const [isFavorited, setIsFavorited] = favorited;
  return (
    <Container>
      <Wrapper>
        {isliked ? (
          <HeartOutlined name="heart" onPress={() => setIsLiked(false)} />
        ) : (
          <Heart name="hearto" onPress={() => setIsLiked(true)} />
        )}
        <Comment name="chatbubble-outline" />
        <Plane name="paper-plane-outline" />
      </Wrapper>
      {isFavorited ? (
        <Bookmark name="bookmark" onPress={() => setIsFavorited(false)} />
      ) : (
        <Bookmark
          name="bookmark-outline"
          onPress={() => setIsFavorited(true)}
        />
      )}
    </Container>
  );
}
