import React, { useState } from "react";
import { StyleSheet, View, Alert, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, Modal, Portal, Provider } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

const CreateEmployee = ({ route, navigation }) => {
  const getDefaultInfo = (field) => {
    if (route.params) {
      switch (field) {
        case "email":
          return route.params.item.email;

        case "name":
          return route.params.item.name;

        case "phone":
          return route.params.item.phone;

        case "salary":
          return route.params.item.salary;

        case "photo":
          return route.params.item.photo;

        case "position":
          return route.params.item.position;
      }
    }

    return "";
  };

  const [name, setname] = useState(getDefaultInfo("name"));
  const [phone, setPhone] = useState(getDefaultInfo("phone"));
  const [email, setEmail] = useState(getDefaultInfo("email"));
  const [salary, setSalary] = useState(getDefaultInfo("salary"));
  const [photo, setPhoto] = useState(getDefaultInfo("photo"));
  const [position, setPosition] = useState(getDefaultInfo("position"));
  const [modal, setModal] = useState(false);

  //function for creation/submission of new employee info
  const submitData = () => {
    fetch("http://0ef7-103-214-61-23.ngrok.io/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        photo: photo,
        salary: salary,
        position: position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} is Saved!`);
        navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert("Error Occured!");
      });
  };

  const updateData = () => {
    fetch("http://0ef7-103-214-61-23.ngrok.io/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: route.params.item._id,
        name:name,
        email:email,
        phone:phone,
        photo:photo,
        salary:salary,
        position:position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${name}'s info updated successfully!`)
        navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert("Error while Updating!");
      });
  };

  //function for selecting image from gallery
  const selectImageFromGallery = async () => {
    //ask for permission to access library
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted == true) {
      let res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.6,
      });

      if (!res.cancelled) {
        let imageInfo = {
          uri: res.uri,
          type: `test/${res.uri.split(".")[1]}`,
          name: `test.${res.uri.split(".")[1]}`,
        };
        uploadImage(imageInfo);
        setModal(false);
      }
    } else {
      Alert.alert("Gallery Permission Required!");
    }
  };

  //function for using camera
  const selectImageFromCamera = async () => {
    //ask for permission to access library
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (permission.granted == true) {
      let res = await ImagePicker.launchCameraAsync();
      if (!res.cancelled) {
        let imageInfo = {
          uri: res.uri,
          type: `test/${res.uri.split(".")[1]}`,
          name: `test.${res.uri.split(".")[1]}`,
        };
        uploadImage(imageInfo);
        setModal(false);
      }
    } else {
      Alert.alert("Camera Permission Required!");
    }
  };

  //function for handling image uploads to cloudinary
  const uploadImage = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Employee-App");
    data.append("cloud_name", "cloudinary-api-key");

    fetch("insert-cloudinary-api-credentials", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.url);
      })
      .catch((err) => {
        Alert.alert("Error While Uploading Image!");
      });
  };
  return (
    <>
      <View style={styles.root}>
        <KeyboardAvoidingView behavior="position">
          <TextInput
            label="Name"
            value={name}
            onChangeText={(text) => {
              setname(text);
            }}
            mode="flat"
            theme={{ colors: { primary: "teal" } }}
            style={styles.inputStyle}
            underlineColor="teal"
            outlineColor="#fff"
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            mode="flat"
            theme={{ colors: { primary: "teal" } }}
            style={styles.inputStyle}
            underlineColor="teal"
            outlineColor="#fff"
          />
          <TextInput
            label="Position"
            value={position}
            onChangeText={(text) => {
              setPosition(text);
            }}
            mode="flat"
            theme={{ colors: { primary: "teal" } }}
            style={styles.inputStyle}
            underlineColor="teal"
            outlineColor="#fff"
          />

          <TextInput
            label="Phone Number"
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
            }}
            mode="flat"
            keyboardType="phone-pad"
            theme={{ colors: { primary: "teal" } }}
            style={styles.inputStyle}
            underlineColor="teal"
            outlineColor="#fff"
          />
          <TextInput
            label="Salary"
            value={salary}
            onChangeText={(text) => {
              setSalary(text);
            }}
            mode="flat"
            keyboardType="name-phone-pad"
            theme={{ colors: { primary: "teal" } }}
            style={styles.inputStyle}
            underlineColor="teal"
            outlineColor="#fff"
          />
        </KeyboardAvoidingView>
        <Provider>
          <KeyboardAvoidingView behavior="height">
            <Button
              icon={photo == "" ? "upload" : "check"}
              mode="contained"
              theme={{ colors: { primary: "teal" } }}
              onPress={() => {
                setModal(true);
              }}
              style={{ marginTop: 5 }}
            >
              upload image
            </Button>

            {route.params ? (
              <Button
                onPress={updateData}
                style={{ marginTop: 5 }}
                icon="content-save"
                mode="contained"
                theme={{ colors: { primary: "teal" } }}
              >
                Update
              </Button>
            ) : (
              <Button
                onPress={submitData}
                style={{ marginTop: 5 }}
                icon="content-save"
                mode="contained"
                theme={{ colors: { primary: "teal" } }}
              >
                Save
              </Button>
            )}
          </KeyboardAvoidingView>
          <Portal>
            <Modal
              visible={modal}
              onDismiss={() => {
                setModal(false);
              }}
              contentContainerStyle={styles.ModalStyle}
            >
              <View>
                <View style={styles.modalButton}>
                  <Button
                    icon="camera"
                    mode="contained"
                    style={{ marginRight: 5 }}
                    theme={{ colors: { primary: "teal" } }}
                    onPress={selectImageFromCamera}
                  >
                    camera
                  </Button>
                  <Button
                    icon="image"
                    mode="contained"
                    style={{ marginRight: 3 }}
                    theme={{ colors: { primary: "teal" } }}
                    onPress={selectImageFromGallery}
                  >
                    gallery
                  </Button>
                </View>
                <Button
                  icon="close"
                  mode="contained"
                  onPress={() => {
                    setModal(false);
                  }}
                  style={{ marginHorizontal: 20, marginVertical: 20 }}
                >
                  Cancel
                </Button>
              </View>
            </Modal>
          </Portal>
        </Provider>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000000",
    color: "#fff",
    margin: 8,
    justifyContent: "center",
  },
  inputStyle: {
    margin: 3,
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 100,
  },
  ModalStyle: {
    backgroundColor: "azure",
    marginTop: 70,
    marginBottom: 100,
    marginLeft: 30,
    marginRight: 30,
  },
});
export default CreateEmployee;
