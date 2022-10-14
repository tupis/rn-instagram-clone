import { Text, View } from "react-native";
import { styles } from "./styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function Perfil(): JSX.Element {
  const navigation: any = useNavigation<any>();

  const isFocused: boolean = useIsFocused();

  const blockOrUnblockSwipe: () => Promise<void> = async (): Promise<void> => {
    await navigation.getParent().setOptions({ swipeEnabled: !isFocused });
  };

  useEffect(() => {
    blockOrUnblockSwipe();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  );
}
