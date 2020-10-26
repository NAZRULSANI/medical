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

function FirstAid({ navigation }) {
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
          First Aid
        </Text>
        <Button
          block
          large
          style={{ marginTop: 20, marginHorizontal: 30 }}
          danger
          rounded
          onPress={() => navigation.navigate("Cut")}
        >
          <Text>Cut</Text>
        </Button>
        <Button
          block
          large
          style={{ marginTop: 20, marginHorizontal: 30 }}
          danger
          rounded
          onPress={() => navigation.navigate("Burn")}
        >
          <Text>Burn</Text>
        </Button>
        <Button
          block
          large
          style={{ marginTop: 20, marginHorizontal: 30 }}
          danger
          rounded
          onPress={() => navigation.navigate("CommonDisease")}
        >
          <Text>Common Disease</Text>
        </Button>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function Cut({ navigation }) {
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
          Cut
        </Text>
        <Text style={{ paddingHorizontal: 20 }}>
          Wash your hands with soap and water. Wash the cut to prevent
          infection. Use cool or lukewarm water and a mild soap or cleanser to
          gently remove dirt or debris. Stop the bleeding. Apply pressure to the
          cut using a clean washcloth or gauze. Maintain pressure for one to two
          minutes or until the bleeding stops. Apply petroleum jelly. This will
          help keep the wound moist for faster healing. Make sure you apply it
          continuously until the cut heals. To help prevent the spread of dirt
          and bacteria, consider using petroleum jelly from a tube instead of a
          jar. Do not apply topical antibiotics. Cover the cut with a sterile
          bandage. This will help protect the cut and prevent it from reopening.
          Change the bandage daily, and keep the cut covered until it heals.
          Consider taking over-the-counter pain medication. Acetaminophen can
          help relieve painful cuts. Make sure your tetanus vaccination is up to
          date if your cut is from a dirty or rusty object. If you aren’t sure,
          contact your primary care doctor.
        </Text>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function Burn({ navigation }) {
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
          Burn
        </Text>
        <Text style={{ paddingHorizontal: 20 }}>
          Most minor burns can be treated at home. They usually heal within a
          couple of weeks. For serious burns, after appropriate first aid and
          wound assessment, your treatment may involve medications, wound
          dressings, therapy and surgery. The goals of treatment are to control
          pain, remove dead tissue, prevent infection, reduce scarring risk and
          regain function. People with severe burns may require treatment at
          specialized burn centers. They may need skin grafts to cover large
          wounds. And they may need emotional support and months of follow-up
          care, such as physical therapy.
        </Text>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function CommonDisease({ navigation }) {
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
          Common Disease
        </Text>
        <Text style={{ paddingHorizontal: 20 }}>
          Modern medicine needs new kinds of antibiotics and antivirals to treat
          drug-resistant infections. But the pipeline of new drugs is drying up.
          For example, nearly 40 years elapsed between introduction of the two
          newest molecular classes of antibiotics: fluoroquinolones (such as
          Cipro) in 1962 and the oxazolidinones (such as Zyvox) in 2000. Major
          pharmaceutical companies have limited interest in dedicating resources
          to the antibiotics market because these short-course drugs are not as
          profitable as drugs that treat chronic conditions and
          lifestyle-related ailments, such as high blood pressure or high
          cholesterol. Antibiotic research and development is also expensive,
          risky, and time consuming. Return on that investment can be
          unpredictable, considering that resistance to antibiotics develops
          over time, eventually making them less effective.
        </Text>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function Prescription({ navigation }) {
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
          Prescription
        </Text>
        <Form>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Enter the prescription"
            style={{ borderColor: "black", width: 300 }}
          />

          <Button
            block
            iconLeft
            style={{ marginHorizontal: 50, marginTop: 20 }}
            success
            onPress={() => Toast.show("Prescription Submitted!")}
          >
            <Text>Submit</Text>
          </Button>
        </Form>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function SetAlert({ navigation }) {
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
          Set Alert
        </Text>
        <Text
          style={{ paddingHorizontal: 20, marginTop: 50, marginBottom: 20 }}
        >
          Pick a suitable time
        </Text>

        <DatePicker
          style={{ width: 200 }}
          date="2020-10-23"
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
        />
        <Button
          block
          large
          style={{ marginTop: 20, marginHorizontal: 100 }}
          success
          onPress={() => Toast.show("Alert Set!")}
        >
          <Text>Set</Text>
        </Button>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function Medication({ navigation }) {
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
          Medication
        </Text>
        <Button
          block
          large
          style={{ marginTop: 20, marginHorizontal: 30 }}
          danger
          rounded
          onPress={() => navigation.navigate("Prescription")}
        >
          <Text>Prescription</Text>
        </Button>
        <Button
          block
          large
          style={{ marginTop: 20, marginHorizontal: 30 }}
          danger
          rounded
          onPress={() => navigation.navigate("SetAlert")}
        >
          <Text>Set Alert</Text>
        </Button>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function FAQs({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%" }}
      source={require("./app/images/background.jpg")}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          FAQs
        </Text>
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Q: What is coronavirus disease 2019 (COVID-19)?
          </Text>
          <Text>
            Coronavirus disease 2019 (COVID-19) is a respiratory illness that
            can spread from person to person. CDC has information on COVID-19
            symptoms and caring for yourself and others. COVID-19 is a new
            disease, caused by a novel (or new) coronavirus that has not
            previously been seen in humans.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Q: What is the FDA doing to respond to the COVID-19 pandemic?{" "}
          </Text>
          <Text>
            The FDA, along with other federal, state, and local agencies and
            public health officials across the country and internationally,
            plays a critical role in protecting public health during the
            COVID-19 pandemic. FDA staff are working around the clock to support
            development of medical countermeasures and are providing regulatory
            advice, guidance, and technical assistance.
          </Text>
        </View>
        <Button
          rounded
          block
          large
          iconLeft
          style={{ marginTop: 100, marginHorizontal: 50 }}
          info
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}
