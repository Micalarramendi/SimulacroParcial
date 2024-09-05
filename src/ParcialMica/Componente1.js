import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Componente1 = () => {
  const [nombre, setNombre] = useState('');  // Estado para capturar el texto ingresado
  const navigation = useNavigation();

  // Lista de opciones de navegación
  const options = [
    { key: '1', label: 'Props2', route: 'Props2' },
    { key: '2', label: 'Axios3', route: 'Axios3' },
    { key: '3', label: 'AsyncStorage4', route: 'AsyncStorage4' }
  ];

  // Función para enviar el texto ingresado a Props2
  const handleSend = () => {
    if (nombre) {
      navigation.navigate('Props2', { nombre, estado: false });
    } else {
      alert("Por favor, ingresa un nombre.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Pantalla Principal</Text>
      

      {/* Input para ingresar el texto */}
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Ingresa un texto"
        value={nombre}
        onChangeText={setNombre}  // Actualiza el estado cuando se ingresa texto
      />

      {/* Botón para enviar el texto a Props2 */}
      <Button title="Enviar" onPress={handleSend} />

      {/* Lista de otras opciones de navegación */}
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.route, { nombre, estado: false })}
          >
            <Text style={{ padding: 10, fontSize: 18 }}>{item.label}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Componente1;
