import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get('window');

const PremiumScreen = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = [
    {
      id: 'monthly',
      title: 'Gói Hàng Tháng',
      price: '39.000',
      period: 'tháng',
      description: 'Truy cập đầy đủ các tính năng trong vòng 1 tháng',
      savings: null,
      popular: false,
    },
    {
      id: 'yearly',
      title: 'Gói Cả Năm',
      price: '299.000',
      period: 'năm',
      description: 'Truy cập đầy đủ các tính năng trong vòng 12 tháng',
      savings: '25%',
      popular: true,
      monthlyPrice: '75.000',
    },
  ];

  const benefits = [
    {
      icon: '🎮',
      title: 'Trò chơi học tập không giới hạn',
      description: 'Hơn 100 trò chơi giáo dục cho trẻ em mọi lứa tuổi',
      color: '#FF6B6B',
    },
    {
      icon: '📝',
      title: 'Bài tập được cá nhân hóa',
      description: 'Bài tập được thiết kế riêng cho từng học sinh',
      color: '#4ECDC4',
    },
    {
      icon: '🏆',
      title: 'Đổi quà không giới hạn',
      description: 'Con bạn có thể đổi điểm thưởng lấy nhiều quà hơn',
      color: '#45B7D1',
    },
  ];

  const renderPlanCard = (plan) => (
    <TouchableOpacity
      key={plan.id}
      style={[
        styles.planCard,
        selectedPlan === plan.id && styles.selectedPlan,
        plan.popular && styles.popularPlan,
      ]}
      onPress={() => setSelectedPlan(plan.id)}
    >
      {plan.popular && (
        <View style={styles.popularBadge}>
          <Text style={styles.popularBadgeText}>🔥 PHỔ BIẾN NHẤT</Text>
        </View>
      )}
      
      {plan.savings && (
        <View style={styles.savingsBadge}>
          <Text style={styles.savingsText}>Tiết kiệm {plan.savings}</Text>
        </View>
      )}

      <View style={styles.planContent}>
        <Text style={styles.planTitle}>{plan.title}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{plan.price}</Text>
          <Text style={styles.currency}>đ</Text>
          <Text style={styles.period}>/{plan.period}</Text>
        </View>

        {plan.monthlyPrice && (
          <Text style={styles.monthlyEquivalent}>
            Tương đương {plan.monthlyPrice}đ/tháng
          </Text>
        )}

        <Text style={styles.planDescription}>{plan.description}</Text>

        <View style={styles.checkmarkContainer}>
          <View style={[styles.checkmark, selectedPlan === plan.id && styles.checkmarkSelected]}>
            {selectedPlan === plan.id && <Text style={styles.checkmarkIcon}>✓</Text>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderBenefitItem = (benefit, index) => (
    <View key={index} style={styles.benefitItem}>
      <View style={[styles.benefitIcon, { backgroundColor: benefit.color + '20' }]}>
        <Text style={styles.iconText}>{benefit.icon}</Text>
      </View>
      <View style={styles.benefitContent}>
        <Text style={styles.benefitTitle}>{benefit.title}</Text>
        <Text style={styles.benefitDescription}>{benefit.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.mediumBlue} />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nâng cấp Premium</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <View style={styles.heroGradient}>
            <Text style={styles.heroTitle}>✨ KUMO Premium ✨</Text>
            <Text style={styles.heroSubtitle}>
              Mở khóa tiềm năng học tập vô hạn cho con bạn
            </Text>
          </View>
        </View>

        {/* Pricing Plans */}
        <View style={styles.plansSection}>
          <Text style={styles.sectionTitle}>Chọn gói phù hợp</Text>
          <Text style={styles.sectionSubtitle}>
            Tất cả gói đều có thể hủy bất cứ lúc nào
          </Text>
          
          <View style={styles.plansContainer}>
            {plans.map(renderPlanCard)}
          </View>
        </View>

        {/* Benefits */}
        <View style={styles.benefitsSection}>
          <Text style={styles.sectionTitle}>Những lợi ích đặc biệt</Text>
          <Text style={styles.sectionSubtitle}>
            Tất cả những gì con bạn cần để học tập hiệu quả
          </Text>
          
          <View style={styles.benefitsGrid}>
            {benefits.map(renderBenefitItem)}
          </View>
        </View>

        {/* Trust Indicators */}
        <View style={styles.trustSection}>
          <Text style={styles.trustTitle}>Được tin tưởng bởi</Text>
          <View style={styles.trustStats}>
            <View style={styles.trustItem}>
              <Text style={styles.trustNumber}>50,000+</Text>
              <Text style={styles.trustLabel}>Phụ huynh</Text>
            </View>
            <View style={styles.trustItem}>
              <Text style={styles.trustNumber}>4.9⭐</Text>
              <Text style={styles.trustLabel}>Đánh giá</Text>
            </View>
            <View style={styles.trustItem}>
              <Text style={styles.trustNumber}>1,000+</Text>
              <Text style={styles.trustLabel}>Trường học</Text>
            </View>
          </View>
        </View>

        {/* CTA Button */}
        <View style={styles.ctaSection}>
          <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.ctaButtonText}>
              Bắt đầu với {plans.find(p => p.id === selectedPlan)?.title}
            </Text>
            <Text style={styles.ctaButtonSubtext}>
              {plans.find(p => p.id === selectedPlan)?.price}đ/{plans.find(p => p.id === selectedPlan)?.period}
            </Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
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
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.white,
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    flex: 1,
  },
  heroBanner: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  heroGradient: {
    backgroundColor: '#6C63FF',
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 24,
  },
  heroStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.8,
  },
  plansSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  plansContainer: {
    gap: 16,
  },
  planCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  selectedPlan: {
    borderColor: COLORS.mediumBlue,
    backgroundColor: '#F8F9FF',
  },
  popularPlan: {
    borderColor: '#FF6B6B',
    transform: [{ scale: 1.02 }],
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: 20,
    right: 20,
    backgroundColor: '#FF6B6B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
    zIndex: 1,
  },
  popularBadgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  savingsBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  savingsText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  planContent: {
    marginTop: 12,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.mediumBlue,
  },
  currency: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.mediumBlue,
    marginLeft: 4,
  },
  period: {
    fontSize: 16,
    color: "#666",
    marginLeft: 4,
  },
  monthlyEquivalent: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: '600',
    marginBottom: 12,
  },
  planDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  checkmarkContainer: {
    alignItems: 'flex-end',
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkSelected: {
    backgroundColor: COLORS.mediumBlue,
    borderColor: COLORS.mediumBlue,
  },
  checkmarkIcon: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  benefitsSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  benefitsGrid: {
    gap: 16,
  },
  benefitItem: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  benefitIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  iconText: {
    fontSize: 24,
  },
  trustSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
    alignItems: 'center',
  },
  trustTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 16,
  },
  trustStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  trustItem: {
    alignItems: 'center',
  },
  trustNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.mediumBlue,
    marginBottom: 4,
  },
  trustLabel: {
    fontSize: 12,
    color: '#666',
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  ctaButton: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: COLORS.mediumBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 16,
  },
  ctaButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  ctaButtonSubtext: {
    color: COLORS.white,
    fontSize: 14,
    opacity: 0.9,
  },
  disclaimer: {
    fontSize: 14,
    color: "#666",
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default PremiumScreen;