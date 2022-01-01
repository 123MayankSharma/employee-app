import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput,Button } from 'react-native-paper'





const CreateEmployee = () => {
    const [name, setname] = useState("")
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [salary, setSalary] = useState()
    const [photo, setPhoto] = useState()
    const [modal, setModal] = useState()




    return (<>
        <View style={styles.root}>
            <TextInput
                label="Name"
                value={name}
                onChangeText={(text) => { setName(text) }}
                mode="flat"
                theme={{ colors: { primary: 'teal' } }}
                style={styles.inputStyle}
                underlineColor='teal'
                outlineColor='#fff'
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => { setEmail(text) }}
                mode="flat"
                theme={{ colors: { primary: 'teal' } }}
                style={styles.inputStyle}
                underlineColor='teal'
                outlineColor='#fff'
            />
            <TextInput
                label="Phone Number"
                value={phone}
                onChangeText={(text) => { setPhone(text) }}
                mode="flat"
                keyboardType='number-pad'
                theme={{ colors: { primary: 'teal' } }}
                style={styles.inputStyle}
                underlineColor='teal'
                outlineColor='#fff'
            />
            <TextInput
                label="Salary"
                value={salary}
                onChangeText={(text) => { setSalary(text) }}
                mode='flat'
                theme={{ colors: { primary: 'teal' } }}
                style={styles.inputStyle}
                underlineColor='teal'
                outlineColor='#fff'
            />
        <Button
        icon="camera"
        mode='contained'
        theme={{colors:{primary:'teal'}}}
        >
          Upload
        </Button>

        </View>



    </>)




}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#000000",
        color: '#fff',
        margin: 8


    },
    inputStyle: {
        margin: 3


    }


})
export default CreateEmployee
