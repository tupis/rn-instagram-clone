import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Image, TouchableHighlight, View } from "react-native";
import { IPost } from "./index";
import HeartVector from "react-native-vector-icons/AntDesign";

interface PropsFeed {
  post: IPost;
  liked: [boolean, Function];
}

const Container = styled.View`
  width: 100%;
  max-height: 500px;
  justify-content: center;
  align-items: center;
`;

const ImagePost = styled(Image)`
  width: 100%;
  height: undefined;
`;

const Heart = styled(HeartVector)`
  color: red;
  font-size: 100px;
  position: absolute;
`;

export default function ImageFeed(props: PropsFeed): JSX.Element {
  const { post, liked } = props;
  const [isLiked] = liked;
  const [aspectRatio, setAspectRatio] = useState<number[]>([1, 1]);

  function calculateAspectRatio(width: number, height: number): number[] {
    function gcd(x: number, y: number): number {
      x = Math.abs(x);
      y = Math.abs(y);
      while (y) {
        let t = y;
        y = x % y;
        x = t;
      }
      return x;
    }

    const divisor: number = gcd(width, height);
    const w: number = width / divisor;
    const h: number = height / divisor;

    return [w, h];
  }

  function getSizeImage(): void {
    Image.getSize(post.feedPic, (width: number, height: number): void => {
      const aspectRatio: number[] = calculateAspectRatio(width, height);
      setAspectRatio(aspectRatio);
    });
  }

  useEffect(() => {
    getSizeImage();
  }, [post]);

  useEffect(() => {}, [isLiked]);

  return (
    <Container>
      <ImagePost
        source={{ uri: post.feedPic }}
        style={{
          aspectRatio: aspectRatio[0] / aspectRatio[1],
        }}
      />
      {isLiked && <Heart name="heart" />}
    </Container>
  );
}
