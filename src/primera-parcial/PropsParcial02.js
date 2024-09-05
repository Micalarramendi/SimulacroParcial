import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  const { materia, nota } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>En la materia: {materia}, recibí la siguiente nota: {nota}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PropsParcial02;
