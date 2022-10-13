import { Cookie_400Regular, useFonts } from "@expo-google-fonts/cookie";
import { useForm, Controller } from "react-hook-form";
import Login from "../Login";
import {
  Container,
  Logo,
  Input,
  Button,
  ButtonText,
  LoginArea,
  LoginButton,
  LoginText,
} from "./styles";

export default function Register(props: any): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { navigation } = props;
  const [fontsLoaded] = useFonts({ Cookie_400Regular });
  if (!fontsLoaded) {
    return <></>;
  }

  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <Logo>Instagram</Logo>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Insira seu username"
            placeholderTextColor="#e5e4e4"
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Insira seu email"
            placeholderTextColor="#e5e4e4"
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Senha"
            placeholderTextColor="#e5e4e4"
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Confirme a senha"
            placeholderTextColor="#e5e4e4"
          />
        )}
        name="confirmPassword"
      />

      <Button
        // onPress={() => navigation.navigate("Home")}
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText>Registrar</ButtonText>
      </Button>

      <LoginArea>
        <LoginText>
          Ja tem conta ?{" "}
          <LoginButton onPress={() => navigation.navigate("Login")}>
            Faça login
          </LoginButton>
        </LoginText>
      </LoginArea>
    </Container>
  );
}
