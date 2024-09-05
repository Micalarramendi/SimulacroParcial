import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Axios3 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // Realizar la petición GET usando axios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false); // Indicar que ya no está cargando
      })
      .catch(error => {
        setError('Error al cargar los datos'); // Mensaje de error
        setLoading(false);
      });
  }, []);

  if (loading) {
    // Mostrar un indicador de carga mientras se cargan los datos
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  if (error) {
    // Mostrar el mensaje de error en caso de fallo
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, backgroundColor: 'lightgray', marginBottom: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontSize: 16 }}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Axios3;
