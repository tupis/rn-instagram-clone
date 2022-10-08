import { Cookie_400Regular, useFonts } from "@expo-google-fonts/cookie";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { dark } from "./styles";
import { light } from "./styles";

export default function Login(props: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { navigation } = props;
  const [fontsLoaded] = useFonts({ Cookie_400Regular });
  if (!fontsLoaded) {
    return null;
  }

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <SafeAreaView style={dark.container}>
        <Text style={dark.logo}>Instagram</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={dark.input}
              placeholder="Insira seu email"
              placeholderTextColor="#e5e4e4"
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={dark.input}
              placeholder="Senha"
              placeholderTextColor="#e5e4e4"
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <TouchableOpacity
          // onPress={() => navigation.navigate("Home")}
          onPress={handleSubmit(onSubmit)}
          style={dark.button}
        >
          <Text style={dark.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={dark.registerArea}>
          <Text style={dark.registerTextArea}>
            Não tem conta?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              style={dark.register}
            >
              Registre-se
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
