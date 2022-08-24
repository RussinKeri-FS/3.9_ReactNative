import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../AppStyles";

export default function Book({ route, navigation }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    author: "",
  });

  const { _id } = route.params;

  const onChangeName = (value) => {
    setValues({ ...values, name: value });
  };

  const onChangeAuthor = (value) => {
    setValues({ ...values, author: value });
  };

  const getBook = async () => {
    try {
      await fetch(`https://crudbookapi.herokuapp.com/api/v1/books/${_id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setValues({ 
            name: data.name, 
            author: data.author
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getBook();
    }
    return () => {
      ignore = true;
    };
  }, []);

  const updateBook = async () => {
    try {
      await fetch(`https://crudbookapi.herokuapp.com/api/v1/books/${_id}`, {
        method: `PATCH`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      })
        .then((response) => {
          response.json();
          navigation.goBack("BookList");
        })
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async () => {
    try {
      await fetch(`https://crudbookapi.herokuapp.com/api/v1/books/${_id}`, {
        method: `DELETE`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          response.json();
        })
        .then((data) => {
          console.log(data);
          setBooks(data);
          navigation.goBack("BookList");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BookList")}>
          <Text style={styles.buttonText}>Book List</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.pageName}>Book Info</Text>
      <View style={styles.BookInfo}>
        <Text style={styles.BookInfoText}>{values && values.name}</Text>
        <Text style={styles.BookInfoText}>{values && values.author}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Book Name"}
          onChangeText={(value) => onChangeName(value)}
          value={values.name}
          style={styles.input}
        />
        <TextInput
          placeholder={"Book Author"}
          onChangeText={(value) => onChangeAuthor(value)}
          value={values.author}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={updateBook} style={styles.addButton}>
            <Text style={styles.buttonText}>{loading ? "Waiting" : "Edit Book Info"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteBook} style={styles.addButton}>
            <Text style={styles.buttonText}>{loading ? "Waiting..." : "Delete Book"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}