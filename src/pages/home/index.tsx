import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import CardImage from '../../component/cardImage';
import CardImage2 from '../../component/cardImage2';

const Home: React.VFC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Good morning, Aldi!</Text>
        <Text>Recommended</Text>
        <View>
          <CardImage2
            judulBuku="buku1"
            image={'https://picsum.photos/500/800?random=1'}
          />
        </View>
        <Text>Popular Book</Text>
        <ScrollView>
          <View style={styles.cardWrapper}>
            <CardImage
              judulBuku="buku1"
              image={'https://picsum.photos/500/800?random=2'}
            />
            <CardImage
              judulBuku="buku1"
              image={'https://picsum.photos/500/800?random=2'}
            />
            <CardImage
              judulBuku="buku1"
              image={'https://picsum.photos/500/800?random=2'}
            />
            <CardImage
              judulBuku="buku1"
              image={'https://picsum.photos/500/800?random=2'}
            />
            <CardImage
              judulBuku="buku1"
              image={'https://picsum.photos/500/800?random=2'}
            />
            <CardImage
              judulBuku="buku1"
              image={'https://picsum.photos/500/800?random=2'}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  cardWrapper: {
    flexWrap: 'wrap',
  },
});

export default Home;
