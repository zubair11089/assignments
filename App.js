import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <TextInput placeholder="Enter UserName" style={styles.Input} />
        <TextInput placeholder="Enter Password" style={styles.Input} />
        <Text
          style={{
            color: "yellow",
            marginRight: 180,
            marginTop: 20,
          }}
        >
          Forgot Password?
        </Text>

        <TouchableOpacity style={styles.button}>Login</TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            backgroundColor: "#00acee",
            textAlign: "center",
            color: "#fff",
            height: 30,
            justifyContent: "center",
            marginLeft: 150,
            borderRadius: 50,
            marginBottom: 30,
          }}
        >
          Sign in with Twitter
        </TouchableOpacity>

        <view
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#fff",
            borderRadius: 2,
            marginTop: 20,
          }}
        ></view>

        <Text
          style={{
            color: "#fff",
          }}
        >
          Remember Me
        </Text>
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
      >
        Don't have account? Register
      </TouchableOpacity>
    </SafeAreaView>
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
  },
  button: {
    width: 100,
    backgroundColor: "green",
    textAlign: "center",
    color: "#fff",
    height: 30,
    justifyContent: "center",
    marginTop: 30,
    marginRight: 150,
    borderRadius: 50,
  },
});
