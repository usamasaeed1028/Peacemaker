import React from "react";
import { Image, Text, View } from "react-native";
import { STYLES } from "../../constants/styles";
import { COLORS } from "../../constants/colors";
import Button from "../../components/ui-components/Button";

const CompleteProfileScreen = () => {
  return (
    <View style={[STYLES.container, { justifyContent: "space-between" }]}>
      <View>
        <Text
          style={[
            STYLES.text28,
            { color: COLORS.neutral900, textAlign: "center" },
          ]}
        >
          Profile Completed!
        </Text>
        <Text
          style={[
            STYLES.text13,
            {
              color: COLORS.neutral700,
              fontWeight: "500",
              marginTop: 8,
              textAlign: "center",
            },
          ]}
        >
          You’ve successfully completed your onboarding process, See you inside!
        </Text>
      </View>
      <View>
        <Image source={require("../../assets/images/amico.png")} alt="img" />
      </View>
      <View>
        <Button>DONE</Button>
      </View>
    </View>
  );
};

export default CompleteProfileScreen;
