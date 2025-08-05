import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");

const RewardsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userPoints] = useState(250);

  const categories = [
    { id: "all", name: "Tất cả", emoji: "🌟" },
    { id: "toys", name: "Đồ chơi", emoji: "🧸" },
    { id: "books", name: "Sách vở", emoji: "📚" },
    { id: "art", name: "Mỹ thuật", emoji: "🎨" },
    { id: "special", name: "Đặc biệt", emoji: "🏆" },
  ];

  const rewards = [
    {
      id: 1,
      title: "Bộ đồ chơi lắp ráp",
      description: "Bộ đồ chơi phát triển tư duy và kỹ năng vận động tinh",
      points: 500,
      category: "toys",
      emoji: "🧩",
      color: "#FF6B6B",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Nhân vật hoạt hình",
      description: "Mô hình nhân vật hoạt hình dễ thương",
      points: 200,
      category: "toys",
      emoji: "🦸",
      color: "#4ECDC4",
    },
    {
      id: 3,
      title: "Sách tô màu",
      description: "Sách tô màu với nhiều hình vẽ thú vị",
      points: 150,
      category: "books",
      emoji: "🖍️",
      color: "#45B7D1",
    },
    {
      id: 4,
      title: "Bộ bút màu",
      description: "Bộ bút màu 24 màu cho bé sáng tạo",
      points: 300,
      category: "art",
      emoji: "🖌️",
      color: "#96CEB4",
    },
    {
      id: 5,
      title: "Giấy khen",
      description: "Giấy khen đặc biệt dành cho học sinh giỏi",
      points: 100,
      category: "special",
      emoji: "🏅",
      color: "#FFEAA7",
    },
    {
      id: 6,
      title: "Chuyến đi học tập",
      description: "Tham gia chuyến đi học tập thực tế cùng các bạn",
      points: 1000,
      category: "special",
      emoji: "🚌",
      color: "#DDA0DD",
      isSpecial: true,
    },
  ];

  const filteredRewards =
    selectedCategory === "all"
      ? rewards
      : rewards.filter((reward) => reward.category === selectedCategory);

  const canAfford = (points) => userPoints >= points;

  const renderCategoryTab = (category) => (
    <TouchableOpacity
      key={category.id}
      style={[
        styles.categoryTab,
        selectedCategory === category.id && styles.activeCategoryTab,
      ]}
      onPress={() => setSelectedCategory(category.id)}
    >
      <Text style={styles.categoryEmoji}>{category.emoji}</Text>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === category.id && styles.activeCategoryText,
        ]}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );

  const renderRewardCard = (reward) => (
    <TouchableOpacity
      key={reward.id}
      style={[
        styles.rewardCard,
        { backgroundColor: reward.color },
        reward.isSpecial && styles.specialCard,
        !canAfford(reward.points) && styles.lockedCard,
      ]}
    >
      {reward.isSpecial && (
        <View style={styles.specialBadge}>
          <Text style={styles.specialBadgeText}>⭐ SIÊU PHẨM</Text>
        </View>
      )}

      {!canAfford(reward.points) && (
        <View style={styles.lockOverlay}>
          <Text style={styles.lockIcon}>🔒</Text>
        </View>
      )}

      <View style={styles.cardHeader}>
        <View style={styles.emojiContainer}>
          <Text style={styles.rewardEmoji}>{reward.emoji}</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{reward.points}</Text>
          <Text style={styles.pointsStar}>⭐</Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.rewardTitle}>{reward.title}</Text>
        <Text style={styles.rewardDescription}>{reward.description}</Text>
      </View>

      <View style={styles.cardFooter}>
        <TouchableOpacity
          style={[
            styles.exchangeButton,
            !canAfford(reward.points) && styles.disabledButton,
          ]}
          disabled={!canAfford(reward.points)}
        >
          <Text style={styles.exchangeButtonText}>
            {canAfford(reward.points) ? "Đổi ngay! 🎁" : "Chưa đủ điểm"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderFeaturedReward = (reward) => (
    <View key={reward.id} style={styles.featuredCard}>
      <View style={styles.featuredHeader}>
        <Text style={styles.featuredBadge}>🔥 HOT NHẤT</Text>
      </View>
      <View style={styles.featuredContent}>
        <Text style={styles.featuredEmoji}>{reward.emoji}</Text>
        <Text style={styles.featuredTitle}>{reward.title}</Text>
        <Text style={styles.featuredDescription}>{reward.description}</Text>
        <View style={styles.featuredPoints}>
          <Text style={styles.featuredPointsText}>{reward.points} ⭐</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.featuredButton,
            !canAfford(reward.points) && styles.disabledButton,
          ]}
          disabled={!canAfford(reward.points)}
        >
          <Text style={styles.featuredButtonText}>
            {canAfford(reward.points) ? "Đổi ngay! 🚀" : "Chưa đủ điểm 😢"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header với animation */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerEmoji}>🎁</Text>
          <Text style={styles.headerTitle}>Cửa Hàng Quà Tặng</Text>
        </View>
        <View style={styles.pointsDisplay}>
          <Text style={styles.pointsEmoji}>💰</Text>
          <Text style={styles.pointsCount}>{userPoints}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Motivational Banner */}
        <View style={styles.motivationBanner}>
          <Text style={styles.motivationText}>
            🌟 Làm bài tập để kiếm thêm điểm nhé! 🌟
          </Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${Math.min((userPoints / 1000) * 100, 100)}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {userPoints}/1000 điểm để mở khóa phần thưởng đặc biệt!
            </Text>
          </View>
        </View>

        {/* Featured Reward */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Phần thưởng nổi bật</Text>
          {rewards
            .filter((reward) => reward.isFeatured)
            .map((reward) => renderFeaturedReward(reward))}
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            {categories.map((category) => renderCategoryTab(category))}
          </ScrollView>
        </View>

        {/* Rewards Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            🎯 Tất cả phần thưởng ({filteredRewards.length})
          </Text>
          <View style={styles.rewardsGrid}>
            {filteredRewards
              .filter((reward) => !reward.isFeatured)
              .map((reward) => renderRewardCard(reward))}
          </View>
        </View>

        {/* Tips Section */}
        <View style={styles.tipsSection}>
          <Text style={styles.tipsTitle}>💡 Mẹo kiếm điểm:</Text>
          <View style={styles.tipItem}>
            <Text style={styles.tipEmoji}>✅</Text>
            <Text style={styles.tipText}>
              Hoàn thành bài tập đúng hạn: +10 điểm
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipEmoji}>🏆</Text>
            <Text style={styles.tipText}>
              Làm bài kiểm tra đạt điểm cao: +20 điểm
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipEmoji}>🎯</Text>
            <Text style={styles.tipText}>Tham gia hoạt động lớp: +15 điểm</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF",
  },
  header: {
    backgroundColor: "#667EEA",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    alignItems: "center",
  },
  headerEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  pointsDisplay: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  pointsEmoji: {
    fontSize: 20,
    marginRight: 6,
  },
  pointsCount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  motivationBanner: {
    backgroundColor: "#FFE082",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  motivationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F57C00",
    textAlign: "center",
    marginBottom: 12,
  },
  progressContainer: {
    alignItems: "center",
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "rgba(245, 124, 0, 0.2)",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 6,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#F57C00",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: "#F57C00",
    fontWeight: "500",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },
  featuredCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 3,
    borderColor: "#FFD700",
  },
  featuredHeader: {
    backgroundColor: "#FF6B6B",
    padding: 12,
    alignItems: "center",
  },
  featuredBadge: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  featuredContent: {
    padding: 20,
    alignItems: "center",
  },
  featuredEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  featuredDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  featuredPoints: {
    backgroundColor: "#667EEA",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  featuredPointsText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  featuredButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#4CAF50",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  featuredButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryScroll: {
    flexDirection: "row",
  },
  categoryTab: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeCategoryTab: {
    backgroundColor: "#667EEA",
    shadowColor: "#667EEA",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  categoryEmoji: {
    fontSize: 16,
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  activeCategoryText: {
    color: "#FFFFFF",
  },
  rewardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  rewardCard: {
    width: "48%",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    position: "relative",
  },
  specialCard: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  lockedCard: {
    opacity: 0.6,
  },
  specialBadge: {
    position: "absolute",
    top: -1,
    right: 16,
    backgroundColor: "#FFD700",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  specialBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#333",
  },
  lockOverlay: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
  lockIcon: {
    fontSize: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  emojiContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  rewardEmoji: {
    fontSize: 20,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  pointsText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    marginRight: 2,
  },
  pointsStar: {
    fontSize: 12,
  },
  cardContent: {
    marginBottom: 12,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  rewardDescription: {
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.9,
  },
  cardFooter: {
    alignItems: "center",
  },
  exchangeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  disabledButton: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
  exchangeButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  tipsSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  tipEmoji: {
    fontSize: 16,
    marginRight: 10,
  },
  tipText: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
});

export default RewardsScreen;
