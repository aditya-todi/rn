import React from 'react';
import { Text, View, Button } from 'react-native';

const Medicine = props => {
    return (
        <View>
            {Object.keys(props.medicine).map((key, index) => {
                return (
                    <Text key={index}>{props.medicine[key]}</Text>
                )
            })}
            <Button title="delete" onPress={() => props.deleteMedicine(props.medicine._id)}>DELETE</Button>
        </View>
    )
}

export default Medicine