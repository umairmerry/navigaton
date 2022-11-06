import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}