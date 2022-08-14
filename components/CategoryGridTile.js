import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CategoryGridTile({ title, color, pressing }) {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable style={styles.button} android_ripple={{ color: '#ccc' }} onPress={pressing}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}> {title} </Text>
                </View>
            </Pressable>
        </View >
    );

}


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 5,
        overflow: 'hidden',
    },
    button: {
        flex: 1
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }


})