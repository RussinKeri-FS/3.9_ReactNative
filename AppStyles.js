import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    pageName: {
        fontSize: 30,
        color: '#343434',
    },
    button: {
        padding: 10,
        backgroundColor: '#273A53',
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
    },
    book: {
        padding: 10,
        backgroundColor: '#EBEBEB',
        borderRadius: 5,
        marginVertical: 5,
    },
    bookTitle: {
        textAlign: 'center',
        color: '#fff',
    },
    inputContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EBEBEB",
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
        marginVertical: 10,
      },
    });

  export default styles;