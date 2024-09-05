import React from 'react';
import { View, Text } from 'react-native';

const UserDetails = ({ route }) => {
  // Asegurarse de que route.params exista, y asignar valores predeterminados si no.
  const { username = 'Micaela', status = false } = route.params || {};

  return (
    <View style={{ padding: 20 }}>
      <Text>Username: {username}</Text>
      <Text>Status: {status.toString()}</Text>
    </View>
  );
};

export default UserDetails;
