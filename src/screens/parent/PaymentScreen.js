import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../constants/colors";

const PaymentScreen = ({ navigation }) => {
  const handlePaymentComplete = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/payment.png")}
            style={styles.paymentImage}
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity
          style={styles.paymentButton}
          onPress={handlePaymentComplete}
        >
          <Text style={styles.buttonText}>Đã thanh toán</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
    position: "absolute",
    top: 50,
    zIndex: 1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  paymentImage: {
    width: "100%",
    height: "90%",
  },
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  paymentButton: {
    position: "absolute",
    bottom: 80,
    left: 50,
    right: 50,
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PaymentScreen;
