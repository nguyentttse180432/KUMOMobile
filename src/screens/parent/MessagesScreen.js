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

const MessagesScreen = () => {
  // Sample data for messages
  const messages = [
    {
      id: "1",
      teacher: "Cô Lan",
      subject: "Tiếng Việt",
      lastMessage: "Con bạn đã làm rất tốt bài kiểm tra hôm nay",
      time: "10:30",
    },
    {
      id: "2",
      teacher: "Thầy Hùng",
      subject: "Toán",
      lastMessage: "Xin gửi bài tập về nhà cho bé",
      time: "09:45",
    },
  ];

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity style={styles.messageCard}>
      <View style={styles.teacherAvatar}>
        <Text style={styles.teacherInitial}>{item.teacher.charAt(0)}</Text>
      </View>
      <View style={styles.messageInfo}>
        <View style={styles.messageHeader}>
          <Text style={styles.teacherName}>{item.teacher}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        <Text style={styles.messageSubject}>{item.subject}</Text>
        <Text style={styles.messagePreview} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tin nhắn</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Không có tin nhắn nào</Text>
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
  messageCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  teacherAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  teacherInitial: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
  },
  messageInfo: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageTime: {
    fontSize: 14,
    color: "#999",
  },
  messageSubject: {
    fontSize: 14,
    color: COLORS.mediumBlue,
    marginBottom: 4,
  },
  messagePreview: {
    fontSize: 14,
    color: "#666",
  },
});

export default MessagesScreen;
