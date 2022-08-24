import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";


import styles from "../AppStyles";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageName}>Book List Homepage</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BookList")}>
        <Text style={styles.buttonText}>Book List</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Home;