import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { STYLES } from "../../../constants/styles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/colors";

const BuddiesList = ({ list }) => {
  const [isAddBuddies, setIsAddBuddies] = useState([]);
  const handleAddBuddies = (id) => {
    setIsAddBuddies((prev) => [...prev, id]);
  };
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={() => handleAddBuddies(list.id)}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            source={require("../../../assets/images/avatar2.png")}
            alt="avatarImg"
            style={styles.image}
          />
          <Text style={[STYLES.text16, { fontWeight: "400" }]}>
            {list.name}
          </Text>
        </View>
        {isAddBuddies.includes(list.id) && (
          <Ionicons name="checkmark" color={COLORS.primaryGreen} size={24} />
        )}
      </View>
    </Pressable>
  );
};

export default BuddiesList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingRight: 10,
  },
  innerContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    borderRadius: 48,
    width: 43,
    height: 43,
  },
  pressed: {
    opacity: 0.75,
  },
});
