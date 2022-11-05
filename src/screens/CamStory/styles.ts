import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import FlipCameraVector from "react-native-vector-icons/AntDesign";
import { Camera as CameraVector } from "expo-camera";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

export const Camera = styled(CameraVector)`
  flex: 1;
  border-radius: 200px;
`;

export const WrapperTouchable = styled.TouchableWithoutFeedback``;

export const Bottom = styled.View`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`;

export const FlipCamera = styled(FlipCameraVector)`
  background-color: gray;
  border-radius: 200px;
  font-size: 30px;
  padding: 10px;
`;

export const TakePicture = styled.View`
  position: absolute;
  bottom: 0;
  border: 5px white;
  height: 85px;
  width: 85px;
  border-radius: 200px;
  align-self: center;
  margin-bottom: 15px;
`;

export const TakePictureInside = styled.TouchableOpacity`
  background-color: white;
  width: 90%;
  height: 90%;
  border-radius: 200px;
  margin: auto;
`;
