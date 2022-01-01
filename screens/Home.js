


import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

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
    const listInfo = (item) => {

        return (
            <Card style={styles.myCard} key={Math.random() * Math.random()}>
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 70, height: 70, borderRadius: 35 }}
                        source={{ uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80' }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}  >
                            {item.Name}
                        </Text>
                        <Text style={{ fontSize: 13, color: "#fff", marginLeft: 5 }}>{item.Position}</Text>
                    </View>
                </View>
            </Card>

        )
    }

    return (<>
        <View>
            <FlatList
                data={info}
                renderItem={({ item }) => {
                    return listInfo(item)
                }}
                keyExtractor={() => { (Math.random()) }}
            />
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => { info[1].Name = "John Cena" }}
            />

        </View>
    </>)


    //Either you destructure the data and then pass it to the renderItem() or you
    //pass the data as it is and destructure it later on in the helper function
    //as we have done in listInfo()

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
    fab: {
        right: 5,
        bottom: 5,
        position: 'absolute',
        margin: 10,
        backgroundColor: 'teal'



    }



})

export default Home
