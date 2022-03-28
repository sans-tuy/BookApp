import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
};

const Button = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    elevation: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Button;
