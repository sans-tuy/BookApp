import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const SplashScreen: React.VFC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Image
            style={styles.logo}
            source={require('../../assets/icon/logoApp.png')}
          />
          <Text style={styles.titleApp}>E-BOOK</Text>
        </View>
        <View style={styles.ownerWrapper}>
          <Text style={styles.text}>
            copyright by <Text style={styles.owner}>sans</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  owner: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 80,
    height: 80,
  },
  ownerWrapper: {
    marginBottom: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleApp: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default SplashScreen;
