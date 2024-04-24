import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

function Memory_post({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Волшебство пикника на берегу озера: отдых, романтика и веселье в одном
        месте{" "}
      </Text>

      <Image
        style={styles.img}
        source={{
          uri: "https://i.pinimg.com/564x/9d/37/17/9d371724897fc1b7e739932fc45ca60c.jpg",
        }}
      />
      <View style={styles.members_column}>
        <View style={styles.members_row}>
          <Image
            style={styles.img_members}
            source={{
              uri: "https://i.pinimg.com/564x/3e/57/ce/3e57ce7fc575fba54c197e6f8307c228.jpg",
            }}
          />
          <Text style={styles.name}>Васильев Юрий</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 342,
  },
  text: {
    width: 342,
    fontSize: 16,
    marginBottom: 24,
  },
  members_row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },

  img: {
    width: 342,
    height: 219,
    borderRadius: 16,
    marginBottom: 24,
  },

  img_members: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    marginTop: 12,
  },
});

export default Memory_post;
