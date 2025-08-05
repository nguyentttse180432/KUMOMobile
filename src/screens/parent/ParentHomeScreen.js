import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { COLORS } from "../../constants/colors";
import {
  childrenData,
  recentActivitiesData,
  quickActionsData,
} from "../../data/appData";

const { width } = Dimensions.get("window");

const ParentHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header with gradient */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>Trang chủ phụ huynh</Text>
            <Text style={styles.headerSubtitle}>
              Theo dõi hành trình học tập của con
            </Text>
          </View>
          <TouchableOpacity
            style={styles.accountButton}
            onPress={() =>
              navigation.navigate("AccountSwitcher", {
                currentAccount: "parent",
              })
            }
          >
            <View style={styles.accountAvatar}>
              <Text style={styles.accountInitial}>N</Text>
            </View>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={[styles.statCard, styles.primaryStatCard]}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>Tài khoản con</Text>
            </View>
            <View style={[styles.statCard, styles.secondaryStatCard]}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Bài tập mới</Text>
            </View>
            <View style={[styles.statCard, styles.tertiaryStatCard]}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Tin nhắn</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Truy cập nhanh</Text>
          <View style={styles.quickActionsGrid}>
            {quickActionsData.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={styles.quickActionCard}
                onPress={() => {
                  if (action.screen === "Schedule") {
                    navigation.navigate("Schedule");
                  } else {
                    navigation.navigate(action.screen);
                  }
                }}
              >
                <View
                  style={[
                    styles.quickActionIcon,
                    { backgroundColor: action.color },
                  ]}
                >
                  <Text style={styles.quickActionEmoji}>{action.icon}</Text>
                </View>
                <Text style={styles.quickActionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Children Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tổng quan con em</Text>
          {childrenData.map((child) => (
            <TouchableOpacity
              key={child.id}
              style={styles.childCard}
              onPress={() =>
                navigation.navigate("ChildDetail", { childId: child.id })
              }
            >
              <View style={styles.childHeader}>
                <View style={styles.childAvatar}>
                  <Text style={styles.childAvatarText}>{child.avatar}</Text>
                </View>
                <View style={styles.childInfo}>
                  <Text style={styles.childName}>{child.name}</Text>
                  <Text style={styles.childClass}>{child.class}</Text>
                </View>
                {child.newHomework > 0 && (
                  <View style={styles.homeworkBadge}>
                    <Text style={styles.homeworkBadgeText}>
                      {child.newHomework}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.childStats}>
                <View style={styles.childStatItem}>
                  <Text style={styles.childStatLabel}>Điểm TB</Text>
                  <Text style={styles.childStatValue}>{child.grade}</Text>
                </View>
                <View style={styles.childStatItem}>
                  <Text style={styles.childStatLabel}>Chuyên cần</Text>
                  <Text style={styles.childStatValue}>{child.attendance}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hoạt động gần đây</Text>
          <View style={styles.activitiesContainer}>
            {recentActivitiesData.map((activity) => (
              <TouchableOpacity key={activity.id} style={styles.activityCard}>
                <View style={styles.activityLeft}>
                  <View
                    style={[
                      styles.activityIcon,
                      {
                        backgroundColor:
                          activity.type === "exam"
                            ? "#4CAF50"
                            : activity.type === "homework"
                            ? "#2196F3"
                            : "#FF9800",
                      },
                    ]}
                  >
                    <Text style={styles.activityIconText}>
                      {activity.type === "exam"
                        ? "📝"
                        : activity.type === "homework"
                        ? "📚"
                        : "💬"}
                    </Text>
                  </View>
                  <View style={styles.activityContent}>
                    <Text style={styles.activityTitle}>{activity.title}</Text>
                    <Text style={styles.activitySubtitle}>
                      {activity.child} • {activity.time}
                    </Text>
                  </View>
                </View>
                <View style={styles.activityRight}>
                  {activity.score && (
                    <Text style={styles.activityScore}>{activity.score}</Text>
                  )}
                  {activity.unread && <View style={styles.unreadDot} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
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
    paddingTop: 40,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  accountButton: {
    position: "relative",
  },
  accountAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  accountInitial: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#FF4444",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  statsSection: {
    marginTop: -15,
    paddingHorizontal: 20,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
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
  primaryStatCard: {
    backgroundColor: "#4CAF50",
  },
  secondaryStatCard: {
    backgroundColor: "#2196F3",
  },
  tertiaryStatCard: {
    backgroundColor: "#FF9800",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    fontWeight: "500",
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickActionCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: (width - 60) / 2,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  quickActionEmoji: {
    fontSize: 24,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  childCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  childHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  childAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  childAvatarText: {
    fontSize: 24,
  },
  childInfo: {
    flex: 1,
  },
  childName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  childClass: {
    fontSize: 14,
    color: "#666",
  },
  homeworkBadge: {
    backgroundColor: "#FF4444",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  homeworkBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  childStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  childStatItem: {
    alignItems: "center",
  },
  childStatLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  childStatValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
  },
  activitiesContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  activityLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  activityIconText: {
    fontSize: 18,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  activitySubtitle: {
    fontSize: 12,
    color: "#666",
  },
  activityRight: {
    alignItems: "flex-end",
  },
  activityScore: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4444",
  },
  bottomPadding: {
    height: 30,
  },
});

export default ParentHomeScreen;
