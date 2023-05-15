import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ placeholder, style, type, value }) => {


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.inputInnerContainer, style]}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E7EAEB",
    borderRadius: 12,
  },
  inputInnerContainer: {
    color: "#94A5AB",
    paddingHorizontal: 14,
    paddingVertical: 19,
  },
});
