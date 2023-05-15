import { StyleSheet,View } from "react-native";
import Input from "../../ui-components/Input";

const SignupForm = () => {
  return (
    <View style={styles.formContainer}>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="date" placeholder="Date of birth (DD/MM/YY)" />
      <Input type="text" placeholder="Location" />
      <View style={styles.formFields}>
        <Input type="text" placeholder="Height (cm)" />
        <Input type="text" placeholder="Weight (lbs)" />
      </View>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
  },
  formFields: {
    flexDirection: "row",
    gap: 8,
  },
});
