import { StatusBar } from "expo-status-bar";
import { SafeAreaView, 
  Text, 
  View, 
  StyleSheet 
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#273A53" },
          headerTintColor: "#fff",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Book  List" component={BookList} />
        <Stack.Screen name="Book" component={Book} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}