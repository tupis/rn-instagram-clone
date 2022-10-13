import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TopTabNav from "./topTab";

export default function Routes(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const [isLogged, setIsLogged] = useState<boolean>(true);

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  useLayoutEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLogged ? "Home" : "Login"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TopTabNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
