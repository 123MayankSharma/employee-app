import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button, Modal, Portal, Provider } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setname] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  const [photo, setPhoto] = useState();
  const [modal, setModal] = useState(false);

  return (
    <>
      <View style={styles.root}>
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
          keyboardType="phone-pad"
          theme={{ colors: { primary: "teal" } }}
          style={styles.inputStyle}
          underlineColor="teal"
          outlineColor="#fff"
        />
        <Provider>
          {/* <Button */}
          {/*   icon="upload" */}
          {/*   mode="contained" */}
          {/*   theme={{ colors: { primary: "teal" } }} */}
          {/*   onPress={() => { */}
          {/*     setModal(true); */}
          {/*   }} */}
          {/* > */}
          {/*   upload image */}
          {/* </Button> */}
          <Button
            style={{marginTop:5}}
            icon="content-save"
            mode="contained"
            theme={{ colors: { primary: "teal" } }}
          >
            Save
          </Button>
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
                  >
                    camera
                  </Button>
                  <Button
                    icon="image"
                    mode="contained"
                    style={{ marginRight: 3 }}
                    theme={{ colors: { primary: "teal" } }}
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
