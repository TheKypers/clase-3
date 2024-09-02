import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type Props = {
    text: string;
    id: number;
  };
  
  const Card = ({ text, id}: Props) => {
    const number = id

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
      style={[
            stylesCard.card,
            {
            backgroundColor: isPressed ? '#333' : '#7f7f7f',
            },
        ]}
        onPress={handlePress}
    >
        <Text style = {stylesCard.cardText}>
            {text}
        </Text>
    </TouchableOpacity>
  );
};

const App = () => {
    const cardData = ["Tarjeta 1", "Tarjeta 2", "Tarjeta 3"];
  
    return (
    <View style={stylesIndex.container}>
        {cardData.map((text,index) => (
            <Card id={index} text={text} />
        ))}
        </View>
    );
  };
  
  const stylesCard = StyleSheet.create({
    card: {
        width: '100%',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffff'
    },
  });

  const stylesIndex = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });
  
export default App;