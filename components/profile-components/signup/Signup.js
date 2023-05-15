import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import SignupForm from "./SignupForm";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../ui-components/Button";
import SocialSignup from "./SocialSignup";

const Signup = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.aboutHeading}>Tell us about yourself</Text>
        <Text style={styles.aboutText}>
          We need this information to create your account.
        </Text>
      </View>
      <SignupForm />
      <View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "500",
            color: "#cccccc",
            textAlign: "center",
            marginTop: 25,
          }}
        >
          or create using
        </Text>
        <SocialSignup />
        <Text style={{ color: "#222222", marginTop: 24, textAlign: "center" }}>
          By signing in to you account, you are agree to our{" "}
          <Text style={{ color: "blue" }}> Privacy & Policy </Text>
          and <Text style={{ color: "blue" }}> Terms & Conditions</Text>.
        </Text>
        <Button>Create Account </Button>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#265565",
            textAlign: "center",
            paddingVertical: 43,
          }}
        >
          Have an account? <Text style={{ color: "#2791B5" }}>Sign In</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFA",
    paddingHorizontal: 16,
  },
  aboutHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0C212C",
  },
  aboutText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "500",
    color: "#576B74",
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: "black",
  },
});
