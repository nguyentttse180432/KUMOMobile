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

const PremiumScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gói Premium</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>KUMO Premium</Text>
            <Text style={styles.bannerSubtitle}>
              Trải nghiệm học tập hoàn hảo
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Các gói Premium</Text>

        <TouchableOpacity style={styles.planCard}>
          <View style={styles.planHeader}>
            <Text style={styles.planTitle}>Gói Hàng Tháng</Text>
            <Text style={styles.planPrice}>99.000 đ/tháng</Text>
          </View>
          <Text style={styles.planDescription}>
            Truy cập đầy đủ các tính năng trong vòng 1 tháng
          </Text>
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Đăng ký</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.planCard, styles.bestValue]}>
          <View style={styles.bestValueTag}>
            <Text style={styles.bestValueText}>Tiết kiệm 25%</Text>
          </View>
          <View style={styles.planHeader}>
            <Text style={styles.planTitle}>Gói Cả Năm</Text>
            <Text style={styles.planPrice}>899.000 đ/năm</Text>
          </View>
          <Text style={styles.planDescription}>
            Truy cập đầy đủ các tính năng trong vòng 12 tháng
          </Text>
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Đăng ký</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Lợi ích Premium</Text>
        <View style={styles.benefitItem}>
          <View style={styles.benefitIcon}>
            <Text style={styles.iconText}>🎮</Text>
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitTitle}>
              Trò chơi học tập không giới hạn
            </Text>
            <Text style={styles.benefitDescription}>
              Hơn 100 trò chơi giáo dục cho trẻ em mọi lứa tuổi
            </Text>
          </View>
        </View>
        <View style={styles.benefitItem}>
          <View style={styles.benefitIcon}>
            <Text style={styles.iconText}>📝</Text>
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitTitle}>Bài tập được cá nhân hóa</Text>
            <Text style={styles.benefitDescription}>
              Bài tập được thiết kế riêng cho từng học sinh
            </Text>
          </View>
        </View>
        <View style={styles.benefitItem}>
          <View style={styles.benefitIcon}>
            <Text style={styles.iconText}>🏆</Text>
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitTitle}>Đổi quà không giới hạn</Text>
            <Text style={styles.benefitDescription}>
              Con bạn có thể đổi điểm thưởng lấy nhiều quà hơn
            </Text>
          </View>
        </View>
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
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  bannerContainer: {
    marginBottom: 24,
  },
  banner: {
    backgroundColor: "#FFD700",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  planCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bestValue: {
    borderWidth: 2,
    borderColor: "#FFD700",
    position: "relative",
    paddingTop: 24,
  },
  bestValueTag: {
    position: "absolute",
    top: -12,
    right: 16,
    backgroundColor: "#FFD700",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bestValueText: {
    fontWeight: "bold",
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  planPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  planDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  subscribeButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  subscribeButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },
  benefitItem: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  benefitIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: "#666",
  },
  iconText: {
    fontSize: 20,
  },
});

export default PremiumScreen;
