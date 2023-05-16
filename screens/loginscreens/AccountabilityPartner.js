import { StyleSheet, Text, View } from "react-native";
import { STYLES } from "../../constants/styles";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const AccountabilityPartner = () => {
  return (
    <View style={STYLES.container}>
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
          <View style={styles.innerContainer}>
            <View>
              <Text style={[STYLES.text16, { color: COLORS.neutral100 }]}>
                What is your relationship with
              </Text>
            </View>
            <Ionicons name="chevron-down" size={24} color={COLORS.primary400} />
          </View>
          <View
            style={{
              backgroundColor: "#ffffff",
              elevation: 3,
              borderRadius: 8,
              padding: 12,
              marginTop: 1,
            }}
          >
            <View style={{gap:10}}>
              <Text style={([STYLES.text16], { fontWeight: "400" })}>
                Husband
              </Text>
              <Text style={([STYLES.text16], { fontWeight: "400" })}>Wife</Text>
              <Text style={([STYLES.text16], { fontWeight: "400" })}>
                Partner
              </Text>
              <Text style={([STYLES.text16], { fontWeight: "400" })}>
                Subling
              </Text>
              <Text style={([STYLES.text16], { fontWeight: "400" })}>Kids</Text>
              <Text style={([STYLES.text16], { fontWeight: "400" })}>
                Friends
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountabilityPartner;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 2,
  },
});
