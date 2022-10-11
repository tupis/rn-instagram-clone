import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

export const TakePicture = styled.View`
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
