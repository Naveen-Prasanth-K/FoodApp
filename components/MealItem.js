import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MealDetails from '../components/MealDetails';

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: 'black' }} onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View >
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    mealItem: {
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
    },


})