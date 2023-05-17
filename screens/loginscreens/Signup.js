import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import ProfileContext from "../../context/ProfileContext";
import { STYLES } from "../../constants/styles";
import { COLORS } from "../../constants/colors";
import SignupForm from "../../components/profile-components/signup/SignupForm";
import SocialSignup from "../../components/profile-components/signup/SocialSignup";
import Button from "../../components/ui-components/Button";

const Signup = () => {
  const { navigate } = useNavigation();
  const { handleCompleteProfile } = useContext(ProfileContext);
  const handleCreateAccount = () => {
    navigate("AccountabilityBuddiesScreen");
    handleCompleteProfile("AccountabilityBuddiesScreen", 0.5);
  };
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
        <Button onPress={handleCreateAccount}>Create Account</Button>
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
