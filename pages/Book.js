import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { 
  SafeAreaView, 
  Text, 
  Button, 
  View, 
  TextInput 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../AppStyles";

function Book({ route }) {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    author: ""
  });

  const onChangeName = (value) => {
    setValues({ ...values, name: value });
  };

  const onChangeAuthor = (value) => {
    setValues({ ...values, author: value });
  };

  const getBook = async () => {
    try {
      await fetch(
        `https://crudbookapi.herokuapp.com/api/v1/books/`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setValues({
            name: data.name,
            author: data.author,
          });
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  const updateBook = async () => {
    try {
      await fetch(
        `https://crudbookapi.herokuapp.com/api/v1/books/`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      )
        .then((res) => {
          res.json();
          navigation.navigate("Book List");
        })
        .then((data) => console.log({ data }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async () => {
    try {
      await fetch(
        `https://crudbookapi.herokuapp.com/api/v1/books/`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      )
        .then((res) => {
          res.json();
          navigation.navigate("Book List");
        })
        .then((data) => console.log({ data }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Book List"
        onPress={() => navigation.navigate("Book List")}
      />
      <Text>Book</Text>
      <View>
        <TextInput
          placeholder={"Book Name"}
          onChangeText={(value) => onChangeName(value)}
          value={values.name}
        />
        <TextInput
          placeholder={"Book Author"}
          onChangeText={(value) => onChangeAuthor(value)}
          value={values.author}
        />
      </View>
      <TouchableOpacity onPress={updateBook} style={styles.addButton}>
        <Text style={styles.buttonText}>Edit Book</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteBook} style={styles.addButton}>
        <Text style={styles.buttonText}>Delete Book</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Book;