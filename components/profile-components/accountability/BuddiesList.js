import { Image, StyleSheet, Text, View } from "react-native";

const BuddiesList = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/images/avatar1.jpg")}
          alt="avatarImg"
        />
      </View>
    </View>
  );
};

export default BuddiesList;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
});
