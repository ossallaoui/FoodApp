import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import PopularData from '../assets/data/popularData';
import { useFonts } from 'expo-font';

export default Details = ({ route, navigation }) => {
    const { item } = route.params;
    const [fontsLoaded] = useFonts({
        Regular1: require("../assets/fonts/Montserrat-Regular.ttf"),
        bold1: require("../assets/fonts/Montserrat-Bold.ttf"),
        Semibold1: require("../assets/fonts/Montserrat-SemiBold.ttf"),
        Medium1: require("../assets/fonts/Montserrat-Medium.ttf"),
    });

    if (!fontsLoaded) return null;

    const renderIngredients = ({ item }) => {
        return (
            <View style={styles.ingredientsList}>
                <Image source={item.image}style={styles.ingredientsimage}></Image>
            </View>
        )
    }
    return(
        
        <View>
            <View style={styles.Container}>
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.headerLeft}>
                                {<Feather name='chevron-left' size={8} color={colors.textDark} />}
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerRight}>
                            {<MaterialCommunityIcons name='star' size={12} color={colors.white} />}
                        </View>
                    </View>

                </SafeAreaView>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{ item.title }</Text>
                    <Text style={styles.price}>${ item.price }</Text>
                </View>
                <View style={ styles.detailsWrapper}>
                    <View style={ styles.detailsWrapper1}>
                        <Text style={ styles.titleDetails}>Size</Text>
                        <Text style={ styles.textDetails}>{ item.sizeName } { item.sizeNumber }"</Text>
                        <Text style={ styles.titleDetails}>Crust</Text>
                        <Text style={ styles.textDetails}>{ item.crust }</Text>
                        <Text style={ styles.titleDetails}>Delievry in</Text>
                        <Text style={ styles.textDetails}>{ item.deliveryTime } min</Text>
                    </View>
                    <View style={ styles.detailsWrapper2}>
                        <Image source={item.image} style={styles.ItemImage}/>
                    </View>
                </View>
                <View style={styles.ingredients}>
                    <Text style={styles.ingredientsTitle}>Ingredients</Text>
                    <FlatList 
                            data={item.ingredients}
                            renderItem={renderIngredients}
                            keyExtractor={item => item.id}
                            horizontal = {true}
                        />
                </View>

                <TouchableOpacity style={styles.buttonPlace}>
                    <Text style={styles.textPlace}>Place an order </Text>
                    {<Feather name='chevron-right' size={18} color={colors.black} />}
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius:10,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    titlesWrapper:{
        marginTop: 30,
        marginLeft: 20,

    },
    title: {
        fontFamily: 'bold1',
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 40,
    },
    price: {
        fontFamily: 'bold1',
        fontWeight: '700',
        fontSize: 32,
        color: colors.secondary,
        marginTop: 20,
    },
    detailsWrapper: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 30,
    },
    titleDetails: {
        fontFamily: "Regular1",
        fontSize: 14,
        color: colors.textLight,
        marginBottom: 5,
    },
    textDetails: {
        fontFamily: "bold1",
        fontSize: 16,
        marginBottom: 20,
    },
    detailsWrapper1: {
        marginRight: 36,
    },
    ingredients: {
        marginTop: 60,
        marginLeft: 20,
    },
    ingredientsTitle: {
        fontFamily: 'bold1',
        fontSize: 16,
    },
    ingredientsList: {
        width: 100,
        height: 80,
        borderRadius: 15,
        marginRight:20,
        marginTop: 19,
        backgroundColor: colors.background,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ingredientsimage: {
        
        width: 80,
        height: 55,

    },
    buttonPlace: {
        paddingVertical: 25,
        backgroundColor: colors.primary,
        marginTop: 60,
        marginHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPlace: {
        fontFamily: 'bold1',
        fontSize: 14,
        marginRight: 10,

    },
})