import { View, TouchableOpacity, Image } from "react-native";

const CustomHeader = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../../assets/images/arrow.png")}
          style={{  marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default CustomHeader;
