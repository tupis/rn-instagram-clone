import { Cookie_400Regular, useFonts } from "@expo-google-fonts/cookie";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Logo,
  Input,
  Button,
  ButtonText,
  RegisterArea,
  RegisterText,
  RegisterButton,
} from "./styles";

export default function Login(props: any) {
  const { navigation } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [fontsLoaded] = useFonts({ Cookie_400Regular });
  if (!fontsLoaded) {
    return null;
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

      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>Log In</ButtonText>
      </Button>

      <RegisterArea>
        <RegisterText>
          Não tem conta?{" "}
          <RegisterButton onPress={() => navigation.navigate("Register")}>
            Registre-se
          </RegisterButton>
        </RegisterText>
      </RegisterArea>
    </Container>
  );
}
