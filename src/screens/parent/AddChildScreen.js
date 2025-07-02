import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/colors";

const AddChildScreen = ({ navigation }) => {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [childGrade, setChildGrade] = useState("");

  const handleAddChild = () => {
    // Implement adding child logic here
    // For now, we'll just navigate back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thêm tài khoản cho con</Text>
        <View style={styles.placeholder}></View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.infoText}>
          Tạo tài khoản riêng cho con để theo dõi quá trình học tập và thành
          tích của bé
        </Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            style={styles.input}
            value={childName}
            onChangeText={setChildName}
            placeholder="Nhập tên của bé"
          />
        </View>

        <View style={styles.formRow}>
          <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Tuổi</Text>
            <TextInput
              style={styles.input}
              value={childAge}
              onChangeText={setChildAge}
              placeholder="Tuổi"
              keyboardType="number-pad"
            />
          </View>

          <View style={[styles.formGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>Lớp</Text>
            <TextInput
              style={styles.input}
              value={childGrade}
              onChangeText={setChildGrade}
              placeholder="Ví dụ: Lớp 3"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Mật khẩu truy cập</Text>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu đơn giản cho bé"
            secureTextEntry
          />
          <Text style={styles.helperText}>
            Mật khẩu đơn giản để bé có thể tự đăng nhập
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Tùy chọn bảo vệ</Text>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Giới hạn thời gian sử dụng</Text>
              <Text style={styles.optionDescription}>
                Đặt giới hạn thời gian con có thể sử dụng ứng dụng mỗi ngày
              </Text>
            </View>
            <View style={styles.toggle}>
              <View style={styles.toggleInner} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Cần xác nhận của phụ huynh</Text>
              <Text style={styles.optionDescription}>
                Yêu cầu xác nhận từ phụ huynh khi chuyển đổi tài khoản
              </Text>
            </View>
            <View style={[styles.toggle, styles.toggleActive]}>
              <View style={[styles.toggleInner, styles.toggleInnerActive]} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddChild}>
          <Text style={styles.addButtonText}>Thêm tài khoản</Text>
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
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: COLORS.white,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 20,
  },
  formRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  helperText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  optionsContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  optionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  optionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 13,
    color: "#666",
  },
  toggle: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E0E0E0",
    padding: 3,
  },
  toggleActive: {
    backgroundColor: "#4CAF50",
  },
  toggleInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.white,
  },
  toggleInnerActive: {
    marginLeft: "auto",
  },
  addButton: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 32,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.white,
  },
});

export default AddChildScreen;
