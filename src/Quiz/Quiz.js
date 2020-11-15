import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const Quiz = ({ navigation }) => {
    return (
        <View>
            <Text>I'm quiz view</Text>
            <Button
                title="Go back to default"
                onPress={() =>
                    navigation.navigate('DefaultWelcome')
                }
            />
        </View>
    )
}

export default Quiz;