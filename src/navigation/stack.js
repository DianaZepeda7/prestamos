import Home from "../components/home";
import Prestamos from "../components/prestamos";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="prestamos" component={Prestamos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
