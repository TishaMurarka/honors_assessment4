import React from 'react';
import { View, Text, FlatList } from 'react-native';

const GadgetsScreen = ({ navigation }) => {
  const gadgets = [
    { id: 1, name: 'Smart bulb', type: 'lighting', price: 999 },
    { id: 2, name: 'Smart Thermostat', brand: 'temperature', price: 1499 },
    { id: 3, name: 'Smart Lock', brand: 'security', price: 199 }
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={gadgets}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default GadgetsScreen;