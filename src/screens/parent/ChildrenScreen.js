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

const ChildrenScreen = ({ navigation }) => {
  // Sample data for children
  const children = [
    { id: "1", name: "Nguyễn Văn A", age: 7, grade: "Lớp 2" },
    { id: "2", name: "Nguyễn Văn B", age: 10, grade: "Lớp 5" },
  ];

  const renderChildItem = ({ item }) => (
    <TouchableOpacity
      style={styles.childCard}
      onPress={() => navigation.navigate("ChildDetail", { childId: item.id })}
    >
      <View style={styles.childAvatar}>
        <Text style={styles.childInitial}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.childInfo}>
        <Text style={styles.childName}>{item.name}</Text>
        <Text style={styles.childDetail}>
          {item.age} tuổi • {item.grade}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.switchButton}
        onPress={() => navigation.navigate("StudentTabs", { childId: item.id })}
      >
        <Text style={styles.switchButtonText}>Đổi</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Con của bạn</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={children}
          renderItem={renderChildItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View style={styles.headerInfo}>
              <Text style={styles.headerText}>
                Quản lý tài khoản của các con
              </Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate("AddChild")}
              >
                <Text style={styles.addButtonText}>+ Thêm con</Text>
              </TouchableOpacity>
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
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  addButton: {
    padding: 8,
  },
  addButtonText: {
    color: COLORS.mediumBlue,
    fontWeight: "600",
  },
  childCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  childAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ECEFF1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  childInitial: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
  },
  childInfo: {
    flex: 1,
  },
  childName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  childDetail: {
    fontSize: 14,
    color: "#666",
  },
  switchButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  switchButtonText: {
    color: COLORS.white,
    fontWeight: "600",
  },
});

export default ChildrenScreen;
