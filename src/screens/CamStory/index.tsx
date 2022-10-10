import {
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState, useRef } from "react";
import { styles } from "./styles";

export default function CamStory() {
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
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          {" "}
          =( precisamos da permissão para da sua câmera{" "}
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
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity onPress={takePicture} style={{ height: 100 }}>
        <Text style={{ color: "white", alignSelf: "center" }}>TakePicture</Text>
      </TouchableOpacity>

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
    </SafeAreaView>
  );
}
