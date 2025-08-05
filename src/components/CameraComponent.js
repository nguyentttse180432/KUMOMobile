import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native";
import { Camera as ExpoCamera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const CameraComponent = ({ onCapture, onClose }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(ExpoCamera.Constants?.Type?.back || "back");
  const [flash, setFlash] = useState(
    ExpoCamera.Constants?.FlashMode?.off || "off"
  );
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await ExpoCamera.requestCameraPermissionsAsync();
      setHasPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef && cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        setImage(photo.uri);
        console.log("Chụp ảnh thành công:", photo);
        onCapture(photo);
      } catch (error) {
        console.error("Lỗi khi chụp ảnh:", error);
      }
    }
  };

  const toggleCameraType = () => {
    setType(
      type === (ExpoCamera.Constants?.Type?.back || "back")
        ? ExpoCamera.Constants?.Type?.front || "front"
        : ExpoCamera.Constants?.Type?.back || "back"
    );
  };

  const toggleFlash = () => {
    setFlash(
      flash === (ExpoCamera.Constants?.FlashMode?.off || "off")
        ? ExpoCamera.Constants?.FlashMode?.on || "on"
        : ExpoCamera.Constants?.FlashMode?.off || "off"
    );
  };

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <Text>Đang yêu cầu quyền truy cập camera...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text>Không có quyền truy cập camera</Text>
        <Button
          title="Yêu cầu quyền"
          onPress={() => ExpoCamera.requestCameraPermissionsAsync()}
        />
      </View>
    );
  }

  // Simplified camera UI for troubleshooting
  return (
    <View style={styles.container}>
      <ExpoCamera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.controlText}>✕</Text>
          </TouchableOpacity>

          <View style={styles.bottomControls}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={toggleCameraType}
            >
              <Text style={styles.controlText}>🔄</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
            >
              <View style={styles.captureInner} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flipButton} onPress={toggleFlash}>
              <Text style={styles.controlText}>⚡</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ExpoCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    zIndex: 100,
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  camera: {
    flex: 1,
  },
  controlsContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  closeButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 30,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 20,
    marginTop: Platform.OS === "ios" ? 40 : 20,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  controlButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  controlText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  flipButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraComponent;
