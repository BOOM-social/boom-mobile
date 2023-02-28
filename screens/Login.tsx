import React from 'react';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import ConnectButton from '../components/buttons/ConnectButton';

export default function Login() {
  const nav = useNavigation<BottomTabNavigationProp<ParamListBase, 'Login'>>();

  return (
    <View style={styles.container}>
      <Text>Login page</Text>
      {/* <Button title="Connect wallet (login)" onPress={() => toggleLogin()} /> */}
      <Button title="Sign up" onPress={() => nav.navigate('Signup')} />
      <ConnectButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
