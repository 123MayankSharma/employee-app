import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { FAB, Card } from "react-native-paper";

const Home = ({ route, navigation }) => {
  const [info, setInfo] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const refreshInfo = () => {
    fetch("http://b1f8-103-92-43-228.ngrok.io/")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        console.log(data);
        setLoadingScreen(false);
      })
      .catch((err) => {
        Alert.alert("Error Occured");
      });
  };

  useEffect(() => {
    refreshInfo();
  }, []);

  const listInfo = (item) => {
    return (
      <Card
        style={styles.myCard}
        key={Math.random()}
        onPress={() => {
          navigation.navigate("Profile", { item: item });
        }}
      >
        <View style={styles.cardView}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 35 }}
            source={{
              uri: `${item.photo}`,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={{ fontSize: 13, color: "#fff", marginLeft: 5 }}>
              {item.position}
            </Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={info}
          renderItem={({ item }) => {
            return listInfo(item);
          }}
          keyExtractor={(item) => {
            item._id;
          }}
          onRefresh={refreshInfo}
          refreshing={loadingScreen}
        />

        <FAB
          onPress={() => {
            navigation.navigate("Create");
          }}
          icon="plus"
          style={styles.fab}
        />
      </View>
    </>
  );

  //Either you destructure the data and then pass it to the renderItem() or you
  //pass the data as it is and destructure it later on in the helper function
  //as we have done in listInfo()
};

const styles = StyleSheet.create({
  myCard: {
    // width:100,
    // height:100,
    flexDirection: "row",
    backgroundColor: "grey",
    margin: 5,
    padding: 5,
  },
  cardView: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    margin: 5,
    color: "#fff",
  },
  fab: {
    right: 5,
    bottom: 5,
    position: "absolute",
    margin: 10,
    backgroundColor: "teal",
  },
});

export default Home;
