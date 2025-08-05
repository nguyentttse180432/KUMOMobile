import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
  StatusBar,
  Platform,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { childrenData } from "../../data/appData";

const { width } = Dimensions.get("window");

const ChildrenScreen = ({ navigation }) => {
  // Define status bar height based on platform
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

  const [showAddModal, setShowAddModal] = useState(false);
  const [newChildName, setNewChildName] = useState("");
  const [newChildAge, setNewChildAge] = useState("");
  const [newChildGrade, setNewChildGrade] = useState("");

  // Convert childrenData to the format needed for this screen
  const children = childrenData.map((child) => ({
    id: child.id.toString(),
    name: child.name,
    age: child.age,
    grade: child.class,
    avatar: child.avatar,
    school: child.school,
    status: child.status,
    lastActivity: child.lastActivity,
    averageGrade: parseFloat(child.grade),
    attendance: child.attendance,
    subjects: child.subjects.length,
    homework: child.homework,
    messages: child.messages,
    achievements: child.achievements,
    nextClass: child.nextClass,
  }));

  const handleAddChild = () => {
    // Add child logic here
    setShowAddModal(false);
    setNewChildName("");
    setNewChildAge("");
    setNewChildGrade("");
  };

  const renderChildItem = ({ item }) => (
    <TouchableOpacity
      style={styles.childCard}
      onPress={() => navigation.navigate("ChildDetail", { childId: item.id })}
    >
      {/* Child Header */}
      <View style={styles.childHeader}>
        <View style={styles.childAvatarContainer}>
          <Text style={styles.childAvatar}>{item.avatar}</Text>
          <View
            style={[
              styles.statusIndicator,
              {
                backgroundColor:
                  item.status === "active" ? "#4CAF50" : "#FFC107",
              },
            ]}
          />
        </View>
        <View style={styles.childMainInfo}>
          <Text style={styles.childName}>{item.name}</Text>
          <Text style={styles.childDetail}>
            {item.age} tuổi • {item.grade}
          </Text>
          <Text style={styles.schoolName}>{item.school}</Text>
        </View>
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() =>
            navigation.navigate("StudentTabs", { childId: item.id })
          }
        >
          <Text style={styles.switchButtonText}>Đổi</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Stats */}
      <View style={styles.quickStats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.averageGrade}</Text>
          <Text style={styles.statLabel}>Điểm TB</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.attendance}</Text>
          <Text style={styles.statLabel}>Chuyên cần</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.subjects}</Text>
          <Text style={styles.statLabel}>Môn học</Text>
        </View>
      </View>

      {/* Notifications */}
      <View style={styles.notificationsRow}>
        {item.homework > 0 && (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationIcon}>📚</Text>
            <Text style={styles.notificationText}>
              {item.homework} bài tập mới
            </Text>
          </View>
        )}
        {item.messages > 0 && (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationIcon}>💬</Text>
            <Text style={styles.notificationText}>
              {item.messages} tin nhắn
            </Text>
          </View>
        )}
      </View>

      {/* Next Class */}
      <View style={styles.nextClassContainer}>
        <Text style={styles.nextClassLabel}>Tiết học tiếp theo:</Text>
        <Text style={styles.nextClassInfo}>{item.nextClass}</Text>
      </View>

      {/* Achievements */}
      <View style={styles.achievementsContainer}>
        <Text style={styles.achievementsLabel}>Thành tích:</Text>
        <View style={styles.achievementsList}>
          {item.achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementBadge}>
              <Text style={styles.achievementText}>{achievement}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Last Activity */}
      <View style={styles.lastActivityContainer}>
        <Text style={styles.lastActivityText}>
          Hoạt động cuối: {item.lastActivity}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.mediumBlue} barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Con của bạn</Text>
          <Text style={styles.headerSubtitle}>Quản lý và theo dõi học tập</Text>
        </View>
      </View>

      {/* Summary Cards */}
      <View style={styles.summarySection}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>{children.length}</Text>
          <Text style={styles.summaryLabel}>Tổng số con</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>
            {children.reduce((sum, child) => sum + child.homework, 0)}
          </Text>
          <Text style={styles.summaryLabel}>Bài tập mới</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>
            {children.reduce((sum, child) => sum + child.messages, 0)}
          </Text>
          <Text style={styles.summaryLabel}>Tin nhắn mới</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <FlatList
          data={children}
          renderItem={renderChildItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.headerInfo}>
              <Text style={styles.headerInfoText}>
                Thông tin chi tiết các con
              </Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setShowAddModal(true)}
              >
                <Text style={styles.addButtonIcon}>+</Text>
                <Text style={styles.addButtonText}>Thêm con</Text>
              </TouchableOpacity>
            </View>
          }
          contentContainerStyle={styles.listContainer}
        />
      </View>

      {/* Add Child Modal */}
      <Modal
        visible={showAddModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAddModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Thêm con mới</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Tên con</Text>
              <TextInput
                style={styles.input}
                value={newChildName}
                onChangeText={setNewChildName}
                placeholder="Nhập tên con"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Tuổi</Text>
              <TextInput
                style={styles.input}
                value={newChildAge}
                onChangeText={setNewChildAge}
                placeholder="Nhập tuổi"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Lớp</Text>
              <TextInput
                style={styles.input}
                value={newChildGrade}
                onChangeText={setNewChildGrade}
                placeholder="Nhập lớp học"
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowAddModal(false)}
              >
                <Text style={styles.cancelButtonText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleAddChild}
              >
                <Text style={styles.confirmButtonText}>Thêm</Text>
              </TouchableOpacity>
            </View>
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
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  summarySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: -15,
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: (width - 60) / 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerInfoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  addButton: {
    backgroundColor: COLORS.mediumBlue,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonIcon: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
  },
  addButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 14,
  },
  childCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  childHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  childAvatarContainer: {
    position: "relative",
    marginRight: 15,
  },
  childAvatar: {
    fontSize: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    lineHeight: 60,
  },
  statusIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "white",
  },
  childMainInfo: {
    flex: 1,
  },
  childName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  childDetail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  schoolName: {
    fontSize: 12,
    color: "#888",
  },
  switchButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  switchButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 14,
  },
  quickStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f8f9fa",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  notificationsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF3E0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 5,
  },
  notificationIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  notificationText: {
    fontSize: 12,
    color: "#F57C00",
    fontWeight: "500",
  },
  nextClassContainer: {
    backgroundColor: "#E3F2FD",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },
  nextClassLabel: {
    fontSize: 12,
    color: "#1976D2",
    fontWeight: "500",
    marginBottom: 4,
  },
  nextClassInfo: {
    fontSize: 14,
    color: "#1976D2",
    fontWeight: "600",
  },
  achievementsContainer: {
    marginBottom: 15,
  },
  achievementsLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  achievementsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  achievementBadge: {
    backgroundColor: "#E8F5E8",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  achievementText: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "500",
  },
  lastActivityContainer: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  lastActivityText: {
    fontSize: 12,
    color: "#888",
    fontStyle: "italic",
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
    padding: 30,
    width: width - 40,
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
  },
  cancelButtonText: {
    color: "#666",
    fontWeight: "600",
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ChildrenScreen;
