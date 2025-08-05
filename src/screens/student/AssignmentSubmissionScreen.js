import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { COLORS } from "../../constants/colors";
import CameraComponent from "../../components/CameraComponent";
import Ionicons from "react-native-vector-icons/Ionicons";

const AssignmentSubmissionScreen = ({ route, navigation }) => {
  const { assignment, childId, childName } = route.params;
  const [images, setImages] = useState([]);
  const [comment, setComment] = useState("");
  const [showCamera, setShowCamera] = useState(false);

  // Mở camera để chụp ảnh
  const openCamera = () => {
    setShowCamera(true);
  };

  // Xử lý khi chụp ảnh xong
  const handleCapture = (photo) => {
    setImages([
      ...images,
      {
        id: Date.now().toString(),
        uri: photo.uri,
      },
    ]);
    setShowCamera(false);
  };

  // Đóng camera nếu người dùng hủy
  const handleCloseCamera = () => {
    setShowCamera(false);
  };

  // Giả lập gửi bài tập
  const submitAssignment = () => {
    if (images.length === 0) {
      Alert.alert("Lỗi", "Vui lòng chụp ít nhất một ảnh");
      return;
    }

    Alert.alert("Xác nhận", "Bạn có chắc muốn nộp bài tập này?", [
      {
        text: "Hủy",
        style: "cancel",
      },
      {
        text: "Nộp bài",
        onPress: () => {
          Alert.alert("Thành công", "Đã nộp bài tập thành công!", [
            {
              text: "OK",
              onPress: () => navigation.goBack(),
            },
          ]);
        },
      },
    ]);
  };

  // Xóa ảnh đã chụp
  const removeImage = (imageId) => {
    setImages(images.filter((img) => img.id !== imageId));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Camera component */}
      {showCamera && (
        <CameraComponent
          onCapture={handleCapture}
          onClose={handleCloseCamera}
        />
      )}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#2C405A" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Nộp Bài Tập</Text>
          <Text style={styles.headerSubtitle}>{childName}</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Assignment details */}
        <View style={styles.assignmentDetails}>
          <View style={styles.assignmentHeader}>
            <View
              style={[
                styles.emojiContainer,
                { backgroundColor: assignment.color || "#E2EAF2" },
              ]}
            >
              <Text style={styles.emoji}>{assignment.emoji}</Text>
            </View>
            <View style={styles.assignmentTitleContainer}>
              <Text style={styles.assignmentTitle}>{assignment.title}</Text>
              <Text style={styles.subjectText}>{assignment.subject}</Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>Mô tả:</Text>
            <Text style={styles.detailText}>
              {assignment.description || "Không có mô tả"}
            </Text>

            <Text style={styles.detailLabel}>Hạn nộp:</Text>
            <Text style={styles.detailText}>{assignment.dueDate}</Text>

            <Text style={styles.detailLabel}>Giáo viên:</Text>
            <Text style={styles.detailText}>{assignment.teacher}</Text>
          </View>
        </View>

        {/* Photo upload section */}
        <View style={styles.uploadSection}>
          <Text style={styles.sectionTitle}>Chụp và đính kèm ảnh bài làm</Text>

          <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
            <Text style={styles.cameraButtonText}>📷 Chụp ảnh bài làm</Text>
          </TouchableOpacity>

          {/* Images preview */}
          {images.length > 0 && (
            <View style={styles.imagesContainer}>
              {images.map((image) => (
                <View key={image.id} style={styles.imageWrapper}>
                  <Image source={{ uri: image.uri }} style={styles.image} />
                  <TouchableOpacity
                    style={styles.removeImageButton}
                    onPress={() => removeImage(image.id)}
                  >
                    <Text style={styles.removeImageText}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Comment section */}
        <View style={styles.commentSection}>
          <Text style={styles.sectionTitle}>Ghi chú (không bắt buộc)</Text>
          <TextInput
            style={styles.commentInput}
            multiline
            placeholder="Thêm ghi chú về bài làm của bạn..."
            value={comment}
            onChangeText={setComment}
          />
        </View>
      </ScrollView>

      {/* Submit button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[
            styles.submitButton,
            images.length === 0 && styles.disabledButton,
          ]}
          onPress={submitAssignment}
          disabled={images.length === 0}
        >
          <Text style={styles.submitButtonText}>Nộp bài</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FC",
  },
  header: {
    backgroundColor: COLORS.mediumBlue,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 24,
    color: "#2C405A",
  },
  headerTextContainer: {
    marginLeft: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2C405A",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#4A5568",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  assignmentDetails: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  assignmentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  emojiContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2EAF2",
  },
  emoji: {
    fontSize: 24,
  },
  assignmentTitleContainer: {
    marginLeft: 15,
    flex: 1,
  },
  assignmentTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2C405A",
    marginBottom: 5,
  },
  subjectText: {
    fontSize: 14,
    color: "#4A5568",
  },
  detailsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#EAEFF8",
    paddingTop: 15,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2C405A",
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    color: "#4A5568",
    marginBottom: 15,
  },
  uploadSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2C405A",
    marginBottom: 15,
  },
  cameraButton: {
    backgroundColor: "#EAEFF8",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  cameraButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C405A",
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    width: "48%",
    aspectRatio: 1.5,
    margin: "1%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  removeImageButton: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#FF6B6B",
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  removeImageText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  commentSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 80,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  commentInput: {
    backgroundColor: "#EAEFF8",
    borderRadius: 10,
    padding: 15,
    height: 100,
    textAlignVertical: "top",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#EAEFF8",
  },
  submitButton: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#C5CAD6",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default AssignmentSubmissionScreen;
