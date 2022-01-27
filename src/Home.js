import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import categorydata from '../assets/data/Categorydata';
import populardata from "../assets/data/Papulardata"

const Home = () => {
  const [category, setcategory] = React.useState(categorydata)
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItemBox, { backgroundColor: item.selected ? colors.primary : colors.background, }]}
    // onPress={()=>setcategory({...category, selected:true})}
    >
      <Image
        source={item.Image}
        style={{ width: 70, height: 70, }}
        resizeMode='contain' />
      <Text
        style={{
          fontSize: 17,
          fontFamily: "Montserrat-SemiBold",
          color: colors.textDark,
          marginVertical: 15
        }}>
        {item.title}
      </Text>
      <MaterialIcons
        name="navigate-next"
        size={25}
        color={item.selected ? colors.textDark : colors.background}
        style={{
          backgroundColor: item.selected ? colors.background : colors.secondary,
          padding: 5,
          borderRadius: 50
        }}
      />
    </TouchableOpacity>
  )

  const renderpopular = ({ item }) => (
    <View style={{flexDirection:"row" ,width:"100%" ,height:200 ,borderRadius:20}}>
      <View>
        <View style={{flexDirection:"row"}}>
          <MaterialCommunityIcons
            name="crown"
            size={25}
            color={colors.primary}
          />
          <Text>top of the week</Text>
        </View>
        <Text>{item.title}</Text>
        <Text>weight : {item.weight}</Text>
        <View style={{position:'absolute', bottom:0, left:0, flexDirection:"row"}}>
        <MaterialIcons name="add" size={30} color={colors.background} style={{ paddingHorizontal: 30, backgroundColor:colors.primary ,paddingVertical:10 }} />
        <View>
        <Entypo name="star" size={30} color={colors.textDark} style={{ paddingHorizontal: 5 }} />
        <Text>{item.rating}</Text>
        </View>
        </View>

      </View>
      <View style={{position:"absolute" , right:-110}}>
        <Image source={item.image} style={{ width: 320, height: 200,}} />
      </View>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={"#fff"} barStyle={"dark-content"} />
      {/* header  */}
      <View style={styles.header}>
        <Image source={require("../assets/images/profile.png")} style={styles.profile} resizeMode='contain' />
        <Feather name="menu" size={25} color={colors.textDark} />
      </View>
      {/* title */}
      <View style={styles.title}>
        <Text style={styles.food}>Food</Text>
        <Text style={styles.delivery}>Delivery</Text>
      </View>
      {/* search */}
      <View style={styles.search}>
        <MaterialIcons name="search" size={30} color={colors.textDark} style={{ paddingHorizontal: 5 }} />
        <TextInput placeholder='Search...' style={styles.input} />
      </View>
      {/* category */}
      <View style={styles.categoryContainer}>
        <Text style={styles.mainTitles}>Category</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={category}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
        />
      </View>
      {/* popular */}
      <View style={styles.popularContainer}>
        <Text style={styles.mainTitles}> Popular </Text>
        <FlatList
          data={populardata}
          renderItem={renderpopular}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
    alignItems: "center",
    paddingVertical: 5
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  title: {
    marginTop: 15
  },
  food: {
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
    color: colors.textDark
  },
  delivery: {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    color: colors.textDark
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,

  },
  input: {
    flex: 1,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 3,
    paddingLeft: 10,
    height: 40
  },
  categoryContainer: {
    marginTop: 20,
  },
  mainTitles: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: colors.secondary
  },
  categoryItemBox: {
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 20,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,

  },
  popularContainer: {
    marginTop: 10
  },

});

