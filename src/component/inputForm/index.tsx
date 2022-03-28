import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type props = {
  hintInput: string;
  isPass: boolean;
};

const InputForm = ({hintInput, isPass}: props) => {
  return (
    <>
      <TextInput
        secureTextEntry={isPass}
        style={styles.container}
        placeholder={hintInput}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default InputForm;
