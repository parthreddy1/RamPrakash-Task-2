import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, FlatList } from 'react-native';
import { height, width, customSize, showNotification } from "../Functions/funtions";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function LocationsScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        SetData()
    }, [])

    function SetData() {
        const listdata = [
            {
                id: 1,
                name: "Trident Beach",
                desc: "Madrid, Spain",
                source: require("../Images/1.jpg")
            },
            {
                id: 2,
                name: "Marina Beach",
                desc: "Chennai, India",
                source: require("../Images/2.jpg")
            },
            {
                id: 3,
                name: "Kadmat Islands",
                desc: "Lakshadweep, India",
                source: require("../Images/3.jpg")
            },
            {
                id: 4,
                name: "Cocoa Beach",
                desc: "Cocoa Island, Maldives",
                source: require("../Images/4.jpg")
            }
        ]
        const listdata1 = [
            {
                id: 1,
                name: "Hotel Rivs & amets",
                location: "London, England",
                cost: "$100/night",
                source: require("../Images/h1.jpg")
            },
            {
                id: 2,
                name: "Hotel Vivanta",
                location: "Delhi, India",
                cost: "$400/night",
                source: require("../Images/h2.jpg")
            },
            {
                id: 3,
                name: "Hotel Davis",
                location: "Bangkok, Thailand",
                cost: "$60/night",
                source: require("../Images/h3.jpg")
            },
            {
                id: 4,
                name: "Hotel Luxor & Casino",
                location: "Las Vegas, USA",
                cost: "$200/night",
                source: require("../Images/h4.jpg")
            },

        ]
        setData(listdata)
        setData1(listdata1)
        setLoading(false)
    }
    function renderItemBeach({ item }) {

        return (
            <View style={{ marginHorizontal: customSize(10) }}>
                <Image
                    style={{
                        height: width / 1.5,
                        width: width / 2.2,
                        resizeMode: 'cover',
                        borderRadius: 8,
                        overflow: "hidden"
                    }}
                    source={item.source} />
                <View style={{ marginTop: customSize(10) }}>
                    <Text style={{ fontSize: customSize(16), color: "#b8b8b8" }}>
                        {item.name}
                    </Text>
                    <Text style={{ fontSize: customSize(14), color: "#5d666a" }}>
                        {item.desc}
                    </Text>
                </View>

            </View>

        )
    }
    function renderItemHotels({ item }) {

        return (
            <View style={{ marginVertical: customSize(10), flexDirection: "row" }}>
                <Image
                    style={{
                        height: width / 4,
                        width: width / 4,
                        resizeMode: 'cover',
                        borderRadius: 8,
                        overflow: "hidden"
                    }}
                    source={item.source} />
                <View style={{ marginTop: customSize(7.5), marginLeft: customSize(20) }}>
                    <Text style={{ fontSize: customSize(18), color: "#afafaf" }}>
                        {item.name}
                    </Text>
                    <View style={{
                        flexDirection: "row", alignItems: "center", marginLeft: customSize(2), marginTop: customSize(4)
                    }}>
                        <MaterialIcons
                            size={customSize(16)}
                            color="#5a5e62"
                            name="location-on"
                        />
                        <Text style={{ fontSize: customSize(14), color: "#5a5e62", marginLeft: customSize(5) }}>
                            {item.location}
                        </Text>
                    </View>
                    <Text style={{ fontSize: customSize(16), color: "#afafaf", marginTop: customSize(8) }}>
                        {item.cost}
                    </Text>
                </View>

            </View>

        )
    }


    return (
        loading ?
            <View style={{ flex: 1, backgroundColor: "#000000", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={"large"} color={"#00d6ef"} />
            </View> :

            <View style={{ flex: 1, backgroundColor: "#000000" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "4%" }}>
                    <MaterialCommunityIcons
                        size={customSize(30)}
                        color="#bebebe"
                        name="menu"
                        style={{ marginLeft: "5%" }}
                    />
                    <MaterialIcons
                        size={customSize(30)}
                        color="#bebebe"
                        name="notifications"
                        style={{ marginRight: "5%" }}
                    />
                </View>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: "4%" }}>
                    <Text style={{ color: "#dddddd", fontSize: customSize(25), marginTop: "10%", marginLeft: "4%" }}>
                        Where are you{"\n"}going?
                </Text>
                    <View style={{
                        flexDirection: "row", backgroundColor: "#e7ebee",
                        width: width - 20, paddingTop: "3%", paddingBottom: "3%", padding: "2%", alignItems: "center",
                        alignSelf: "center", marginTop: "8%", borderRadius: 5
                    }}>
                        <MaterialIcons
                            size={customSize(30)}
                            color="#81949b"
                            name="location-on"
                        />
                        <Text style={{ fontSize: customSize(14), color: "#81949b", marginLeft: "2%" }}>
                            E.g: New York, United States
                    </Text>
                    </View>

                    <FlatList
                        data={data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={(item) => (
                            renderItemBeach(item)
                        )}
                        keyExtractor={item => item.id.toString()}
                        style={{ marginTop: "8%" }}

                    />
                    <ScrollView horizontal={true}>
                        <FlatList
                            data={data1}

                            showsHorizontalScrollIndicator={false}
                            renderItem={(item) => (
                                renderItemHotels(item)
                            )}
                            keyExtractor={item => item.id.toString()}
                            style={{ marginTop: "4%", marginLeft: customSize(10) }}

                        />
                    </ScrollView>
                </ScrollView>
            </View>

    );
}