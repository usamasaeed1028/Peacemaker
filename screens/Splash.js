import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text } from "react-native";
import Button from "../components/ui-components/Button";
import { STYLES } from "../constants/styles";


const Splash = ({ navigation }) => {

  return (
    <LinearGradient
      colors={["#265565", "#288FB1", "#265565"]}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={[styles.welcomeHeading, STYLES.text34]}>
        Welcome to Peace Maker
      </Text>
      <Text style={[styles.welcomeText, STYLES.text13]}>
        Track you everyday routine, get free assessment with professionals and
        have your life together.
      </Text>
      <Button
        style={{ paddingHorizontal: 122 }}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        Get Started
      </Button>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  image: {
    // width: 273,
    // height: 500,
  },
  welcomeHeading: {
    marginTop: 52,
    color: "white",
    textAlign: "center",
  },
  welcomeText: {
    marginTop: 9,
    color: "white",
    textAlign: "center",
    opacity: 0.7,
  },
});
