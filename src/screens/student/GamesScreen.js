import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS } from "../../constants/colors";

const GamesScreen = () => {
  // Sample data for games
  const games = [
    {
      id: "1",
      title: "Học chữ cái",
      category: "Tiếng Việt",
      image: "https://via.placeholder.com/100",
      isPremium: false,
    },
    {
      id: "2",
      title: "Đếm số",
      category: "Toán",
      image: "https://via.placeholder.com/100",
      isPremium: false,
    },
    {
      id: "3",
      title: "Trí nhớ",
      category: "Tư duy",
      image: "https://via.placeholder.com/100",
      isPremium: true,
    },
    {
      id: "4",
      title: "Học từ vựng",
      category: "Tiếng Anh",
      image: "https://via.placeholder.com/100",
      isPremium: true,
    },
    {
      id: "5",
      title: "Động vật",
      category: "Khám phá",
      image: "https://via.placeholder.com/100",
      isPremium: false,
    },
    {
      id: "6",
      title: "Câu đố vui",
      category: "Giải trí",
      image: "https://via.placeholder.com/100",
      isPremium: false,
    },
  ];

  const categories = [
    "Tất cả",
    "Tiếng Việt",
    "Toán",
    "Tiếng Anh",
    "Khám phá",
    "Tư duy",
  ];

  const renderGameItem = ({ item }) => (
    <TouchableOpacity style={styles.gameCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.gameImage}
        resizeMode="cover"
      />
      <View style={styles.gameContent}>
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.gameCategory}>{item.category}</Text>
      </View>
      {item.isPremium && (
        <View style={styles.premiumBadge}>
          <Text style={styles.premiumText}>Premium</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trò chơi</Text>
      </View>
      <View style={styles.content}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={
                index === 0
                  ? styles.activeCategoryButton
                  : styles.categoryButton
              }
            >
              <Text
                style={
                  index === 0 ? styles.activeCategoryText : styles.categoryText
                }
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.featuredGameContainer}>
          <TouchableOpacity style={styles.featuredGame}>
            <Image
              source={{ uri: "https://via.placeholder.com/300" }}
              style={styles.featuredGameImage}
              resizeMode="cover"
            />
            <View style={styles.featuredGameContent}>
              <Text style={styles.featuredGameTitle}>Hành trình khám phá</Text>
              <Text style={styles.featuredGameDescription}>
                Học tập thông qua cuộc phiêu lưu đầy màu sắc
              </Text>
              <View style={styles.playButton}>
                <Text style={styles.playButtonText}>Chơi ngay</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Tất cả trò chơi</Text>
        <FlatList
          data={games}
          renderItem={renderGameItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.gameList}
          contentContainerStyle={{ paddingBottom: 20 }}
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
  categoryContainer: {
    marginBottom: 16,
  },
  categoryContent: {
    paddingRight: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: COLORS.white,
  },
  activeCategoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: COLORS.mediumBlue,
  },
  categoryText: {
    fontWeight: "600",
    color: "#666",
  },
  activeCategoryText: {
    fontWeight: "600",
    color: COLORS.white,
  },
  featuredGameContainer: {
    marginBottom: 20,
  },
  featuredGame: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featuredGameImage: {
    height: 150,
    width: "100%",
  },
  featuredGameContent: {
    padding: 16,
  },
  featuredGameTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  featuredGameDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  playButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  playButtonText: {
    color: COLORS.white,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  gameList: {
    justifyContent: "space-between",
  },
  gameCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    width: "48%",
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gameImage: {
    height: 100,
    width: "100%",
  },
  gameContent: {
    padding: 12,
  },
  gameTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  gameCategory: {
    fontSize: 12,
    color: "#666",
  },
  premiumBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#FFD700",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  premiumText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default GamesScreen;
