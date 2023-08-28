import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style';
import { COLORS, SIZES } from '../constants';
import { Ionicons, Fontisto, Feather } from "@expo/vector-icons";

const Search = () => {
  return (
    <SafeAreaView>
     <View style={styles.searchContainer}>
        <TouchableOpacity>
        <Ionicons 
        name="camera-outline" 
        size={SIZES.xLarge} 
        style={styles.searchIcon}
        />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput}
            onPressIn={()=> {}}
            placeholder='What are you looking for ?'
            />
        </View>
        <View>
        <TouchableOpacity  style={styles.searchBtn}>
            <Feather 
            name="search" 
            size={24} color={COLORS.offwhite} 
            />
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Search