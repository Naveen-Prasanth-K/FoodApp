import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet } from 'react-native';

export default function IconButton({ pressing, icon, color }) {
    return (
        <Pressable onPress={pressing} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }

})