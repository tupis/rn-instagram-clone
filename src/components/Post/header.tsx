import styled from "styled-components/native";
import { IPost } from "./index";

import IconHorizontal from "react-native-vector-icons/Feather";

interface PropsHeader {
  post: IPost;
}

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  padding: 20px 10px;
  align-items: center;
  justify-content: space-between;
`;

const Infos = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProfilePic = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 10px;
`;

const Username = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 17px;
`;

const MoreButton = styled(IconHorizontal)``;

export default function HeaderPost(props: PropsHeader): JSX.Element {
  const { post } = props;

  return (
    <Container>
      <Infos>
        <ProfilePic source={{ uri: post.profilePic }} />
        <Username children={post.username} />
      </Infos>
      <MoreButton name="more-horizontal" size={25} />
    </Container>
  );
}
