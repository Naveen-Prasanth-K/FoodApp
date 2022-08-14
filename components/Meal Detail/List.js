import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function List({ data }) {
    return (
        <View style={styles.steps}>
            {data.map((dataPoint) => (
                <Text style={styles.stepText} key={dataPoint}>{dataPoint} </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    steps: {
        marginTop: 10,
        paddingLeft: 20,
        padding: 20,
    },

    stepText: {
        margin: 5,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 30,
    },
})