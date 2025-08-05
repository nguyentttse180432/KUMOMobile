import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import ggLogo from "../../assets/Google-Symbol.png"; // Adjust the path as necessary
import { COLORS } from "../constants/colors"; // Adjust the path as necessary

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đăng nhập</Text>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Mật khẩu"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showButton}
            >
              <Text style={styles.showButtonText}>
                {showPassword ? "Ẩn" : "Hiện"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("ParentTabs")}
          >
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>HOẶC</Text>
            <View style={styles.dividerLine} />
          </View>
          <Text style={styles.termsText}>
            Bằng việc nhấn tài khoản, bạn đồng ý với
            <Text style={styles.linkText}>Điều khoản dịch vụ</Text> và
            <Text style={styles.linkText}>Chính sách bảo mật</Text> của KUMO
            Classroom
          </Text>
          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={ggLogo}
              resizeMode="contain"
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Tiếp tục với Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E8EEF9",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  signUpButton: {
    padding: 8,
  },
  signUpText: {
    fontSize: 16,
    color: COLORS.mediumBlue,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    marginTop: 24,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
  showButton: {
    paddingRight: 16,
  },
  showButtonText: {
    color: COLORS.mediumBlue,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: COLORS.mediumBlue,
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPasswordButton: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: COLORS.mediumBlue,
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#C4C4C4",
  },
  dividerText: {
    paddingHorizontal: 16,
    color: "#888888",
  },
  termsText: {
    textAlign: "center",
    color: "#888888",
    marginBottom: 24,
    paddingHorizontal: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  linkText: {
    color: COLORS.mediumBlue, // Blue color for links
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  googleIcon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#4B4B4B",
    fontSize: 16,
  },
});

export default LoginScreen;
