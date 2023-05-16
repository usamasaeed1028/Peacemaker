import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import Signup from "./screens/loginscreens/Signup";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import CustomHeader from "./components/ui-components/CustomHeader";
import AccountabilityBuddies from "./screens/loginscreens/AccountabilityBuddies";
import AccountabilityPartner from "./screens/loginscreens/AccountabilityPartner";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#F9FAFA" },
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerTintColor: "#2791B5",
            headerShadowVisible: false,
            headerTitle: "",
            // headerTitle: ({navigation}) => <CustomHeader  navigation={navigation}/>,
          }}
        />
        <Stack.Screen
          name="AccountabilityBuddies"
          component={AccountabilityBuddies}
          options={{
            headerTintColor: "#2791B5",
            headerShadowVisible: false,
            headerTitle: "",
            // headerRight: () => {
            //   <Text>Done</Text>;
            // },
          }}
        />
        <Stack.Screen
          name="AccountabilityPartner"
          component={AccountabilityPartner}
          options={{
            headerTintColor: "#2791B5",
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
