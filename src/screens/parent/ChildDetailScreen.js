import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  Modal,
  Dimensions,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { childrenData } from "../../data/appData";
import Ionicons from "react-native-vector-icons/Ionicons";

const ChildDetailScreen = ({ route, navigation }) => {
  const { childId } = route.params;
  const numericChildId = parseInt(childId, 10); // Convert string to number

  // Define status bar height based on platform
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

  // State for homework detail modal
  const [selectedHomework, setSelectedHomework] = useState(null);
  const [showHomeworkModal, setShowHomeworkModal] = useState(false);

  // Get child data from the imported childrenData array
  const childData = childrenData.find((child) => child.id === numericChildId);

  // Handle case when child data is not found
  if (!childData) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.mediumBlue}
          barStyle="light-content"
        />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Thông tin học sinh</Text>
          <View style={{ width: 40 }} />
        </View>
        <View
          style={[
            styles.content,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Text style={{ fontSize: 16, color: "#555", marginBottom: 20 }}>
            Không tìm thấy thông tin học sinh
          </Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.actionButtonText}>Quay lại</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.mediumBlue} barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông tin học sinh</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{childData.avatar}</Text>
            </View>
          </View>
          <Text style={styles.nameText}>{childData.name}</Text>
          <Text style={styles.classText}>{childData.class}</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{childData.grade}</Text>
              <Text style={styles.statLabel}>Điểm trung bình</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{childData.attendance}</Text>
              <Text style={styles.statLabel}>Chuyên cần</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Các môn học</Text>
        </View>

        {childData.subjects.map((subject, index) => (
          <TouchableOpacity
            key={index}
            style={styles.subjectCard}
            onPress={() => {
              setSelectedHomework(subject.homeworkDetail);
              setShowHomeworkModal(true);
            }}
          >
            <View style={styles.subjectHeader}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectGrade}>{subject.grade}</Text>
            </View>
            <View style={styles.subjectDetail}>
              <Text style={styles.subjectTeacher}>
                Giáo viên: {subject.teacher}
              </Text>
              <Text style={styles.subjectHomework}>
                Bài tập gần đây: {subject.lastHomework}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Nhận xét của giáo viên</Text>
        </View>

        {childData.teacherFeedback.map((feedback, index) => (
          <View key={index} style={styles.feedbackCard}>
            <View style={styles.feedbackHeader}>
              <View style={styles.feedbackHeaderLeft}>
                <Text style={styles.feedbackTeacher}>{feedback.teacher}</Text>
                <Text style={styles.feedbackSubject}>{feedback.subject}</Text>
              </View>
              <Text style={styles.feedbackDate}>{feedback.date}</Text>
            </View>
            <View style={styles.feedbackContent}>
              <Text style={styles.feedbackText}>{feedback.content}</Text>
            </View>
            <View style={styles.feedbackFooter}>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingLabel}>Đánh giá: </Text>
                <View style={styles.starContainer}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Text
                      key={star}
                      style={[
                        styles.starIcon,
                        star <= feedback.rating
                          ? styles.starActive
                          : styles.starInactive,
                      ]}
                    >
                      ★
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("Schedule")}
          >
            <Text style={styles.actionButtonText}>Xem lịch học</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
          >
            <Text style={styles.secondaryButtonText}>Liên hệ giáo viên</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer} />
      </ScrollView>

      {/* Homework Detail Modal */}
      <Modal
        visible={showHomeworkModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowHomeworkModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedHomework && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>
                    {selectedHomework.title}
                  </Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setShowHomeworkModal(false)}
                  >
                    <Ionicons name="close" size={20} color="#999" />
                  </TouchableOpacity>
                </View>

                <ScrollView style={styles.modalContent}>
                  <View style={styles.homeworkInfoCard}>
                    <Text style={styles.homeworkInfoLabel}>Mô tả bài tập:</Text>
                    <Text style={styles.homeworkInfoValue}>
                      {selectedHomework.description}
                    </Text>
                  </View>

                  <View style={styles.homeworkInfoRow}>
                    <View style={styles.homeworkInfoItem}>
                      <Text style={styles.homeworkInfoLabel}>Hạn nộp:</Text>
                      <Text style={styles.homeworkInfoValue}>
                        {selectedHomework.dueDate}
                      </Text>
                    </View>
                    <View style={styles.homeworkInfoItem}>
                      <Text style={styles.homeworkInfoLabel}>Ngày nộp:</Text>
                      <Text style={styles.homeworkInfoValue}>
                        {selectedHomework.submissionDate}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.homeworkScoreCard}>
                    <Text style={styles.homeworkScoreLabel}>Điểm số:</Text>
                    <Text style={styles.homeworkScoreValue}>
                      {selectedHomework.score}
                    </Text>
                  </View>

                  <View style={styles.homeworkDetailCard}>
                    <Text style={styles.homeworkDetailLabel}>
                      Nhận xét của giáo viên:
                    </Text>
                    <Text style={styles.homeworkDetailText}>
                      {selectedHomework.teacherComment}
                    </Text>
                  </View>

                  <View style={styles.homeworkDetailCard}>
                    <Text style={styles.homeworkDetailLabel}>
                      Nội dung bài làm:
                    </Text>
                    <Text style={styles.homeworkDetailText}>
                      {selectedHomework.studentWork}
                    </Text>
                  </View>

                  <View style={styles.homeworkDetailCard}>
                    <Text style={styles.homeworkDetailLabel}>
                      Hình ảnh bài làm:
                    </Text>
                    <View style={styles.imageGallery}>
                      {selectedHomework.studentImages.map((imageUrl, index) => (
                        <TouchableOpacity
                          key={index}
                          style={styles.imageContainer}
                          onPress={() => {
                            // Thêm chức năng xem ảnh toàn màn hình ở đây nếu muốn
                          }}
                        >
                          <Image
                            source={{ uri: imageUrl }}
                            style={styles.homeworkImage}
                            resizeMode="cover"
                          />
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </ScrollView>

                <View style={styles.modalActions}>
                  <TouchableOpacity
                    style={styles.modalActionButton}
                    onPress={() => setShowHomeworkModal(false)}
                  >
                    <Text style={styles.modalActionText}>Đóng</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: COLORS.mediumBlue,
    paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight + 10,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.mediumBlue,
  },
  avatarText: {
    fontSize: 36,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  classText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#f0f0f0",
  },
  sectionTitle: {
    marginVertical: 15,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subjectCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  subjectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subjectGrade: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
  },
  subjectDetail: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 10,
  },
  subjectTeacher: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  subjectHomework: {
    fontSize: 14,
    color: "#666",
  },
  feedbackCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  feedbackHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  feedbackHeaderLeft: {
    flex: 1,
  },
  feedbackTeacher: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  feedbackSubject: {
    fontSize: 14,
    color: "#666",
  },
  feedbackDate: {
    fontSize: 12,
    color: "#888",
    fontStyle: "italic",
  },
  feedbackContent: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  feedbackText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  feedbackFooter: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingLabel: {
    fontSize: 14,
    color: "#666",
    marginRight: 5,
  },
  starContainer: {
    flexDirection: "row",
  },
  starIcon: {
    fontSize: 16,
    marginHorizontal: 1,
  },
  starActive: {
    color: "#FFC107",
  },
  starInactive: {
    color: "#E0E0E0",
  },
  actionButtons: {
    marginTop: 20,
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  actionButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.mediumBlue,
  },
  secondaryButtonText: {
    color: COLORS.mediumBlue,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    height: 20,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    maxHeight: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  closeButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 20,
    color: "#999",
    fontWeight: "bold",
  },
  modalContent: {
    padding: 20,
    maxHeight: 400,
  },
  homeworkInfoCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  homeworkInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  homeworkInfoItem: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 15,
    width: "48%",
  },
  homeworkInfoLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginBottom: 5,
  },
  homeworkInfoValue: {
    fontSize: 14,
    color: "#333",
  },
  homeworkScoreCard: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeworkScoreLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  homeworkScoreValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  homeworkDetailCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  homeworkDetailLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginBottom: 8,
  },
  homeworkDetailText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  modalActions: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  modalActionButton: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  modalActionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  imageGallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "48%", // Hiển thị 2 ảnh một hàng
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  homeworkImage: {
    width: "100%",
    height: 150, // Chiều cao cố định cho mỗi ảnh
    backgroundColor: "#f0f0f0",
  },
});

export default ChildDetailScreen;
