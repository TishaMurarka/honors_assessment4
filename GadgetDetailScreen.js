import React from 'react';
import { View, Text } from 'react-native';

const GadgetDetailScreen = ({ route }) => {
  const { name, type, price } = route.params.gadget;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name: {name}</Text>
      <Text>Type: {type}</Text>
      <Text>Price: ${price}</Text>
    </View>
  );
};

export default GadgetDetailScreen;