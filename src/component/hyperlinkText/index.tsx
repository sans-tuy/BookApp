import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';

type props = {
  text: string;
};

const HyperlinkText = ({text}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Dont have an account ?</Text>
      <Pressable>
        <Text style={styles.hyperlink}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text1: {
    color: 'grey',
  },
  text2: {
    color: 'black',
  },
  hyperlink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default HyperlinkText;
