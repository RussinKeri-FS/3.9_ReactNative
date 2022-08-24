import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList } from "react-native";

import styles from "../AppStyles";

function BookList({ navigation }) {
  const [books, setBooks] = useState(null);
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

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://crudbookapi.herokuapp.com/api/v1/books`);
      const json = await response.json();
      setBooks(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const saveBook = () => {
    setLoading(true);
    fetch(`https://crudbookapi.herokuapp.com/api/v1/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        setLoading(false);
        response.text();
        console.log(values);
      })
      .then(() => getBooks())
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack("Home")}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <Text style={styles.pageName}>Book List</Text>

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.book}
            onPress={() => navigation.navigate("Book", { _id: item._id })}
          >
            <Text style={styles.bookTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />

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
        <TouchableOpacity onPress={saveBook} style={styles.addButton}>
          <Text style={styles.buttonText}>{loading ? `Waiting` : `Add Book`}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default BookList;