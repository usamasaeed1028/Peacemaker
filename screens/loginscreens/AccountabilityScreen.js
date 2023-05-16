import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { STYLES } from "../../constants/styles";
import { COLORS } from "../../constants/colors";
import Button from "../../components/ui-components/Button";
import NoBuddies from "../../components/profile-components/accountability/NoBuddies";
import BuddiesList from "../../components/profile-components/accountability/BuddiesList";

const AccountabilityScreen = () => {
  return (
    <View style={STYLES.container}>
      <Text style={[STYLES.text28, { color: COLORS.neutral900 }]}>
        Connect with your accountability buddies
      </Text>
      <Text
        style={[
          STYLES.text13,
          { color: COLORS.neutral700, fontWeight: "500", marginTop: 8 },
        ]}
      >
        Choose at least two to continue..
      </Text>
      <View style={styles.searchContainer}>
        <TextInput type="text" placeholder="Search" />
        <Ionicons
          name="search"
          size={18}
          color="rgba(60, 60, 67, 0.6)"
          style={styles.searchIcon}
        />
        <Ionicons
          name="mic"
          size={20}
          color="rgba(60, 60, 67, 0.6)"
          style={styles.micIcon}
        />
      </View>
      {/* <NoBuddies /> */}
      <BuddiesList />
    </View>
  );
};

export default AccountabilityScreen;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 28,
    paddingHorizontal: 33,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: "rgba(118, 118, 128, 0.12)",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    top: 12,
    left: 10,
  },
  micIcon: {
    position: "absolute",
    top: 12,
    right: 10,
  },
});
