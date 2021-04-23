import React from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
import { height, width, customSize, showNotification } from "../Functions/funtions";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import ProgressCircle from 'react-native-progress-circle'
export default function HomeScreen({ navigation }) {

    function RenderIcon(props) {
        return (
            <View style={[{
                backgroundColor: props.color, width: props.size, height: props.size,
                borderRadius: 2 * props.size, justifyContent: "center", alignItems: "center"
            }, props.customStyle]}>
                <Feather
                    size={props.vectorIconSize}
                    color="#ffffff"
                    name={props.iconName}

                />
            </View>
        )
    }
    function RenderTasks(props) {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: "4.8%", marginVertical: "2%" }}>
                <RenderIcon
                    iconName={props.iconName}
                    color={props.iconColor}
                    vectorIconSize={props.vectorIconSize}
                    size={props.iconSize}
                    customStyle={{ marginRight: "6%", marginTop: "1%" }}
                />
                <View>
                    <Text style={{ fontSize: customSize(16), fontWeight: "bold" }}>
                        {props.title}
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "#707070", fontSize: customSize(12) }}>
                            {props.taskCountText}
                        </Text>
                        <View
                            style={{ width: 5, height: 5, borderRadius: 5 / 2, backgroundColor: "#707070", margin: "2%", marginTop: "3%" }}
                        />
                        <Text style={{ color: "#707070", fontSize: customSize(12) }}>
                            {props.statusText}
                        </Text>

                    </View>
                </View>
            </View>
        )
    }
    function RenderCards(props) {

        return (
            <View style={{ flexDirection: "column", width: width / 2.4, height: height / 3.8, borderRadius: 45, backgroundColor: props.color }}>
                <View style={{ flex: 2.35 }}>
                    <ProgressCircle
                        percent={parseInt(props.percent)}
                        radius={50}
                        borderWidth={8}
                        color="#f1feeb"
                        shadowColor={props.shadowColor}
                        bgColor={props.color}

                        outerCircleStyle={{ marginLeft: "12%", marginTop: "15%" }}
                    >
                        <Text style={{ fontSize: customSize(18), color: "#ffffff", fontWeight: "bold" }}>{props.percent}%</Text>
                    </ProgressCircle>
                </View>
                <View style={{ flex: 1, marginLeft: "14%" }} >
                    <Text style={{ fontSize: customSize(16), fontWeight: "bold", color: "#ffffff" }}>
                        {props.title}
                    </Text>

                    <Text style={{ color: "#f0f0f0", fontSize: customSize(12) }}>
                        {props.text}
                    </Text>
                </View>
            </View>

        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff9eb" }}>
            <View style={{
                backgroundColor: "#f9be7c", borderTopLeftRadius: 15,
                borderTopRightRadius: 15, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
                paddingBottom: "15%"
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "4%" }}>
                    <MaterialCommunityIcons
                        size={customSize(30)}
                        color="#000000"
                        name="menu"
                        style={{ marginLeft: "5%" }}
                    />
                    <MaterialIcons
                        size={customSize(30)}
                        color="#000000"
                        name="search"
                        style={{ marginRight: "5%" }}
                    />

                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "5%" }}>
                    <View style={{
                        marginLeft: "-6%",
                        borderWidth: 5.5,
                        borderRadius: 2 * width / 4,
                        borderBottomColor: '#e16671',
                        borderEndColor: "#e46471",
                        borderTopColor: 'transparent',
                        padding: "2%",
                        transform: [{ rotateZ: '-45deg' }]
                    }}>
                        <Image

                            source={require("../Images/avatar.jpg")}
                            style={{
                                height: width / 4, width: width / 4, borderRadius: 2 * width / 4, resizeMode: "contain",
                                transform: [{ rotateZ: '45deg' }]
                            }}
                        />
                    </View>
                    <View style={{ alignSelf: "center", marginLeft: "-20%" }}>
                        <Text style={{ fontSize: customSize(24), fontWeight: "bold" }}>
                            Philip Macoy
                        </Text>
                        <Text style={{ fontSize: customSize(16) }}>
                            Project Manager
                        </Text>
                    </View>
                </View>

            </View>

            <ScrollView style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: "4%" }}
            >
                <View style={{ flexDirection: "row", marginTop: "4%", marginBottom: "-4%", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: customSize(22), fontWeight: "bold", marginLeft: "5%" }}>
                        My Tasks
                    </Text>
                    <RenderIcon
                        iconName="calendar"
                        color="#037982"
                        size={customSize(50)}
                        vectorIconSize={customSize(20)}
                        customStyle={{ marginRight: "6%", marginTop: "1%" }}
                    />
                </View>

                <RenderTasks
                    title="To Do"
                    taskCountText="5 Tasks now"
                    statusText="1 started"
                    iconName="calendar"
                    iconColor="#037982"
                    vectorIconSize={customSize(18)}
                    iconSize={customSize(40)}
                />
                <RenderTasks
                    title="In Progress"
                    taskCountText="1 Tasks now"
                    statusText="1 started"
                    iconName="loader"
                    iconColor="#e66571"
                    vectorIconSize={customSize(18)}
                    iconSize={customSize(40)}
                />
                <RenderTasks
                    title="Done"
                    taskCountText="18 Tasks now"
                    statusText="18 completed"
                    iconName="fast-forward"
                    iconColor="#6587e0"
                    vectorIconSize={customSize(18)}
                    iconSize={customSize(40)}
                />
                <Text style={{ fontSize: customSize(22), fontWeight: "bold", marginLeft: "5%", marginBottom: "5%" }}>
                    Active Projects
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <RenderCards
                        color="#309398"
                        title="Medical App"
                        text="9 hours progress"
                        shadowColor="#52a4a7"
                        percent="25"
                    />
                    <RenderCards
                        color="#e46471"
                        title="Sport App"
                        text="40 hours progress"
                        shadowColor="#e57d84"
                        percent="75"
                    />
                </View>

            </ScrollView>
        </View>

    );
}