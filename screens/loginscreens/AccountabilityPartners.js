import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { STYLES } from "../../constants/styles";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import Button from "../../components/ui-components/Button";
import ProfileContext from "../../context/ProfileContext";

const AccountabilityPartners = ({ navigation }) => {
  const [isRelationship, setIsRelationship] = useState(false);
  const { handleCompleteProfile } = useContext(ProfileContext);
  const handleClick = () => {
    navigation.navigate("CompleteProfileScreen");
    handleCompleteProfile("CompleteProfileScreen", 0.9);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={[STYLES.text28, { color: COLORS.neutral900 }]}>
          Delegate Primary Accountability Partner{" "}
        </Text>
        <View style={{ gap: 16, marginTop: 28 }}>
          <View style={styles.innerContainer}>
            <View>
              <Text style={[STYLES.text16, { color: COLORS.neutral100 }]}>
                Name of the Network
              </Text>
              <Text
                style={[
                  STYLES.text13,
                  { fontWeight: "500", color: COLORS.neutral700 },
                ]}
              >
                Erin Steed
              </Text>
            </View>
            <Ionicons name="chevron-down" size={24} color={COLORS.primary400} />
          </View>
          <View>
            <TouchableOpacity
              style={styles.innerContainer}
              onPress={() => setIsRelationship(!isRelationship)}
            >
              <View>
                <Text style={[STYLES.text16, { color: COLORS.neutral100 }]}>
                  What is your relationship with
                </Text>
              </View>
              <Ionicons
                name="chevron-down"
                size={24}
                color={COLORS.primary400}
              />
            </TouchableOpacity>
            {isRelationship && (
              <View
                style={{
                  backgroundColor: "#ffffff",
                  elevation: 3,
                  borderRadius: 8,
                  padding: 12,
                  marginTop: 1,
                }}
              >
                <View style={{ gap: 20, flexDirection: "column" }}>
                  <Text style={([STYLES.text16], { fontWeight: "400" })}>
                    Husband
                  </Text>
                  <Text style={([STYLES.text16], { fontWeight: "400" })}>
                    Wife
                  </Text>
                  <Text style={([STYLES.text16], { fontWeight: "400" })}>
                    Partner
                  </Text>
                  <Text style={([STYLES.text16], { fontWeight: "400" })}>
                    Subling
                  </Text>
                  <Text style={([STYLES.text16], { fontWeight: "400" })}>
                    Kids
                  </Text>
                  <Text style={([STYLES.text16], { fontWeight: "400" })}>
                    Friends
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
      <Button style={styles.button} onPress={handleClick}>
        SAVE
      </Button>
    </View>
  );
};

export default AccountabilityPartners;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#F9FAFA",
    justifyContent: "space-between",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 2,
  },
});
