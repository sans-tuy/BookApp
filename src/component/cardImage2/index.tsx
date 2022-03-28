import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

type props = {
  image: string;
  judulBuku: string;
};

const CardImage2 = ({image, judulBuku}: props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text>{judulBuku}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: 120,
    height: 160,
  },
});

export default CardImage2;
