import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { CameraType } from "expo-camera";
import { useState, useRef } from "react";
import {
  Bottom,
  Camera,
  Container,
  FlipCamera,
  TakePicture,
  TakePictureInside,
  WrapperTouchable,
} from "./styles";

export default function CamStory(): JSX.Element {
  const camRef = useRef<any>(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedPhoto, setCaputredPhoto] = useState<any>();
  const [open, setOpen] = useState<any>(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          =( precisamos da permissão para da sua câmera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCaputredPhoto(data.uri);
      setOpen(true);
    }
  }

  return (
    <Container>
      <Camera type={type} ref={camRef}>
        <TakePicture>
          <TakePictureInside onPress={takePicture} />
        </TakePicture>
      </Camera>

      <Bottom>
        <WrapperTouchable onPress={toggleCameraType}>
          <FlipCamera name="retweet" color="white" />
        </WrapperTouchable>
      </Bottom>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={{ margin: 20 }}
              onPress={() => setOpen(false)}
            >
              <Text>Close</Text>
            </TouchableOpacity>
            <Image
              style={{ width: "100%", height: 300, borderRadius: 20 }}
              source={{ uri: `${capturedPhoto}` }}
            />
          </View>
        </Modal>
      )}
    </Container>
  );
}
