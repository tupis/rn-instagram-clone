import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121213;
  margin-top: -120px;
`;

export const Logo = styled.Text`
  color: white;
  font-family: "Cookie_400Regular";
  font-size: 50px;
  margin-bottom: 50px;
`;

export const Input = styled.TextInput`
  background-color: #333333;
  border-radius: 7px;
  color: white;
  width: 80%;
  margin-bottom: 20px;
  padding: 7px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: #0198fd;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export const LoginArea = styled.View`
  border-top-width: 2px;
  border-top-color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 50px;
`;

export const LoginText = styled.Text`
  color: white;
`;

export const LoginButton = styled.Text`
  color: #0098ff;
`;
