import { Pressable, View, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress, style, buttonText }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, buttonText]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#CCF593",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#134555",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.75,
  },
});
