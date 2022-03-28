import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {BackSvg, LoveSvg, ShareSvg, StarSvg} from '../../assets/svgIcon';

const DetailScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <BackSvg width={30} height={30} />
          <View>
            <LoveSvg width={30} height={30} />
            <ShareSvg width={30} height={30} />
          </View>
          <View>
            <Image source={{uri: 'https://picsum.photos/500/800?random=1'}} />
            <View>
              <Text>Title</Text>
              <Text>Author</Text>
              <Text>Cover Image</Text>
              <Text>Publisher</Text>
            </View>
          </View>
          <View>
            <Text>Rating</Text>
            <View>
              <Text>6</Text>
              <Image source={require('../../assets/icon/')} />
            </View>
            <View>
              <Text>Total Sale</Text>
              <Text>652</Text>
            </View>
            <View>
              <Text>Buy</Text>
              <Text>RP. 630.000</Text>
            </View>
          </View>
          <Text>Overview</Text>
          <Text>Synopsis .................</Text>
          <StarSvg width={30} height={30} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default DetailScreen;
