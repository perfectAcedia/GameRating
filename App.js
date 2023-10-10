import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const clickHandler = () => {
    if ((!name || name !== inputName) && inputName) {
      setName(inputName);
      setInputName('');
    }
    
    if ((!age || age !== inputAge) && inputAge) {
      setAge(inputAge);
      setInputAge('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={inputName}
        onChangeText={(val) => setInputName(val)}
      />

      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your age"
        value={inputAge}
        onChangeText={(val) => setInputAge(val)}
      />
      <Text style={styles.boldText}>
        My name is {name}, i'm {age} years old
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Save your info" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
