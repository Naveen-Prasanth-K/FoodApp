import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';



export default function CatagoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverView', {
                categoryId: itemData.item.id,
            });
        }
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} pressing={pressHandler} />
        );
    }
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />
    )
}


const styles = StyleSheet.create({}) 