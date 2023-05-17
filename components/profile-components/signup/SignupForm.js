import { StyleSheet,View } from "react-native";
import Input from "../../ui-components/Input";

const SignupForm = () => {
  return (
    <View style={styles.formContainer}>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="date" placeholder="Date of birth (DD/MM/YY)" />
      <Input type="text" placeholder="Location" />
      <View style={{flexDirection: 'row',gap:8,}} >
        <Input type="text" placeholder="Height (cm)" style={{width: 157}}  />
        <Input type="text" placeholder="Weight (lbs)" style={{width: 157}} />
      </View>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    gap: 16,
  },
  formFields: {
    flexDirection: "row",
    gap: 8,
  },

});
