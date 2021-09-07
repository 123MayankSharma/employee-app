import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { Card } from 'react-native-paper'



const Home = () => {
    const info = [
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },

        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },
        { rno: 1, Name: "Mayank Sharma", Position: "SDE-1" },

    ]
    const listInfo = ({person}) => {


        return (<Card style={styles.myCard} >
            <View style={styles.cardView}>
                <Image
                    style={{ width: 70, height: 70, borderRadius: 35 }}
                    source={{ uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80' }}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.text}  >
                        {person.Name}
                    </Text>
                    <Text style={{ fontSize: 13, color: "#fff", marginLeft: 5 }}>{person.Position}</Text>
                </View>
            </View>
        </Card>

        )
    }

    return (<>
        <View>
            <FlatList
                data={info}
                renderItem={(person) => {
                    return listInfo(person)
                }}
            />
        </View>
    </>)




}

const styles = StyleSheet.create({
    myCard: {
        // width:100,
        // height:100,
        flexDirection: 'row',
        backgroundColor: 'grey',
        margin: 5,
        padding: 5,
    },
    cardView: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        margin: 5,
        color: "#fff",

    },



})

export default Home
