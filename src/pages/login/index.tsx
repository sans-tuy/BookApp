import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import Button from '../../component/button';
import HyperlinkText from '../../component/hyperlinkText';
import InputForm from '../../component/inputForm';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/loginImage.jpg')}
          />
        </View>
        <View>
          <InputForm isPass={false} hintInput="masukkan username" />
          <InputForm isPass={true} hintInput="masukkan password" />
          <Button title="login" />
        </View>
        <HyperlinkText text="Register" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
  },
  imageWrapper: {
    width: '100%',
    height: '35%',
    marginTop: '6%',
    marginBottom: '4%',
  },
});

export default Login;
