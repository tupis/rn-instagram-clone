import { useState } from "react";
import HeaderPost from "./header";
import ImageFeed from "./imageFeed";
import BottomPost from "./bottom";

const profilePhotoURI =
  "https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg";
const postPhotoURI =
  "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg";
const user = "tupis";

const profilePhotoURI2 =
  "https://jangada.ag/wp-content/uploads/2017/04/jangada-v2-baby-do-brasil-7-capa-quadrada.jpg";
const user2 = "jh.tupinamba";
const postPhotoURI2 =
  "https://img.freepik.com/vetores-premium/moldura-quadrada-de-luz-rosa-quadrado-de-luz-rosa-banner-quadrado-luz-rosa_1189-2997.jpg";

export interface IPost {
  profilePic: string;
  feedPic: string;
  username: string;
  numberLikes?: number;
}

export default function Post(): JSX.Element {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const post: IPost = {
    profilePic: profilePhotoURI,
    feedPic: postPhotoURI,
    username: user,
  };

  const post2: IPost = {
    profilePic: profilePhotoURI,
    feedPic: postPhotoURI,
    username: user,
  };

  return (
    <>
      <HeaderPost post={post} />
      <ImageFeed post={post} liked={[isLiked, setIsLiked]} />
      <BottomPost
        post={post}
        liked={[isLiked, setIsLiked]}
        favorited={[isFavorite, setIsFavorite]}
      />
    </>
  );
}
