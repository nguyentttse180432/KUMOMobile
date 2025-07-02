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

const RewardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Đổi quà</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>🌟 250 điểm</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Đổi điểm lấy quà!</Text>
            <Text style={styles.bannerSubtitle}>
              Thu thập điểm để đổi lấy phần thưởng hấp dẫn
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Phần thưởng nổi bật</Text>
        <TouchableOpacity style={styles.featuredRewardCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.featuredRewardImage}
            resizeMode="cover"
          />
          <View style={styles.featuredRewardContent}>
            <Text style={styles.featuredRewardTitle}>Bộ đồ chơi lắp ráp</Text>
            <Text style={styles.featuredRewardDescription}>
              Bộ đồ chơi phát triển tư duy và kỹ năng vận động tinh
            </Text>
            <View style={styles.pointsTag}>
              <Text style={styles.pointsTagText}>500 điểm</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Các phần thưởng khác</Text>
        <View style={styles.rewardsGrid}>
          <TouchableOpacity style={styles.rewardCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/80" }}
              style={styles.rewardImage}
              resizeMode="cover"
            />
            <Text style={styles.rewardTitle}>Nhân vật hoạt hình</Text>
            <View style={styles.rewardPoints}>
              <Text style={styles.rewardPointsText}>200 🌟</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rewardCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/80" }}
              style={styles.rewardImage}
              resizeMode="cover"
            />
            <Text style={styles.rewardTitle}>Sách tô màu</Text>
            <View style={styles.rewardPoints}>
              <Text style={styles.rewardPointsText}>150 🌟</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rewardCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/80" }}
              style={styles.rewardImage}
              resizeMode="cover"
            />
            <Text style={styles.rewardTitle}>Bộ bút màu</Text>
            <View style={styles.rewardPoints}>
              <Text style={styles.rewardPointsText}>300 🌟</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rewardCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/80" }}
              style={styles.rewardImage}
              resizeMode="cover"
            />
            <Text style={styles.rewardTitle}>Giấy khen</Text>
            <View style={styles.rewardPoints}>
              <Text style={styles.rewardPointsText}>100 🌟</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Phần thưởng đặc biệt</Text>
        <TouchableOpacity style={styles.specialRewardCard}>
          <View style={styles.specialBadge}>
            <Text style={styles.specialBadgeText}>Đặc biệt</Text>
          </View>
          <Text style={styles.specialRewardTitle}>
            Chuyến đi học tập thực tế
          </Text>
          <Text style={styles.specialRewardDescription}>
            Tham gia chuyến đi học tập thực tế cùng các bạn và thầy cô
          </Text>
          <View style={styles.specialPointsContainer}>
            <Text style={styles.specialPoints}>1000 điểm</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  bannerContainer: {
    marginBottom: 24,
  },
  banner: {
    backgroundColor: "#FFD54F",
    borderRadius: 12,
    padding: 20,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "#5D4037",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  featuredRewardCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featuredRewardImage: {
    height: 150,
    width: "100%",
  },
  featuredRewardContent: {
    padding: 16,
  },
  featuredRewardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  featuredRewardDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  pointsTag: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  pointsTagText: {
    color: COLORS.white,
    fontWeight: "600",
  },
  rewardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  rewardCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rewardImage: {
    height: 80,
    width: 80,
    marginBottom: 8,
    borderRadius: 8,
  },
  rewardTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  rewardPoints: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  rewardPointsText: {
    fontSize: 12,
    fontWeight: "600",
  },
  specialRewardCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: "#FFB300",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: "relative",
  },
  specialBadge: {
    position: "absolute",
    top: 0,
    right: 16,
    backgroundColor: "#FFB300",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  specialBadgeText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 12,
  },
  specialRewardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 8,
  },
  specialRewardDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  specialPointsContainer: {
    backgroundColor: "#FFF9C4",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  specialPoints: {
    fontWeight: "600",
  },
});

export default RewardsScreen;
