import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/colors";

const AssignmentsScreen = () => {
  // Sample data for assignments
  const assignments = [
    {
      id: "1",
      title: "Bài tập toán",
      subject: "Toán",
      dueDate: "10/06",
      isCompleted: false,
    },
    {
      id: "2",
      title: "Tập đọc",
      subject: "Tiếng Việt",
      dueDate: "11/06",
      isCompleted: false,
    },
    {
      id: "3",
      title: "Vẽ tranh gia đình",
      subject: "Mỹ Thuật",
      dueDate: "12/06",
      isCompleted: false,
    },
    {
      id: "4",
      title: "Bài tập về nhà",
      subject: "Tiếng Anh",
      dueDate: "09/06",
      isCompleted: true,
    },
    {
      id: "5",
      title: "Tìm hiểu động vật",
      subject: "Tự Nhiên",
      dueDate: "08/06",
      isCompleted: true,
    },
  ];

  const renderAssignmentItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.assignmentCard, item.isCompleted && styles.completedCard]}
    >
      <View style={styles.assignmentDetails}>
        <View style={styles.subjectTag}>
          <Text style={styles.subjectText}>{item.subject}</Text>
        </View>
        <Text style={styles.assignmentTitle}>{item.title}</Text>
        <Text style={styles.dueDate}>Hạn nộp: {item.dueDate}</Text>
      </View>
      <View
        style={item.isCompleted ? styles.completedStatus : styles.pendingStatus}
      >
        <Text
          style={item.isCompleted ? styles.completedText : styles.pendingText}
        >
          {item.isCompleted ? "Đã hoàn thành" : "Chưa làm"}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bài tập</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.tabBar}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Sắp tới</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Đã hoàn thành</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>3</Text>
            <Text style={styles.summaryLabel}>Cần làm</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>2</Text>
            <Text style={styles.summaryLabel}>Đã hoàn thành</Text>
          </View>
        </View>

        <FlatList
          data={assignments}
          renderItem={renderAssignmentItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Không có bài tập nào</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: COLORS.mediumBlue,
    padding: 16,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ECEFF1",
    borderRadius: 25,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 25,
  },
  tabText: {
    fontWeight: "600",
    color: "#666",
  },
  activeTabText: {
    color: COLORS.white,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666",
  },
  listContainer: {
    paddingBottom: 16,
  },
  assignmentCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedCard: {
    opacity: 0.7,
  },
  assignmentDetails: {
    marginBottom: 8,
  },
  subjectTag: {
    backgroundColor: "#E3F2FD",
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginBottom: 8,
  },
  subjectText: {
    color: "#0D47A1",
    fontWeight: "600",
    fontSize: 12,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 14,
    color: "#666",
  },
  pendingStatus: {
    backgroundColor: "#FFF3E0",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  pendingText: {
    color: "#E65100",
    fontWeight: "600",
    fontSize: 12,
  },
  completedStatus: {
    backgroundColor: "#E8F5E9",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  completedText: {
    color: "#2E7D32",
    fontWeight: "600",
    fontSize: 12,
  },
  emptyContainer: {
    padding: 24,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
});

export default AssignmentsScreen;
