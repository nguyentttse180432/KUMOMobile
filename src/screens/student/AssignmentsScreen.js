import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { childrenData } from "../../data/appData";

const { width } = Dimensions.get("window");

const AssignmentsScreen = ({ route, navigation }) => {
  // Get childId from route params or default to 1
  const childId = route.params?.childId || 1;

  // Find child data
  const childData = childrenData.find((child) => child.id === childId);

  // State for assignments and loading
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch assignments from API
  const fetchAssignments = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://kumo.hsms.io.vn/assignments?class_id=fdv9yu4z7');
      
      if (!response.ok) {
        throw new Error('Failed to fetch assignments');
      }
      
      const data = await response.json();
      
      // Transform API data to match our component structure
      const transformedAssignments = data.map((item, index) => ({
        id: item.id || item.assignment_id?.toString() || index.toString(),
        title: item.title,
        description: item.description,
        subject: getSubjectName(item.subject_id),
        dueDate: formatDueDate(item.due_date),
        teacher: "Giáo viên",
        isCompleted: item.status === 'completed',
        emoji: getSubjectEmoji(item.subject_id),
        color: getSubjectColor(item.subject_id),
        attachment_url: item.attachment_url,
        attachment_name: item.attachment_name,
        total_coin: item.total_coin,
        type: item.type,
        class_id: item.class_id,
        assignment_id: item.assignment_id
      }));
      
      setAssignments(transformedAssignments);
      setError(null);
    } catch (err) {
      console.error('Error fetching assignments:', err);
      setError(err.message);
      setAssignments([]);
    } finally {
      setLoading(false);
    }
  };

  // Helper functions for data transformation
  const getSubjectName = (subjectId) => {
    const subjects = {
      1: "Toán",
      2: "Tiếng Việt", 
      3: "Tiếng Anh",
      4: "Khoa học",
      5: "Xã hội"
    };
    return subjects[subjectId] || "Môn học";
  };

  const getSubjectEmoji = (subjectId) => {
    const emojis = {
      1: "📊",
      2: "📚",
      3: "🌍",
      4: "🔬",
      5: "🏛️"
    };
    return emojis[subjectId] || "📝";
  };

  const getSubjectColor = (subjectId) => {
    const colors = {
      1: "#FFE5B4", // Toán - màu vàng nhạt
      2: "#E5F3FF", // Tiếng Việt - màu xanh nhạt
      3: "#E8F5E8", // Tiếng Anh - màu xanh lá nhạt
      4: "#FFE5E5", // Khoa học - màu đỏ nhạt
      5: "#F0E5FF"  // Xã hội - màu tím nhạt
    };
    return colors[subjectId] || "#E2EAF2";
  };

  const formatDueDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Fetch assignments on component mount
  useEffect(() => {
    fetchAssignments();
  }, []);

  // Handle refresh
  const handleRefresh = () => {
    fetchAssignments();
  };

  // Handle assignment press
  const handleAssignmentPress = (assignment) => {
    if (!assignment.isCompleted) {
      // For pending assignments, navigate to submission screen
      navigation.navigate("AssignmentSubmission", {
        assignment: assignment,
        childId: childId,
        childName: childData?.nickname || childData?.name || "Tôi",
      });
    } else {
      // For completed assignments, show details (can be expanded later)
      alert("Bài tập này đã hoàn thành!");
    }
  };

  // State for filtered assignments
  const [activeTab, setActiveTab] = useState("pending"); // "pending" or "completed"

  // Filter assignments based on active tab
  const filteredAssignments = assignments.filter(
    (assignment) =>
      (activeTab === "pending" && !assignment.isCompleted) ||
      (activeTab === "completed" && assignment.isCompleted)
  );

  const renderAssignmentItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.assignmentCard,
        { backgroundColor: item.color ? item.color : "#E2EAF2" }, // Thêm màu mặc định nếu không có màu cụ thể
        item.isCompleted && styles.completedCard,
      ]}
      onPress={() => handleAssignmentPress(item)} // Thêm hàm xử lý nhấn vào bài tập
    >
      <View style={styles.cardHeader}>
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{item.emoji}</Text>
        </View>
        <View style={styles.statusContainer}>
          {item.isCompleted ? (
            <View style={styles.completedBadge}>
              <Text style={styles.completedBadgeText}>✓</Text>
            </View>
          ) : (
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingBadgeText}>!</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.assignmentContent}>
        <Text style={styles.assignmentTitle}>{item.title}</Text>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectText}>{item.subject}</Text>
        </View>
        <View style={styles.dueDateContainer}>
          <Text style={styles.dueDateIcon}>⏰</Text>
          <Text style={styles.dueDate}>Hạn nộp: {item.dueDate}</Text>
        </View>
        <View style={styles.teacherContainer}>
          <Text style={styles.teacherIcon}>👨‍🏫</Text>
          <Text style={styles.teacherText}>{item.teacher}</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.statusText}>
          {item.isCompleted ? "✓ Hoàn thành" : "⏳ Chưa xong"}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Calculate assignment stats
  const pendingCount = assignments.filter((a) => !a.isCompleted).length;
  const completedCount = assignments.filter((a) => a.isCompleted).length;
  const totalCount = assignments.length;
  const pendingPercentage =
    totalCount > 0 ? Math.round((pendingCount / totalCount) * 100) + "%" : "0%";
  const completedPercentage =
    totalCount > 0
      ? Math.round((completedCount / totalCount) * 100) + "%"
      : "0%";

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with personalized greeting */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerEmoji}>📝</Text>
          <Text style={styles.headerTitle}>
            Bài Tập Của {childData?.nickname || "Tôi"}
          </Text>
          <Text style={styles.headerSubtitle}>Hôm nay học gì nhỉ? 🤔</Text>
          {error && (
            <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
              <Text style={styles.refreshText}>↻ Tải lại</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.content}>
        {/* Loading indicator */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.mediumBlue} />
            <Text style={styles.loadingText}>Đang tải bài tập...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorEmoji}>⚠️</Text>
            <Text style={styles.errorText}>Không thể tải bài tập</Text>
            <Text style={styles.errorSubtext}>{error}</Text>
            <TouchableOpacity onPress={handleRefresh} style={styles.retryButton}>
              <Text style={styles.retryText}>Thử lại</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {/* Tab Bar for filtering assignments */}
            <View style={styles.tabBar}>
              <TouchableOpacity
                style={[styles.tab, activeTab === "pending" && styles.activeTab]}
                onPress={() => setActiveTab("pending")}
              >
                <Text style={styles.tabEmoji}>🔥</Text>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "pending" && styles.activeTabText,
                  ]}
                >
                  Cần làm
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === "completed" && styles.activeTab]}
                onPress={() => setActiveTab("completed")}
              >
                <Text style={styles.tabEmoji}>✅</Text>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "completed" && styles.activeTabText,
                  ]}
                >
                  Đã hoàn thành
                </Text>
              </TouchableOpacity>
            </View>

            {/* Motivational banner - conditionally displayed */}
            {pendingCount > 0 && (
              <View style={styles.motivationBanner}>
                <Text style={styles.motivationText}>
                  {pendingCount > 2
                    ? `Cố lên! Chỉ còn ${pendingCount} bài nữa thôi! 💪`
                    : pendingCount === 1
                    ? "Cố lên! Chỉ còn 1 bài nữa thôi! 💪"
                    : "Cố lên! Sắp hoàn thành rồi! 💪"}
                </Text>
              </View>
            )}

            <FlatList
              data={filteredAssignments}
              renderItem={renderAssignmentItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
              showsVerticalScrollIndicator={false}
              refreshing={loading}
              onRefresh={handleRefresh}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyEmoji}>
                    {activeTab === "pending" ? "🎉" : "🏆"}
                  </Text>
                  <Text style={styles.emptyText}>
                    {activeTab === "pending"
                      ? "Không có bài tập nào cần làm!"
                      : "Chưa có bài tập nào hoàn thành!"}
                  </Text>
                  <Text style={styles.emptySubtext}>
                    {activeTab === "pending"
                      ? "Thời gian nghỉ ngơi rồi!"
                      : "Hãy bắt đầu làm bài tập nhé!"}
                  </Text>
                </View>
              }
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FC", // Màu nền nhẹ nhàng hơn, xanh nhạt
  },
  header: {
    backgroundColor: COLORS.mediumBlue,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, // Giảm độ đậm của shadow
    shadowRadius: 8,
    elevation: 6,
  },
  headerContent: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2C405A", // Đổi thành màu xanh đậm hơn để dễ đọc
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#4A5568", // Đổi thành màu xám đậm hơn để dễ đọc
    fontWeight: "500",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    marginBottom: 20,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07, // Giảm độ đậm của shadow
    shadowRadius: 4,
    elevation: 2, // Giảm độ nổi
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#BFD7FF", // Đổi từ xanh đậm sang xanh nhạt
    shadowColor: "#A0C4FF", // Màu shadow nhẹ nhàng hơn
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  tabEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  tabText: {
    fontWeight: "600",
    color: "#4A5568", // Đổi màu chữ tab không active sang màu đậm hơn
    fontSize: 16,
  },
  activeTabText: {
    color: "#2C405A", // Đổi màu chữ tab active sang xanh đậm hơn
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07, // Giảm shadow
    shadowRadius: 8,
    elevation: 3, // Giảm độ nổi
  },
  summaryEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  summaryNumber: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2C70B5", // Đổi màu số liệu thống kê sang xanh đậm hơn
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#4A5568", // Đổi màu nhãn sang màu đậm hơn
    fontWeight: "600",
    marginBottom: 12,
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#EAEFF8", // Đổi màu nền thanh tiến trình
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#A0C4FF", // Đổi màu fill thanh tiến trình sang xanh nhạt
    borderRadius: 3,
  },
  motivationBanner: {
    backgroundColor: "#F9F4E8", // Đổi màu nền banner động viên sang màu be nhạt
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#F8D3A7", // Đổi màu viền sang màu cam nhạt
  },
  motivationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B5333", // Đổi màu chữ sang màu nâu đậm hơn
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  assignmentCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    backgroundColor: "#E2EAF2", // Màu mặc định cho card là xám xanh nhạt
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, // Giảm độ đậm của shadow
    shadowRadius: 8,
    elevation: 4, // Giảm độ nổi
  },
  completedCard: {
    opacity: 0.85, // Tăng độ hiển thị cho card đã hoàn thành
    transform: [{ scale: 0.98 }],
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  emojiContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Tăng độ trong suốt của nền emoji
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 24,
  },
  statusContainer: {
    alignItems: "center",
  },
  completedBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#96D6A8", // Đổi màu badge hoàn thành sang xanh lá nhạt
    justifyContent: "center",
    alignItems: "center",
  },
  pendingBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFBD98", // Đổi màu badge chưa hoàn thành sang cam nhạt
    justifyContent: "center",
    alignItems: "center",
  },
  completedBadgeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.2)", // Thêm đổ bóng cho chữ
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  pendingBadgeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.2)", // Thêm đổ bóng cho chữ
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  assignmentContent: {
    marginBottom: 12,
  },
  assignmentTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2C405A", // Đổi màu tiêu đề bài tập sang xanh đậm hơn
    marginBottom: 8,
  },
  subjectContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Tăng độ trong suốt
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 8,
  },
  subjectText: {
    color: "#2C405A", // Đổi màu text môn học sang xanh đậm hơn
    fontWeight: "600",
    fontSize: 12,
  },
  dueDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dueDateIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  dueDate: {
    fontSize: 14,
    color: "#3D4D63", // Đổi màu text ngày sang xám đậm hơn
    fontWeight: "500",
  },
  teacherContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  teacherIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  teacherText: {
    fontSize: 14,
    color: "#3D4D63", // Đổi màu text giáo viên sang xám đậm hơn
    fontWeight: "500",
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "rgba(79, 109, 122, 0.2)", // Đổi màu viền từ trắng trong suốt sang màu xanh đậm trong suốt
    paddingTop: 12,
  },
  statusText: {
    fontSize: 14,
    color: "#2C405A", // Đổi màu text trạng thái sang xanh đậm hơn
    fontWeight: "700", // Tăng độ đậm của font
    textAlign: "center",
  },
  emptyContainer: {
    padding: 40,
    alignItems: "center",
  },
  emptyEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    color: "#3D4D63", // Đổi màu text trống sang xám đậm hơn
    fontWeight: "700", // Tăng độ đậm
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#5E6C84", // Đổi màu phụ text trống sang xám đậm hơn
    fontWeight: "500",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#4A5568",
    fontWeight: "500",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  errorEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 18,
    color: "#E53E3E",
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  errorSubtext: {
    fontSize: 14,
    color: "#5E6C84",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  retryText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  refreshButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 15,
  },
  refreshText: {
    color: "#2C405A",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default AssignmentsScreen;
