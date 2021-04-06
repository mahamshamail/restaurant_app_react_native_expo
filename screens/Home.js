import React, {
    useEffect,
    useState
} from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import {
    icons,
    images,
    SIZES,
    COLORS,
    FONTS
} from '../constants'

const Home = ({ navigation }) => {
    //var menuDataFromApi = [];
    const [menuDataFromApi, setmenuDataFromApi] = useState([]);
    const [menuCat, setMenuCat] = useState([]);
    const [menuCatImg, setMenuCatImg] = useState([]);

    const apiData = () => {
        const url = 'https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json';
        return fetch(url)
            .then(response => response.json())
            .then(data => {

                setmenuDataFromApi(data);
            })
            .catch(err => console.log(err));
    }



    // const getCats = () => {
    //     var cat = []
    //     var j = 1;
    //     for (let i = 0; i < menuDataFromApi.length; i++) {
    //         if (!cat.includes(menuDataFromApi[i].Category)) {

    //             cat.push({
    //                 id: j,
    //                 category: menuDataFromApi[i].Category,
    //                 image: menuDataFromApi[i].Image
    //             }
    //             );
    //             j++;
    //         }
    //     }
    //     setMenuCat(cat);

    // }

    useEffect(() => {
        apiData();
        //console.log(menuDataFromApi[0]);
        //getCats();
    }
    );
    // Dummy Datas
    //save user location on user profile page and bring it here
    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }
    /*
    Meditterranean 
    Italian
    North American
    Indian
    Others
    Japanese
    Mexican
    Persian
    Middle eastern
    Hot Beverage
    Dessert
    Soup
    */
    //create filters according to our own categories

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Italian",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "  North\nAmerican",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Japanese",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "    Hot\nBeverage",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(menuDataFromApi)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = menuDataFromApi.filter(a => a.Category.includes(Category.id))

        setmenuDataFromApi(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    // function renderHeader() {
    //     return (
    //         <View style={{ flexDirection: 'row', height: 50 }}>
    //             <TouchableOpacity
    //                 style={{
    //                     width: 50,
    //                     paddingLeft: SIZES.padding * 2,
    //                     justifyContent: 'center'
    //                 }}
    //             >
    //                 <Image
    //                     source={icons.nearby}
    //                     resizeMode="contain"
    //                     style={{
    //                         width: 30,
    //                         height: 30
    //                     }}
    //                 />
    //             </TouchableOpacity>

    //             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //                 <View
    //                     style={{
    //                         width: '70%',
    //                         height: "100%",
    //                         backgroundColor: COLORS.lightGray3,
    //                         alignItems: 'center',
    //                         justifyContent: 'center',
    //                         borderRadius: SIZES.radius
    //                     }}
    //                 >
    //                     <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
    //                 </View>
    //             </View>

    //             <TouchableOpacity
    //                 style={{
    //                     width: 50,
    //                     paddingRight: SIZES.padding * 2,
    //                     justifyContent: 'center'
    //                 }}
    //             >
    //                 <Image
    //                     source={icons.basket}
    //                     resizeMode="contain"
    //                     style={{
    //                         width: 30,
    //                         height: 30
    //                     }}
    //                 />
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    // currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={{
                            uri: item.Image
                        }}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{"40-45 mins"}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.Title}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.Ratings}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        <View
                            style={{ flexDirection: 'row' }}
                        // key={categoryId}
                        >
                            <Text style={{ ...FONTS.body3 }}>{item.Category}</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                        </View>


                        {/* Price */}
                        {
                            [5, 15, 25].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.Price) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={menuDataFromApi}
                keyExtractor={item => `${item.Id}`}
                renderItem={renderItem
                }
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {// {renderHeader()}
                renderMainCategories()
            }
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home