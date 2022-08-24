import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ebebeb",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  pageName: {
    fontSize: 36,
    color: "#000",
  },
  button: {
    padding: 10,
    backgroundColor: "#273A53",
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
  },
  book: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  bookInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 15,
  },
  bookInfoText: {
    fontSize: 18,
  },
  bookTitle: {
    textAlign: "center",
    color: "#343434",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D1D5DE",
    padding: 10,
    marginBottom: 20,
    width: "80%",
    borderRadius: 10,
  },
  input: {
    textAlign: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "#343434",
    borderRadius: 5,
    padding: 10,
    marginVertical: 15,
    width: "100%",
  },
  addButton: {
    padding: 10,
    backgroundColor: "#273A53",
    borderRadius: 5,
    margin: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;