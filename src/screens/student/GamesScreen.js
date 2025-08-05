import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");

const GamesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Sample data for games with more fun titles and emojis
  const games = [
    {
      id: "1",
      title: "Học chữ cái vui",
      category: "Tiếng Việt",
      image: "https://via.placeholder.com/100",
      isPremium: false,
      emoji: "🔤",
      color: "#FF6B6B",
      difficulty: "Dễ",
    },
    {
      id: "2",
      title: "Đếm số siêu tốc",
      category: "Toán",
      image: "https://via.placeholder.com/100",
      isPremium: false,
      emoji: "🔢",
      color: "#4ECDC4",
      difficulty: "Trung bình",
    },
    {
      id: "3",
      title: "Trí nhớ siêu nhân",
      category: "Tư duy",
      image: "https://via.placeholder.com/100",
      isPremium: true,
      emoji: "🧠",
      color: "#45B7D1",
      difficulty: "Khó",
    },
    {
      id: "4",
      title: "Từ vựng ma thuật",
      category: "Tiếng Anh",
      image: "https://via.placeholder.com/100",
      isPremium: true,
      emoji: "🪄",
      color: "#96CEB4",
      difficulty: "Dễ",
    },
    {
      id: "5",
      title: "Thế giới động vật",
      category: "Khám phá",
      image: "https://via.placeholder.com/100",
      isPremium: false,
      emoji: "🦁",
      color: "#FFEAA7",
      difficulty: "Dễ",
    },
    {
      id: "6",
      title: "Câu đố thông minh",
      category: "Giải trí",
      image: "https://via.placeholder.com/100",
      isPremium: false,
      emoji: "🎯",
      color: "#DDA0DD",
      difficulty: "Trung bình",
    },
    {
      id: "7",
      title: "Phép tính nhanh",
      category: "Toán",
      image: "https://via.placeholder.com/100",
      isPremium: false,
      emoji: "⚡",
      color: "#FFB347",
      difficulty: "Trung bình",
    },
    {
      id: "8",
      title: "Khám phá vũ trụ",
      category: "Khám phá",
      image: "https://via.placeholder.com/100",
      isPremium: true,
      emoji: "🚀",
      color: "#6C5CE7",
      difficulty: "Khó",
    },
  ];

  const categories = [
    { name: "Tất cả", emoji: "🎮" },
    { name: "Tiếng Việt", emoji: "📚" },
    { name: "Toán", emoji: "➕" },
    { name: "Tiếng Anh", emoji: "🇬🇧" },
    { name: "Khám phá", emoji: "🔍" },
    { name: "Tư duy", emoji: "🧩" },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Dễ":
        return "#4CAF50";
      case "Trung bình":
        return "#FF9800";
      case "Khó":
        return "#F44336";
      default:
        return "#9E9E9E";
    }
  };

  const renderGameItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.gameCard, { backgroundColor: item.color + "20" }]}
    >
      <View style={styles.gameHeader}>
        <View style={[styles.emojiContainer, { backgroundColor: item.color }]}>
          <Text style={styles.gameEmoji}>{item.emoji}</Text>
        </View>
        {item.isPremium && (
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>👑</Text>
          </View>
        )}
      </View>

      <View style={styles.gameContent}>
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.gameCategory}>{item.category}</Text>

        <View style={styles.gameFooter}>
          <View
            style={[
              styles.difficultyBadge,
              { backgroundColor: getDifficultyColor(item.difficulty) },
            ]}
          >
            <Text style={styles.difficultyText}>{item.difficulty}</Text>
          </View>
          <TouchableOpacity
            style={[styles.playButton, { backgroundColor: item.color }]}
          >
            <Text style={styles.playButtonText}>Chơi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header với gradient và animation */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎮 Trò chơi học tập</Text>
        <Text style={styles.headerSubtitle}>Học mà chơi, chơi mà học!</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === index && styles.activeCategoryButton,
              ]}
              onPress={() => setSelectedCategory(index)}
            >
              <Text style={styles.categoryEmoji}>{category.emoji}</Text>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === index && styles.activeCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Game */}
        <View style={styles.featuredGameContainer}>
          <TouchableOpacity style={styles.featuredGame}>
            <View style={styles.featuredGameBackground}>
              <Text style={styles.featuredGameEmoji}>🌟</Text>
            </View>
            <View style={styles.featuredGameContent}>
              <Text style={styles.featuredGameTitle}>
                🎯 Thử thách hàng ngày
              </Text>
              <Text style={styles.featuredGameDescription}>
                Hoàn thành thử thách và nhận thưởng hấp dẫn! 🎁
              </Text>
              <View style={styles.featuredGameStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statEmoji}>⭐</Text>
                  <Text style={styles.statText}>+50 điểm</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statEmoji}>🏆</Text>
                  <Text style={styles.statText}>Huy chương</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.featuredPlayButton}>
                <Text style={styles.featuredPlayButtonText}>
                  🚀 Bắt đầu ngay!
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>📊 Tiến độ học tập</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressItem}>
              <Text style={styles.progressEmoji}>🎯</Text>
              <Text style={styles.progressLabel}>Hoàn thành</Text>
              <Text style={styles.progressValue}>12/20</Text>
            </View>
            <View style={styles.progressItem}>
              <Text style={styles.progressEmoji}>⭐</Text>
              <Text style={styles.progressLabel}>Điểm số</Text>
              <Text style={styles.progressValue}>1,250</Text>
            </View>
            <View style={styles.progressItem}>
              <Text style={styles.progressEmoji}>🔥</Text>
              <Text style={styles.progressLabel}>Streak</Text>
              <Text style={styles.progressValue}>7 ngày</Text>
            </View>
          </View>
        </View>

        {/* Games Grid */}
        <View style={styles.gamesSection}>
          <Text style={styles.sectionTitle}>🎮 Tất cả trò chơi</Text>
          <FlatList
            data={games}
            renderItem={renderGameItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.gameRow}
            scrollEnabled={false}
            contentContainerStyle={styles.gamesList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },
  header: {
    backgroundColor: "#6C5CE7",
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#6C5CE7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#E8E3FF",
    textAlign: "center",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryContent: {
    paddingRight: 16,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeCategoryButton: {
    backgroundColor: "#6C5CE7",
    shadowColor: "#6C5CE7",
    shadowOpacity: 0.3,
  },
  categoryEmoji: {
    fontSize: 18,
    marginRight: 6,
  },
  categoryText: {
    fontWeight: "600",
    color: "#666",
    fontSize: 14,
  },
  activeCategoryText: {
    color: "#FFFFFF",
  },
  featuredGameContainer: {
    marginBottom: 25,
  },
  featuredGame: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  featuredGameBackground: {
    backgroundColor: "#FFE5B4",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  featuredGameEmoji: {
    fontSize: 40,
  },
  featuredGameContent: {
    padding: 20,
  },
  featuredGameTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2D3436",
    marginBottom: 8,
  },
  featuredGameDescription: {
    fontSize: 15,
    color: "#636E72",
    marginBottom: 15,
    lineHeight: 22,
  },
  featuredGameStats: {
    flexDirection: "row",
    marginBottom: 15,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  statEmoji: {
    fontSize: 16,
    marginRight: 5,
  },
  statText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6C5CE7",
  },
  featuredPlayButton: {
    backgroundColor: "#6C5CE7",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: "flex-start",
    shadowColor: "#6C5CE7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  featuredPlayButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  progressSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2D3436",
    marginBottom: 15,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  progressItem: {
    alignItems: "center",
    flex: 1,
  },
  progressEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: "#636E72",
    fontWeight: "500",
    marginBottom: 2,
  },
  progressValue: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2D3436",
  },
  gamesSection: {
    marginBottom: 20,
  },
  gamesList: {
    paddingBottom: 20,
  },
  gameRow: {
    justifyContent: "space-between",
  },
  gameCard: {
    width: (width - 42) / 2,
    borderRadius: 7,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 3,
  },
  gameHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingBottom: 10,
  },
  emojiContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  gameEmoji: {
    fontSize: 24,
  },
  premiumBadge: {
    backgroundColor: "#FFD700",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  premiumText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  gameContent: {
    padding: 15,
    paddingTop: 0,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2D3436",
    marginBottom: 4,
  },
  gameCategory: {
    fontSize: 13,
    color: "#636E72",
    marginBottom: 12,
    fontWeight: "500",
  },
  gameFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  difficultyBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  difficultyText: {
    fontSize: 11,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  playButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  playButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
  },
});

export default GamesScreen;
