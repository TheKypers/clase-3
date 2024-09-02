import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Contador = (props: Props) => {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(prev => prev + 1)
    }

    const decrementar = () => {
        setContador(prev => prev - 1)
    }

    const reset =() => {
      setContador(prev=> 0)
    }

    return (
        <View>
            <Text>Contador: {contador}</Text>
            <Button title='Incrementar' onPress={incrementar} />
            <Button title='Decrementar' onPress={decrementar} />
            <Button title='Reset' onPress={reset} />
            <Text>ACAAAAAAAAA</Text>
        </View>
    )
}


export default Contador 