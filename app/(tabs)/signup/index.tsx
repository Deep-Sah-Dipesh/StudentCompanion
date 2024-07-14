import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

export default function ProfileScreen() {
  const [fullName, setFullName] = useState("");
  const [usn, setUsn] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [password, setPassword] = useState("");

  // const saveProfile = () => {
  //   // Prepare the data to send
  //   const data = {
  //     fullName: fullName,
  //     usn: usn,
  //     branch: branch,
  //     semester: semester,
  //     password: password,
  //   };

  //   // Send POST request
  //   axios
  //     .post("https://your-api-url/request", data)
  //     .then((response) => {
  //       console.log("Profile Saved:", response.data);
  //       // Handle success, e.g., show a success message to the user
  //     })
  //     .catch((error) => {
  //       console.error("Error saving profile:", error);
  //       // Handle error, e.g., show an error message to the user
  //     });
  // };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/BMS_College_of_Engineering.svg/1024px-BMS_College_of_Engineering.svg.png",
            }} // Replace with your logo URL
          />
          <TouchableOpacity style={styles.signOutButton}>
            <Button title="SIGNOUT" onPress={() => {}} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Student Companion</Text>
        <Text style={styles.heading}>Set up your profile</Text>
        <Text style={styles.subHeading}>
          Fill in your details to continue setting up your profile
        </Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>USN</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter USN"
          value={usn}
          onChangeText={setUsn}
        />
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>Select your Branch</Text>
        <Picker
          selectedValue={branch}
          style={styles.picker}
          onValueChange={(itemValue) => setBranch(itemValue)}
        >
          <Picker.Item label="Branch" value="" />
          <Picker.Item label="Computer Science" value="cs" />
          <Picker.Item label="Electronics" value="ec" />
          <Picker.Item label="Mechanical" value="me" />
          {/* Add more branches as needed */}
        </Picker>

        <Text style={styles.label}>Select your Semester</Text>
        <Picker
          selectedValue={semester}
          style={styles.picker}
          onValueChange={(itemValue) => setSemester(itemValue)}
        >
          <Picker.Item label="Semester" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>

        <TouchableOpacity style={styles.saveButton} onPress={console.log}>
          <Text style={styles.saveButtonText}>Save my Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 40, // Added paddingBottom to ensure the bottom elements are not cut off
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },
  signOutButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  signOutText: {
    fontSize: 16,
    color: "black",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subHeading: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 5,
  },
  saveButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
  logo: {
    width: 50, // Adjust as per your logo's size
    height: 50, // Adjust as per your logo's size
    alignSelf: "center",
    marginTop: 20,
  },
});
