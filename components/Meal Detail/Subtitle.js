import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Subtitle({ children }) {
    return (
        <View>
            <Text style={styles.titletext}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titletext: {
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 150,
        padding: 5,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'darkgrey',
        borderRadius: 10,
    },


})