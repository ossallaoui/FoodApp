import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import PopularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { Colors } from 'react-native/Libraries/NewAppScreen';


    

export default Home = ({ navigation }) => {

    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoryItemWrapper, {
                backgroundColor: item.selected ? colors.primary : Colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
            },
        ]} >
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}> {item.title} </Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                    borderRadius: 10,
                },]}>
                    <Feather name='chevron-right' size={8} style={styles.categorySelectIcon}
                        color={item.selected ? colors.black : colors.white} />
                </View>
            </View>
        )
    }
    
    const [fontsLoaded] = useFonts({
        Regular1: require("../assets/fonts/Montserrat-Regular.ttf"),
        bold1: require("../assets/fonts/Montserrat-Bold.ttf"),
        Semibold1: require("../assets/fonts/Montserrat-SemiBold.ttf"),
        Medium1: require("../assets/fonts/Montserrat-Medium.ttf"),
    });

    if (!fontsLoaded) return null;
    
    return (
        
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
                    <Feather name='menu' size={24} color={colors.textDark} />
                </View>
            </SafeAreaView>
            {/* title */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delievry</Text>
            </View>
            
            {/* search */}
            <View style={styles.searchWrapper}>
                <Feather name='search' size={16} color={colors.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>
            <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
            {/* categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle} >Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList 
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal = {true}
                    />
                </View>
            </View>
            {/* Popular */}
            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {
                    PopularData.map((item) => (
                        <TouchableOpacity  key={item.id} onPress={() => navigation.navigate('Details', {item: item,} )}>
                        <View style={[styles.popularCardWrapper, 
                            {
                                marginTop: item.id == 1 ? 10 : 20,
                            }
                            ]}>
                        
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons name='crown' size={12} color={colors.primary}/>
                                            <Text style={styles.popularTopText} >top of</Text>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                            <Text style={styles.popularTitlesWeight}>weight {item.weight} </Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardbottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather name='plus' size={10} color={colors.textDark} />                                   
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons name='star' size={10} color={colors.textDark} /> 
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>           
                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardimage}/>
                                </View>                         
                            
                        </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal:20,
    },
    titlesSubtitle: {
        fontFamily: "Regular1",
        fontSize: 16,
        color: colors.textDark,
    },
    titlesTitle: {
        fontFamily: "bold1",
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop:30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: "Semibold1",
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: "bold1",
        fontSize: 16,
        paddingHorizontal:20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom:20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight:20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign:'center',
        fontFamily: 'Medium1',
        fontSize: 14,
        marginTop: 10,

    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 10,
        marginBottom: 20,

    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
    popularWrapper:{
        paddingHorizontal: 20,
    },
    popularTitle:{
        fontFamily: 'bold1',
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: "Semibold1",
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop:20,

    },
    popularTitlesTitle: {
        fontFamily: "Semibold1",
        fontSize: 14,
        color: colors.textDark,
    },
    popularTitlesWeight: {
        fontFamily: "Medium1",
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardbottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Semibold1',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,
    },
    popularCardimage: {
        width: 210,
        height: 125,
        resizeMode: "contain",
    },
    popularCardRight: {
        marginLeft: 40,
    },
})


