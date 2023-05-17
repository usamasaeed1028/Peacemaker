import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/Splash";
import Signup from "./screens/loginscreens/Signup";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "./components/ui-components/CustomHeader";
import AccountabilityBuddies from "./screens/loginscreens/AccountabilityBuddies";
import AccountabilityPartner from "./screens/loginscreens/AccountabilityPartners";
import CompleteProfileScreen from "./screens/loginscreens/CompleteProfile";
import * as Progress from "react-native-progress";
import ProfileState from "./context/ProfileState";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProfileState>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#F9FAFA" },
            header: ({ navigation, route }) => (
              <CustomHeader route={route} navigation={navigation} />
            ),
          }}
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignupScreen" component={Signup} />
          <Stack.Screen
            name="AccountabilityBuddiesScreen"
            component={AccountabilityBuddies}
          />
          <Stack.Screen
            name="AccountabilityPartnerScreen"
            component={AccountabilityPartner}
          />
          <Stack.Screen
            name="CompleteProfileScreen"
            component={CompleteProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileState>
  );
}
