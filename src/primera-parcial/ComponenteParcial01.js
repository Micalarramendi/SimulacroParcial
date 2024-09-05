import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComponenteParcial01 = () => {
  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState('');
  const navigation = useNavigation();

 
  const options = [
    { key: '1', label: 'PropsParcial02', route: 'PropsParcial02' },
    { key: '2', label: 'AxiosParcial03', route: 'AxiosParcial03' },
    { key: '3', label: 'AsyncStorageParcial04', route: 'AsyncStorageParcial04' }
  ];

 
  const handleNavigateProps = () => {
    navigation.navigate('PropsParcial02', { materia, nota });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre de materia"
        value={materia}
        onChangeText={setMateria}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ingresar nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric" 
      />

      <TouchableOpacity onPress={handleNavigateProps} style={styles.button}>
        <Text style={styles.buttonText}>Enviar a PropsParcial02</Text>
      </TouchableOpacity>

      <FlatList
        data={options}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.route, { materia, nota })}
            style={styles.listItem}
          >
            <Text style={styles.listItemText}>{item.label}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ComponenteParcial01;
