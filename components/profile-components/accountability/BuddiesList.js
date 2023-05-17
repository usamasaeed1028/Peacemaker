import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { STYLES } from "../../../constants/styles";
import { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const BuddiesList = ({ list }) => {
  const navigation = useNavigation();
  const [isAddBuddies, setIsAddBuddies] = useState([]);
  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate("AccountabilityPartnersScreen")}
  //         >
  //           <Text
  //             style={[
  //               STYLES.text16,
  //               isAddBuddies.length == 0
  //                 ? { color: "#D6D6D6" }
  //                 : { color: COLORS.mainGreen },
  //             ]}
  //           >
  //             Done
  //           </Text>
  //         </TouchableOpacity>
  //       ),
  //     });
  //   }, [navigation, isAddBuddies]);

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
            resizeMode="cover"
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
    alignItems: "center",
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
