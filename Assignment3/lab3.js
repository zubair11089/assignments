import { React, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";

function ProfileScreen({ navigation,route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Ionicons name={"person"} size={100} color={"brown"}></Ionicons>
        <Text 
        style={{
            
            fontSize:44,
            color:"#fff"
        }}>{route.params.name}</Text>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("Home")
        }}>Logout</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function RegisterationScreen({ navigation,route }) {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const [cpassword, setcpassword] = useState("");

  const storeData = async () => {
    if (name.length == 0 || password.length == 0) {
      Alert.alert("Warning!", "Enter your data");
    }

    let Name = await AsyncStorage.getItem("Username");
    if (Name === name) {
      alert("User Already Exists");
      setName("");
      setpassword("");
      setcpassword("");
      navigation.navigate("Signup");
    } else {
      const firstPair = ["Username", name];
      const secondPair = ["Password", password];
      try {
        await AsyncStorage.multiSet([firstPair, secondPair]);
        navigation.navigate("Home");
        alert("Account Created Successfully");
      } catch (e) {
        console.warn(e);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <TextInput placeholder="Enter UserName" style={styles.Input} 
       
        onChangeText={(t) => setName(t)}
      />
        <TextInput placeholder="Enter Password" style={styles.Input} textContentType="password"
            secureTextEntry
            onChangeText={(t) => setpassword(t)}
           />
        <TextInput placeholder="Enter Confirm Password" style={styles.Input} 
        textContentType="password"
        secureTextEntry
        onChangeText={(t) => setcpassword(t)}
      />
        <Text
          style={{
            color: "yellow",
            marginRight: 180,
            marginTop: 20,
          }}
        >
          Forgot Password?
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={()=>{
            if (name == "") {
                alert("username is Required");
                return;
              }

              if (password == "") {
                alert("Password is Required");
                return;
              }
              if (password.length < 8) {
                alert("Password must be at least 8 Characters");
                return;
              }
              if (cpassword == "") {
                alert("Confirm Password is Required");
                return;
              }
              if (password !== cpassword) {
                alert("Password and Confirm Password Should be Same");
                return;
              }

              storeData();
              navigation.navigate({ name: "Home" });
        }
            
        }
        >Register</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {


    const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const onLogin = async () => {
    let Name;
    let Password;
    try {
      Name = await AsyncStorage.getItem("Username");
      Password = await AsyncStorage.getItem("Password");
      if (Name == name && Password == password) {
        navigation.navigate({
          name: "Profile",
          params: {
            name
          },
        });
      } else {
        alert("Incorrect Username or password ");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <TextInput placeholder="Enter UserName" style={styles.Input} value={name}  onChangeText={t=>setname(t)}/>
        <TextInput placeholder="Enter Password" style={styles.Input} value={password} onChangeText={(a)=>setpassword(a)} textContentType="password" secureTextEntry />
        <Text
          style={{
            color: "yellow",
            marginRight: 180,
            marginTop: 20,
          }}
        >
          Forgot Password?
        </Text>

        <TouchableOpacity style={styles.button} onPress={
            onLogin
        }>Login</TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          width: 450,
          backgroundColor: "blue",
          textAlign: "center",
          color: "#fff",
          height: 50,
          justifyContent: "center",
          marginTop: 30,
        }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Don't have account? Register
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function Portfolio() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Register"
          component={RegisterationScreen}
        ></Stack.Screen>

        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A9BDC",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    width: 450,
    height: 400,
    backgroundColor: "#1260CC",
    borderColor: "#1260CC",
    alignItems: "center",
    paddingTop: 50,
    justifyContent: "center",
  },
  box2: {
    width: 450,
    height: 100,
    backgroundColor: "#1260CC",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    borderColor: "white",
    borderWidth: 3,
    width: 300,
    color: "grey",
    marginTop: 20,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  button: {
    width: 200,
    backgroundColor: "green",
    textAlign: "center",

    color: "#fff",
    height: 50,
    justifyContent: "center",
    marginTop: 30,

    borderRadius: 50,
  },
});
