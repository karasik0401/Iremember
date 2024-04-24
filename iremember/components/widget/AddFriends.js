import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { id: 1, txt: "Петя", isChecked: false },
  { id: 2, txt: "Вася", isChecked: false },
  { id: 3, txt: "Саша", isChecked: false },
  { id: 4, txt: "Влад", isChecked: false },
  { id: 5, txt: "Петя", isChecked: false },
  { id: 6, txt: "Вася", isChecked: false },
  { id: 7, txt: "Саша", isChecked: false },
  { id: 8, txt: "Влад", isChecked: false },
];

function AddFriends({ route }) {
  const [products, setProducts] = React.useState(data);

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  let selected = products.filter((product) => product.isChecked);

  const renderFlatList = (renderData) => {
    return (
      <FlatList
        style={styles.container}
        data={renderData}
        renderItem={({ item }) => (
          <View style={{ margin: 0 }}>
            <View style={styles.card}>
              <Text>{item.txt}</Text>
              <Pressable onPress={() => handleChange(item.id)}>
                <MaterialCommunityIcons
                  name={item.isChecked ? "close-circle" : "plus-circle-outline"}
                  size={28}
                  color="#06648E"
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите участников воспоминания</Text>
      <View style={styles.line}></View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        {renderFlatList(products)}
      </ScrollView>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 328,
  },
  body: {
    height: 348,
  },

  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginBottom: 16,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#333",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 16,
    marginTop: -16,
  },
});

export default AddFriends;
