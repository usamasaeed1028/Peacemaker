import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SocialSignup = () => {
  return (
    <View style={styles.iconContainer}>
      <Ionicons name="logo-google" size={30} color="red" style={[styles.icon, styles.google]} />
      <Ionicons
        name="logo-facebook"
        size={30}
        color="white"
        style={[styles.icon, styles.facebook]}
      />
      <Ionicons
        name="logo-apple"
        size={30}
        color="white"
        style={[styles.icon, styles.apple]}
      />
    </View>
  );
};

export default SocialSignup;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    gap: 9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },
  icon: {
    borderRadius: 48,
    padding: 10,
  },
  google: {
      borderWidth: 1
  },
  facebook: {
    backgroundColor: "blue",
  },
  apple: {
    backgroundColor: "black",
  },
});
