import React, {VFC} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {BackSvg} from '../../assets/svgIcon';
import Button from '../../component/button';
import HyperlinkText from '../../component/hyperlinkText';
import InputForm from '../../component/inputForm';

const Register: VFC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackSvg width={30} height={30} />
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/loginImage.jpg')}
          />
        </View>
        <View>
          <InputForm isPass={false} hintInput="masukkan username" />
          <InputForm isPass={false} hintInput="masukkan email" />
          <InputForm isPass={true} hintInput="masukkan password" />
          <Button title="Register" />
        </View>
        <HyperlinkText text="Login" />
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

export default Register;
