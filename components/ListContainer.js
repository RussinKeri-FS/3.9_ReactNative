import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../AppStyles";

export default function ListContainer() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    setLoading(true);
    try {
      await fetch(
        `https://crudbookapi.herokuapp.com/api/v1/books`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setBooks(data);
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
      getBooks();
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.book}
          onPress={() => navigation.push("Book")}
        >
          <Text style={styles.bookName}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item._id}
    />
  );
}