import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  // Cargar los datos desde AsyncStorage
  const loadItems = async () => {
    const storedItems = await AsyncStorage.getItem('items');
    if (storedItems) setItems(JSON.parse(storedItems));
  };

  // Crear o Actualizar un ítem
  const storeItem = async () => {
    if (editingItemId) {
      // Actualizar ítem
      const updatedItems = items.map(item => 
        item.id === editingItemId ? { id: item.id, codigo, carrera, materia } : item
      );
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
      setEditingItemId(null); // Limpiar el estado de edición
    } else {
      // Crear nuevo ítem
      const newItem = { id: Date.now().toString(), codigo, carrera, materia };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
    }
    clearInputs();
  };

  // Limpiar los inputs después de crear o actualizar
  const clearInputs = () => {
    setCodigo('');
    setCarrera('');
    setMateria('');
  };

  // Eliminar un ítem
  const deleteItem = async (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
  };

  // Editar un ítem (cargar datos en los inputs)
  const editItem = (item) => {
    setCodigo(item.codigo);
    setCarrera(item.carrera);
    setMateria(item.materia);
    setEditingItemId(item.id); // Guardar el ID del ítem que se está editando
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <TextInput
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
        style={styles.input}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={styles.input}
      />
      
      <Button
        title={editingItemId ? "Actualizar" : "Crear"}
        onPress={storeItem}
        color={editingItemId ? 'blue' : 'green'} // Cambia el color del botón según el estado (Crear o Actualizar)
      />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.codigo} - {item.carrera} - {item.materia}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => editItem(item)} style={styles.editButton}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  item: {
    padding: 10,
    backgroundColor: 'lightgray',
    marginBottom: 5,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AsyncStorageParcial04;
