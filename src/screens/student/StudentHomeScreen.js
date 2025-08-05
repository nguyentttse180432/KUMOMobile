import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { childrenData } from "../../data/appData";

const { width } = Dimensions.get("window");

const StudentHomeScreen = ({ navigation, route }) => {
  // Get childId from route params or default to 1
  const childId = route.params?.childId || 1;

  // Find child data from the imported childrenData array
  const childData = childrenData.find((child) => child.id === childId);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.mediumBlue} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Chào bạn nhỏ! 🌈</Text>
            <Text style={styles.headerTitle}>
              {childData.nickname} {childData.avatar}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.accountButton}
            onPress={() =>
              navigation.navigate("AccountSwitcher", {
                currentAccount: childData.id.toString(),
              })
            }
          >
            <View style={styles.accountAvatar}>
              <Text style={styles.accountInitial}>
                {childData.name.charAt(0)}
              </Text>
            </View>
            <View style={styles.sparkle}>
              <Text>✨</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.pointsCard}>
          <View style={styles.pointsContent}>
            <Text style={styles.pointsLabel}>Kho báu của bạn 💎</Text>
            <View style={styles.pointsValueContainer}>
              <Text style={styles.pointsValue}>{childData.points}</Text>
              <Text style={styles.pointsStars}>⭐⭐⭐</Text>
            </View>
          </View>
          <View style={styles.pointsIcon}>
            <Text style={styles.pointsEmoji}>🎁</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>
            Hôm nay chúng ta khám phá gì nhỉ? 🚀
          </Text>
          <Text style={styles.welcomeSubtitle}>
            {childData.name} - {childData.class} 🎪
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>🎯 Bài học siêu hay!</Text>
            <Text style={styles.sectionEmoji}>🌟</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalList}
            contentContainerStyle={styles.horizontalListContent}
          >
            <TouchableOpacity
              style={[styles.lessonCard, { backgroundColor: "#FFE0B2" }]}
            >
              <View style={styles.lessonBadge}>
                <Text style={styles.lessonBadgeText}>HOT! 🔥</Text>
              </View>
              <View style={styles.lessonIconContainer}>
                <Text style={styles.lessonEmoji}>🔤</Text>
              </View>
              <Text style={styles.lessonTitle}>Tiếng Việt</Text>
              <Text style={styles.lessonSubtitle}>Học chữ cái 📚</Text>
              <View style={styles.rainbowProgress}>
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#FF6B6B", width: "25%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#4ECDC4", width: "25%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#45B7D1", width: "25%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#F9CA24", width: "0%" },
                  ]}
                />
              </View>
              <Text style={styles.lessonProgressText}>75% - Tuyệt vời! 🎉</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.lessonCard, { backgroundColor: "#E1F5FE" }]}
            >
              <View style={styles.lessonBadge}>
                <Text style={styles.lessonBadgeText}>MỚI! ✨</Text>
              </View>
              <View style={styles.lessonIconContainer}>
                <Text style={styles.lessonEmoji}>🔢</Text>
              </View>
              <Text style={styles.lessonTitle}>Toán vui</Text>
              <Text style={styles.lessonSubtitle}>Học đếm số 🧮</Text>
              <View style={styles.rainbowProgress}>
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#FF6B6B", width: "25%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#4ECDC4", width: "20%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#45B7D1", width: "0%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#F9CA24", width: "0%" },
                  ]}
                />
              </View>
              <Text style={styles.lessonProgressText}>45% - Cố lên! 💪</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.lessonCard, { backgroundColor: "#E8F5E9" }]}
            >
              <View style={styles.lessonBadge}>
                <Text style={styles.lessonBadgeText}>THÚ VỊ! 🎪</Text>
              </View>
              <View style={styles.lessonIconContainer}>
                <Text style={styles.lessonEmoji}>🌍</Text>
              </View>
              <Text style={styles.lessonTitle}>Khám phá</Text>
              <Text style={styles.lessonSubtitle}>Động vật 🦁</Text>
              <View style={styles.rainbowProgress}>
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#FF6B6B", width: "25%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#4ECDC4", width: "25%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#45B7D1", width: "25%" },
                  ]}
                />
                <View
                  style={[
                    styles.progressSegment,
                    { backgroundColor: "#F9CA24", width: "15%" },
                  ]}
                />
              </View>
              <Text style={styles.lessonProgressText}>90% - Xuất sắc! 🏆</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>🏆 Bạn thật tuyệt vời!</Text>
            <Text style={styles.sectionEmoji}>🎊</Text>
          </View>

          <View style={styles.achievementContainer}>
            <View
              style={[styles.achievementCard, { backgroundColor: "#FFE0E6" }]}
            >
              <View style={styles.achievementIconContainer}>
                <Text style={styles.achievementEmoji}>🔥</Text>
              </View>
              <Text style={styles.achievementNumber}>
                {childId === 1 ? "5" : "7"}
              </Text>
              <Text style={styles.achievementLabel}>Ngày học liên tiếp</Text>
              <Text style={styles.achievementCheer}>Siêu đỉnh! 🎯</Text>
            </View>

            <View
              style={[styles.achievementCard, { backgroundColor: "#E0F2F1" }]}
            >
              <View style={styles.achievementIconContainer}>
                <Text style={styles.achievementEmoji}>📚</Text>
              </View>
              <Text style={styles.achievementNumber}>
                {childId === 1 ? "12" : "15"}
              </Text>
              <Text style={styles.achievementLabel}>Bài học hoàn thành</Text>
              <Text style={styles.achievementCheer}>Quá giỏi! 🌟</Text>
            </View>

            <View
              style={[styles.achievementCard, { backgroundColor: "#FFF3E0" }]}
            >
              <View style={styles.achievementIconContainer}>
                <Text style={styles.achievementEmoji}>🏅</Text>
              </View>
              <Text style={styles.achievementNumber}>
                {childId === 1 ? "3" : "4"}
              </Text>
              <Text style={styles.achievementLabel}>Huy hiệu</Text>
              <Text style={styles.achievementCheer}>Tuyệt vời! 🎉</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>🎯 Thử thách hôm nay!</Text>
            <Text style={styles.sectionEmoji}>💫</Text>
          </View>

          <TouchableOpacity style={styles.taskCard}>
            <View style={styles.taskIconContainer}>
              <Text style={styles.taskIcon}>🧮</Text>
            </View>
            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>Tập đếm số 🔢</Text>
              <Text style={styles.taskSubtitle}>
                Đếm từ 1 đến 20 thật vui! 😊
              </Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progress, { width: "60%" }]} />
                </View>
                <Text style={styles.progressText}>3/5 ✨</Text>
              </View>
            </View>
            <View style={styles.rewardTag}>
              <Text style={styles.rewardText}>+20 ⭐</Text>
              <Text style={styles.rewardEmoji}>🎁</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.taskCard}>
            <View style={styles.taskIconContainer}>
              <Text style={styles.taskIcon}>📚</Text>
            </View>
            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>Đọc truyện 📖</Text>
              <Text style={styles.taskSubtitle}>
                Truyện cổ tích hay lắm! 🧚‍♀️
              </Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progress, { width: "0%" }]} />
                </View>
                <Text style={styles.progressText}>0/1 🌟</Text>
              </View>
            </View>
            <View style={styles.rewardTag}>
              <Text style={styles.rewardText}>+15 ⭐</Text>
              <Text style={styles.rewardEmoji}>🎈</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.encouragementCard}>
          <Text style={styles.encouragementTitle}>
            {childData.nickname} là siêu sao! 🌟
          </Text>
          <Text style={styles.encouragementText}>
            {childId === 1
              ? "Hôm nay bạn đã học rất chăm chỉ! Tiếp tục cố gắng nhé! 💪✨"
              : "Thật xuất sắc! Bạn đã hoàn thành tất cả bài tập hôm nay rồi! 🏆✨"}
          </Text>
        </View>
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  header: {
    backgroundColor: COLORS.mediumBlue,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  greetingContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 4,
    fontWeight: "600",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  accountButton: {
    position: "relative",
    padding: 4,
  },
  accountAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFE0E6",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  accountInitial: {
    color: "#FF6B6B",
    fontSize: 22,
    fontWeight: "bold",
  },
  sparkle: {
    position: "absolute",
    right: -5,
    top: -5,
    fontSize: 16,
  },
  pointsCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#FFE0E6",
  },
  pointsContent: {
    flex: 1,
  },
  pointsLabel: {
    color: "#FF6B6B",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  pointsValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsValue: {
    color: "#FF6B6B",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 8,
  },
  pointsStars: {
    fontSize: 16,
  },
  pointsIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFE0E6",
    justifyContent: "center",
    alignItems: "center",
  },
  pointsEmoji: {
    fontSize: 28,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeContainer: {
    marginTop: 24,
    marginBottom: 32,
    backgroundColor: "#E8F5E9",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "#4ECDC4",
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D8A47",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#2D8A47",
    fontWeight: "500",
  },
  section: {
    marginBottom: 32,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3E50",
  },
  sectionEmoji: {
    fontSize: 24,
  },
  horizontalList: {
    marginHorizontal: -20,
  },
  horizontalListContent: {
    paddingHorizontal: 20,
  },
  lessonCard: {
    borderRadius: 20,
    padding: 20,
    marginRight: 16,
    width: width * 0.45,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    position: "relative",
  },
  lessonBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#F9CA24",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  lessonBadgeText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  lessonIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#E0E0E0",
  },
  lessonEmoji: {
    fontSize: 32,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3E50",
    marginBottom: 6,
  },
  lessonSubtitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
    fontWeight: "500",
  },
  rainbowProgress: {
    flexDirection: "row",
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressSegment: {
    height: 8,
  },
  lessonProgressText: {
    fontSize: 12,
    color: "#666666",
    fontWeight: "bold",
  },
  achievementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  achievementCard: {
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    width: (width - 60) / 3,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  achievementIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  achievementEmoji: {
    fontSize: 26,
  },
  achievementNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF6B6B",
    marginBottom: 4,
  },
  achievementLabel: {
    fontSize: 12,
    textAlign: "center",
    color: "#666666",
    fontWeight: "600",
    marginBottom: 4,
  },
  achievementCheer: {
    fontSize: 10,
    textAlign: "center",
    color: "#4ECDC4",
    fontWeight: "bold",
  },
  taskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#E8F5E9",
  },
  taskIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 2,
    borderColor: "#4ECDC4",
  },
  taskIcon: {
    fontSize: 26,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2D3E50",
    marginBottom: 4,
  },
  taskSubtitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 12,
    fontWeight: "500",
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
    marginRight: 12,
  },
  progress: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4ECDC4",
  },
  progressText: {
    fontSize: 14,
    color: "#666666",
    fontWeight: "bold",
    minWidth: 40,
  },
  rewardTag: {
    backgroundColor: "#FFF3E0",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#F9CA24",
    alignItems: "center",
  },
  rewardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F57C00",
  },
  rewardEmoji: {
    fontSize: 16,
    marginTop: 2,
  },
  encouragementCard: {
    backgroundColor: "#E8F5E9",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#4ECDC4",
    alignItems: "center",
    position: "relative",
  },
  encouragementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D8A47",
    marginBottom: 8,
  },
  encouragementText: {
    fontSize: 14,
    color: "#2D8A47",
    textAlign: "center",
    fontWeight: "500",
  },
  encouragementEmojis: {
    flexDirection: "row",
    marginTop: 12,
  },
  floatingEmoji: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default StudentHomeScreen;
