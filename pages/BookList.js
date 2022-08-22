import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../AppStyles";
import ListContainer from "../components/ListContainer";

function BookList() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    author: "",
  });

  const onChangeName = (value) => {
    setValues({ ...values, name: value });
  };

  const onChangeAuthor = (value) => {
    setValues({ ...values, author: value });
  };

  const saveBook = async () => {
    setLoading(true);
    await fetch(
      `https://crudbookapi.herokuapp.com/api/v1/books`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
      }
    )
      .then((res) => {
        setLoading(false), res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <Text style={styles.pageName}>Book List</Text>
      <ListContainer />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Book Title"}
          onChangeText={(value) => onChangeName(value)}
          style={styles.input}
        />
        <TextInput
          placeholder={"Book Author"}
          onChangeText={(value) => onChangeAuthor(value)}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={saveBook} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default BookList;