import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Button from '../../component/button';

const RegisterComplete: React.VFC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Completed!</Text>
      <View style={styles.iconWrapper}>
        <Image
          source={require('../../assets/icon/checklist.png')}
          style={styles.icon}
        />
        <Text style={styles.subtitle}>
          We sent email verification to your email
        </Text>
      </View>
      <Button title="Back to Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: '10%',
  },
  icon: {
    width: '60%',
    height: '60%',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default RegisterComplete;
