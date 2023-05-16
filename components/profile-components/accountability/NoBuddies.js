import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../ui-components/Button";
import { STYLES } from "../../../constants/styles";
import { COLORS } from "../../../constants/colors";

const NoBuddies = () => {
  return (
    <View style={styles.buddiesContainer}>
      <View style={{ width: 200 }}>
        <Text
          style={[
            STYLES.text16,
            { color: COLORS.neutral700, textAlign: "center" },
          ]}
        >
          No accountability buddies to add yet.
        </Text>
        <Button>Skip</Button>
      </View>
    </View>
  );
};

export default NoBuddies;

const styles = StyleSheet.create({
  buddiesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
