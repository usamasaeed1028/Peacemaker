import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text } from "react-native";
import Button from "../components/ui-components/Button";

const SplashScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#265565", "#288FB1", "#265565"]}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.image}
      />
      <Text style={styles.welcomeHeading}>Welcome to Peace Maker</Text>
      <Text style={styles.welcomeText}>
        Track you everyday routine, get free assessment with professionals and
        have your life together.
      </Text>
      <Button onPress={() => navigation.navigate("SignupScreen")}>
        Get Started
      </Button>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    
  },
  image: {
    width: 273,
    height: 332,
  },
  welcomeHeading: {
    marginTop: 52,
    fontSize: 34,
    fontWeight: "bold",
    lineHeight: 41,
    color: "white",
    textAlign: "center",
  },
  welcomeText: {
    marginTop: 9,
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18,
    color: "white",
    textAlign: "center",
  },
});
