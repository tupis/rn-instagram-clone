import { Text, View } from "react-native";
import { styles } from "./styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function Perfil() {
  const navigation: any = useNavigation<any>();

  const isFocused: boolean = useIsFocused();

  const blockSwipe: () => Promise<void> = async (): Promise<void> => {
    await navigation.getParent().setOptions({ swipeEnabled: false });
  };

  const unblockSwipe: () => Promise<void> = async (): Promise<void> => {
    await navigation.getParent().setOptions({ swipeEnabled: true });
  };

  useEffect(() => {
    isFocused ? blockSwipe() : unblockSwipe();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  );
}
