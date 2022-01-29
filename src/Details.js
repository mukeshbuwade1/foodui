import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const images = [
    { image: require("../assets/images/ham.png") },
    { image: require("../assets/images/tomato.png") },
    { image: require("../assets/images/garlic.png") },
    { image: require("../assets/images/cheese.png") },
]
const Details = ({ navigation, route }) => {
    // console.log("parms", route.params)
    const { item } = route.params
    const { id, image, rating, title, weight, } = item;

    const render = ({ item, i }) => (
        <Image source={item.image} style={{ width: 100, height: i = 0 ? 100 : 75, marginLeft: 20 }} resizeMode='contain' />
    )
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={[styles.iconContainer, { borderColor: colors.textLight, }]}
                        onPress={() => navigation.pop()}>
                        <Ionicons name="chevron-back" size={20} color={colors.textDark} />
                    </TouchableOpacity>
                    <View style={[styles.iconContainer, { borderColor: colors.primary, backgroundColor: colors.primary }]}>
                        <Entypo name="star" size={20} color={colors.background} style={{ paddingHorizontal: 5 }} />
                    </View>
                </View>
                <Text style={[styles.title, { color: colors.textDark }]}>{title}</Text>
                <Text style={[styles.title, { color: colors.price }]}>$ 5.99</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{}}>
                        <View>
                            <Text style={styles.key}>Size</Text>
                            <Text style={styles.value}>Medium 14"</Text>
                        </View>
                        <View>
                            <Text style={styles.key}>Crust</Text>
                            <Text style={styles.value}>Thin Crust 14"</Text>
                        </View>
                        <View>
                            <Text style={styles.key}>Deliver in</Text>
                            <Text style={styles.value}>30 min"</Text>
                        </View>
                    </View>
                    <Image source={image} style={{ width: 300, height: 200, right: -20, }} resizeMode='contain' />
                </View>
                <View style={{ marginTop: 10, marginBottom: 30 }}>
                    <Text style={[styles.ingredient]}>Ingredient</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={images}
                        keyExtractor={item => item.id}
                        renderItem={render}
                    />
                </View>
            </ScrollView>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colors.primary,
                    height: 70,
                    borderRadius: 50,
                    bottom: 20
                }}>
                <Text style={[styles.buttonText]}>Place an Order</Text>
                <Entypo name="chevron-right" size={25} color={colors.textDark} />
            </View>
        </SafeAreaView>
    );
};
export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 15,
        marginTop: 15
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontFamily: "Montserrat-Bold",
        color: colors.textDark,
        width: 250,
        marginTop: 20
    },
    key: {
        fontSize: 14,
        fontFamily: "Montserrat-Medium",
        color: colors.textLight,
        marginTop: 10
    },
    value: {
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold",
        color: colors.textDark,
        marginVertical: 2
    },
    ingredient: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: colors.textDark,
        marginVertical: 2
    },
    buttonText: {
        fontSize: 17,
        fontFamily: "Montserrat-Bold",
        color: colors.textDark,
        marginRight: 5
    }
});
