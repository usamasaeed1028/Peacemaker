import { StyleSheet,View } from "react-native";
import {Ionicons} from "@expo/vector-icons"

const SocialSignup = () => {
  return (
    <View style={styles.iconContainer}>
      <Ionicons name="logo-apple" size={30} color="black" style={styles.icon} />
      <Ionicons
        name="logo-facebook"
        size={30}
        color="blue"
        style={styles.icon}
      />
      <Ionicons name="logo-google" size={30} color="red" style={styles.icon} />
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
    borderWidth: 1,
    borderRadius: 48,
    padding: 10,
  },
});
