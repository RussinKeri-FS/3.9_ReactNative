import { StatusBar } from "expo-status-bar";
import { 
  SafeAreaView, 
  Text, 
  TouchableOpacity 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../AppStyles";

function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageName}>Book Library</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Book List")}
      >
        <Text style={styles.buttonText}>View Books</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Home;
