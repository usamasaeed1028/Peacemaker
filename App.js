import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import SignupScreen from "./screens/loginscreens/SignupScreen";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import CustomHeader from "./components/ui-components/CustomHeader";
import AccountabilityScreen from "./screens/loginscreens/AccountabilityScreen";

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
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerTintColor: "#2791B5",
            headerShadowVisible: false,
            headerTitle: "",
            // headerTitle: ({navigation}) => <CustomHeader  navigation={navigation}/>,
          }}
        />
        <Stack.Screen
          name="AccountabilityScreen"
          component={AccountabilityScreen}
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
