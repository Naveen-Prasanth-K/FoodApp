import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import List from '../components/Meal Detail/List';
import Subtitle from '../components/Meal Detail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

export default function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={styles.scrollContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title} </Text>
            <View >
                <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            </View>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />

            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        marginBottom: 15,
    },

    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },

})