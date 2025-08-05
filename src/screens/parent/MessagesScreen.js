import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { COLORS } from "../../constants/colors";

const MessagesScreen = () => {
  // Sample data for messages with enhanced information
  const messages = [
    {
      id: "1",
      teacher: "Cô Lan Hương",
      subject: "Tiếng Việt",
      lastMessage:
        "Con bạn đã làm rất tốt bài kiểm tra hôm nay. Điểm số: 9.5/10",
      time: "10:30",
      unread: true,
      avatar: "L",
      messageType: "praise",
      date: "Hôm nay",
    },
    {
      id: "2",
      teacher: "Thầy Hùng Minh",
      subject: "Toán",
      lastMessage: "Xin gửi bài tập về nhà cho bé. Trang 45-46 sgk",
      time: "09:45",
      unread: false,
      avatar: "H",
      messageType: "homework",
      date: "Hôm nay",
    },
    {
      id: "3",
      teacher: "Cô Thu Hà",
      subject: "Tiếng Anh",
      lastMessage: "Thông báo: Lớp sẽ thi kiểm tra 15 phút vào thứ 5 tuần sau",
      time: "15:20",
      unread: true,
      avatar: "T",
      messageType: "announcement",
      date: "Hôm qua",
    },
    {
      id: "4",
      teacher: "Thầy Đức Anh",
      subject: "Thể dục",
      lastMessage: "Nhắc nhở: Chuẩn bị đồ thể dục cho tiết học mai",
      time: "16:45",
      unread: false,
      avatar: "D",
      messageType: "reminder",
      date: "Hôm qua",
    },
  ];

  const getMessageTypeColor = (type) => {
    switch (type) {
      case "praise":
        return "#4CAF50";
      case "homework":
        return "#2196F3";
      case "announcement":
        return "#FF9800";
      case "reminder":
        return "#9C27B0";
      default:
        return COLORS.mediumBlue;
    }
  };

  const getMessageTypeIcon = (type) => {
    switch (type) {
      case "praise":
        return "👏";
      case "homework":
        return "📚";
      case "announcement":
        return "📢";
      case "reminder":
        return "⏰";
      default:
        return "💬";
    }
  };

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.messageCard, item.unread && styles.unreadCard]}
    >
      <View style={styles.messageLeft}>
        <View
          style={[
            styles.teacherAvatar,
            { backgroundColor: getMessageTypeColor(item.messageType) + "20" },
          ]}
        >
          <Text
            style={[
              styles.teacherInitial,
              { color: getMessageTypeColor(item.messageType) },
            ]}
          >
            {item.avatar}
          </Text>
        </View>
        {item.unread && <View style={styles.unreadIndicator} />}
      </View>

      <View style={styles.messageInfo}>
        <View style={styles.messageHeader}>
          <View style={styles.teacherInfo}>
            <Text style={styles.teacherName}>{item.teacher}</Text>
            <View style={styles.subjectBadge}>
              <Text style={styles.subjectText}>{item.subject}</Text>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.messageTime}>{item.time}</Text>
            <Text style={styles.messageDate}>{item.date}</Text>
          </View>
        </View>

        <View style={styles.messageContent}>
          <View style={styles.messageTypeIndicator}>
            <Text style={styles.messageTypeIcon}>
              {getMessageTypeIcon(item.messageType)}
            </Text>
          </View>
          <Text
            style={[styles.messagePreview, item.unread && styles.unreadText]}
            numberOfLines={2}
          >
            {item.lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.mediumBlue} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tin nhắn từ giáo viên</Text>
        <Text style={styles.headerSubtitle}>
          Theo dõi thông tin học tập của con
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm tin nhắn..."
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            {messages.filter((m) => m.unread).length}
          </Text>
          <Text style={styles.statLabel}>Chưa đọc</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{messages.length}</Text>
          <Text style={styles.statLabel}>Tổng tin nhắn</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            {new Set(messages.map((m) => m.teacher)).size}
          </Text>
          <Text style={styles.statLabel}>Giáo viên</Text>
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📭</Text>
              <Text style={styles.emptyText}>Chưa có tin nhắn nào</Text>
              <Text style={styles.emptySubtext}>
                Tin nhắn từ giáo viên sẽ xuất hiện tại đây
              </Text>
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
    backgroundColor: "#F8F9FA",
  },
  header: {
    backgroundColor: COLORS.mediumBlue,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  messageCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#E0E0E0",
  },
  unreadCard: {
    borderLeftColor: COLORS.mediumBlue,
    backgroundColor: "#F8F9FF",
  },
  messageLeft: {
    alignItems: "center",
    marginRight: 12,
  },
  teacherAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  teacherInitial: {
    fontSize: 22,
    fontWeight: "bold",
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4444",
  },
  messageInfo: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  teacherInfo: {
    flex: 1,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  subjectBadge: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  subjectText: {
    fontSize: 12,
    color: COLORS.mediumBlue,
    fontWeight: "500",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
  messageTime: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  messageDate: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  messageContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  messageTypeIndicator: {
    marginRight: 8,
    marginTop: 2,
  },
  messageTypeIcon: {
    fontSize: 16,
  },
  messagePreview: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    flex: 1,
  },
  unreadText: {
    color: "#333",
    fontWeight: "500",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
});

export default MessagesScreen;
