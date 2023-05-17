import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { COLORS } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { STYLES } from "../../constants/styles";
import { useContext } from "react";
import ProfileContext from "../../context/ProfileContext";

const CustomHeader = ({ navigation, route }) => {
  const { profileProgress } = useContext(ProfileContext);
  const hideText = ["AboutScreen", "CompleteProfileScreen"];
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={28}
        color={COLORS.primary400}
        onPress={() => navigation.goBack()}
      />
      <Progress.Bar
        progress={profileProgress.progress}
        width={200}
        color={COLORS.primary400}
        unfilledColor={COLORS.neutral300}
        borderWidth={0}
      />
      {hideText.includes(route.name) ? (
        <View></View>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              route.name == "AccountabilityBuddiesScreen"
                ? "AccountabilityPartnerScreen"
                : "CompleteProfileScreen"
            )
          }
        >
          <Text
            style={[
              STYLES.text16,
              // isAddBuddies.length == 0
              //   ? { color: "#D6D6D6" }
              //   : { color: COLORS.mainGreen },
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#F9FAFA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
  },
});
