import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-simple-toast";
import DatePicker from "react-native-datepicker";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Form,
  Textarea,
} from "native-base";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

export default function App() {
  // return <Main />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FirstAid" component={FirstAid} />
        <Stack.Screen name="Cut" component={Cut} />
        <Stack.Screen name="Burn" component={Burn} />
        <Stack.Screen name="CommonDisease" component={CommonDisease} />
        <Stack.Screen name="Prescription" component={Prescription} />
        <Stack.Screen name="Medication" component={Medication} />
        <Stack.Screen name="SetAlert" component={SetAlert} />
        <Stack.Screen name="FAQs" component={FAQs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%" }}
      source={require("./app/images/background.jpg")}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Emergency
        </Text>

        <Button
          block
          large
          style={{ marginTop: 100, marginHorizontal: 30 }}
          danger
          onPress={() => navigation.navigate("FirstAid")}
        >
          <Icon name="first-aid" type="FontAwesome5" />
          <Text>First Aid</Text>
        </Button>
        <Button
          block
          large
          style={{ marginTop: 20, marginHorizontal: 30 }}
          warning
          onPress={() => navigation.navigate("Medication")}
        >
          <Icon name="capsules" type="FontAwesome5" />
          <Text>Medication</Text>
        </Button>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("FAQs")}
        >
          <Icon name="questioncircleo" type="AntDesign" />
          <Text>FAQs</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}
