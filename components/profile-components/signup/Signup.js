import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import SignupForm from "./SignupForm";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../ui-components/Button";
import SocialSignup from "./SocialSignup";
import { COLORS } from "../../../constants/colors";
import { STYLES } from "../../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const {navigate} = useNavigation();
  return (
    <ScrollView style={STYLES.container}>
      <View>
        <Text style={[STYLES.text28, { color: COLORS.neutral900 }]}>
          Tell us about yourself
        </Text>
        <Text
          style={[
            STYLES.text13,
            { color: COLORS.neutral700 },
            { fontWeight: "500" },
          ]}
        >
          We need this information to create your account.
        </Text>
      </View>
      <SignupForm />
      <View>
        {/* <View style={{ justifyContent: "center" }}>
          <View style={{ width: 100 }}>
            <Text
              style={{ borderTopWidth: 1, borderTopColor: "#cccccc" }}
            ></Text>
          </View>
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
          </View>
          <View style={{ width: 100 }}>
            <Text
              style={{ borderTopWidth: 1, borderTopColor: "#cccccc" }}
            ></Text>
          </View>
        </View> */}

        <SocialSignup />
        <Text style={{ color: "#222222", marginTop: 24, textAlign: "center" }}>
          By signing in to you account, you are agree to our{" "}
          <Text style={{ color: "#2791B5" }}> Privacy & Policy </Text>
          and <Text style={{ color: "#2791B5" }}> Terms & Conditions</Text>.
        </Text>
        <Button onPress={() => navigate("AccountabilityScreen")}>
          Create Account
        </Button>
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
  line: {
    width: 100,
    height: 1,
    backgroundColor: "black",
  },
});
