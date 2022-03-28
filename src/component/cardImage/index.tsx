import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

type props = {
  image: string;
  judulBuku: string;
};

const CardImage = ({image, judulBuku}: props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.judulBuku}>{judulBuku}</Text>
      <Text style={styles.author}>Author Buku</Text>
      <Text>Publisher Buku</Text>
      <Text>Rating Buku</Text>
      <Text>Harga Buku</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // marginRight: 10,
  },
  image: {
    width: 120,
    height: 160,
  },
  judulBuku: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  author: {
    fontSize: 14,
  },
});

export default CardImage;
