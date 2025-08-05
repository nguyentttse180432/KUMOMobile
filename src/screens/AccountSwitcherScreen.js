import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
} from "react-native";
import { COLORS } from "../constants/colors";
import { accountsData } from "../data/appData";

const AccountSwitcherScreen = ({ navigation, route }) => {
  const { currentAccount } = route.params || { currentAccount: "parent" };

  const handleAccountSelect = (account) => {
    if (account.type === "parent") {
      navigation.navigate("ParentTabs");
    } else {
      // Chuyển đổi ID từ string thành number nếu cần
      const childId = parseInt(account.id, 10) || account.id;
      navigation.navigate("StudentTabs", { childId: childId });
    }
  };

  const renderAccountItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.accountCard,
        currentAccount === item.id && styles.activeAccountCard,
      ]}
      onPress={() => handleAccountSelect(item)}
    >
      <View style={styles.avatarContainer}>
        <View
          style={[
            styles.avatar,
            item.type === "parent" ? styles.parentAvatar : styles.childAvatar,
          ]}
        >
          <Text style={styles.avatarText}>{item.avatar}</Text>
        </View>
        {currentAccount === item.id && (
          <View style={styles.activeIndicator}>
            <Text style={styles.activeText}>✓</Text>
          </View>
        )}
      </View>
      <Text style={styles.accountName}>{item.name}</Text>
      {item.type === "child" && (
        <Text style={styles.accountDetail}>
          {item.age} tuổi • {item.grade}
        </Text>
      )}
      <Text style={styles.accountType}>
        {item.type === "parent" ? "Tài khoản phụ huynh" : "Tài khoản học sinh"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.mediumBlue} barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chuyển đổi tài khoản</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Chọn tài khoản</Text>
        <FlatList
          data={accountsData}
          renderItem={renderAccountItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.accountsList}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddChild")}
        >
          <Text style={styles.addButtonText}>+ Thêm tài khoản mới cho con</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    color: COLORS.white,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
  },
  accountsList: {
    paddingBottom: 16,
  },
  accountCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeAccountCard: {
    borderWidth: 2,
    borderColor: COLORS.mediumBlue,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  parentAvatar: {
    backgroundColor: COLORS.lightBlue,
  },
  childAvatar: {
    backgroundColor: "#FFE0B2", // Light orange
  },
  avatarText: {
    fontSize: 36,
    textAlign: "center",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.success,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  activeText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  accountName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  accountDetail: {
    fontSize: 14,
    color: COLORS.lightText,
    marginBottom: 8,
  },
  accountType: {
    fontSize: 12,
    color: COLORS.mediumBlue,
    backgroundColor: COLORS.lightBlue,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  addButton: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.mediumBlue,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  addButtonText: {
    color: COLORS.mediumBlue,
    fontWeight: "600",
  },
});

export default AccountSwitcherScreen;
