import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS } from "../../constants/colors";

const StudentHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Xin chào, Bé A!</Text>
          <TouchableOpacity
            style={styles.accountButton}
            onPress={() =>
              navigation.navigate("AccountSwitcher", {
                currentAccount: "child1",
              })
            }
          >
            <View style={styles.accountAvatar}>
              <Text style={styles.accountInitial}>A</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>🌟 250 điểm</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.welcomeBanner}>
          <Text style={styles.welcomeText}>Hôm nay bạn muốn học gì?</Text>
        </View>

        <Text style={styles.sectionTitle}>Bài học đề xuất</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}
        >
          <TouchableOpacity style={styles.lessonCard}>
            <View style={[styles.lessonIcon, { backgroundColor: "#FFE0B2" }]}>
              <Text style={styles.lessonEmoji}>🔤</Text>
            </View>
            <Text style={styles.lessonTitle}>Tiếng Việt</Text>
            <Text style={styles.lessonSubtitle}>Học vần mới</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lessonCard}>
            <View style={[styles.lessonIcon, { backgroundColor: "#E1F5FE" }]}>
              <Text style={styles.lessonEmoji}>🔢</Text>
            </View>
            <Text style={styles.lessonTitle}>Toán</Text>
            <Text style={styles.lessonSubtitle}>Phép cộng</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lessonCard}>
            <View style={[styles.lessonIcon, { backgroundColor: "#E8F5E9" }]}>
              <Text style={styles.lessonEmoji}>🌍</Text>
            </View>
            <Text style={styles.lessonTitle}>Khám phá</Text>
            <Text style={styles.lessonSubtitle}>Động vật</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionTitle}>Thành tựu của bạn</Text>
        <View style={styles.achievementContainer}>
          <View style={styles.achievementCard}>
            <Text style={styles.achievementNumber}>5</Text>
            <Text style={styles.achievementLabel}>Ngày học liên tiếp</Text>
          </View>

          <View style={styles.achievementCard}>
            <Text style={styles.achievementNumber}>12</Text>
            <Text style={styles.achievementLabel}>Bài học đã hoàn thành</Text>
          </View>

          <View style={styles.achievementCard}>
            <Text style={styles.achievementNumber}>3</Text>
            <Text style={styles.achievementLabel}>Huy hiệu</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Nhiệm vụ hôm nay</Text>
        <TouchableOpacity style={styles.taskCard}>
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>Làm bài tập Toán</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "60%" }]} />
              </View>
              <Text style={styles.progressText}>3/5</Text>
            </View>
          </View>
          <View style={styles.rewardTag}>
            <Text style={styles.rewardText}>+20 🌟</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.taskCard}>
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>Đọc truyện</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "0%" }]} />
              </View>
              <Text style={styles.progressText}>0/1</Text>
            </View>
          </View>
          <View style={styles.rewardTag}>
            <Text style={styles.rewardText}>+15 🌟</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  accountButton: {
    padding: 4,
  },
  accountAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  accountInitial: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.white,
  },
  pointsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  pointsText: {
    color: COLORS.white,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  welcomeBanner: {
    backgroundColor: "#E3F2FD",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0D47A1",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  horizontalList: {
    marginBottom: 24,
  },
  lessonCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lessonIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  lessonEmoji: {
    fontSize: 24,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  lessonSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  achievementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  achievementCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    width: "30%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  achievementNumber: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    color: COLORS.mediumBlue,
  },
  achievementLabel: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
  },
  taskCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginRight: 8,
  },
  progress: {
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.mediumBlue,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
  },
  rewardTag: {
    backgroundColor: "#FFF9C4",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  rewardText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default StudentHomeScreen;
