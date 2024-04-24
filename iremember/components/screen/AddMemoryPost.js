import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";

function AddMemoryPost({ navigation }) {
  const [number, onChangeNumber] = React.useState("");
  const [userData, setUserData] = React.useState({});

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onChangeInput = (e, name) => {
    setUserData({
      ...userData,
      [name]: e.nativeEvent.text,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <IconButton
          style={styles.btn}
          onPress={() => navigation.navigate("Memory")}
          icon={(props) => <Icon name="close" {...props} color="#FEFEFE" />}
        />
        <Text style={styles.title}>Новый пост</Text>

        <IconButton
          style={styles.btn}
          onPress={() => navigation.navigate("Memory")}
          icon={(props) => <Icon name="arrow-up" {...props} color="#FEFEFE" />}
        />
      </View>
      <View style={styles.line}></View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <TextInput
          style={styles.description}
          onChange={(e) => onChangeInput(e)}
          placeholder="Введите описание"
          fontSize={18}
          editable
          returnKeyType="done"
          multiline={true}
          blurOnSubmit={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          type="text"
          placeholderTextColor="#828282"
          id={2}
        />

        {image && <Image source={{ uri: image }} style={styles.image} />}
      </ScrollView>
      <View style={styles.linefooter}></View>

      <View style={styles.footerline}>
        <IconButton
          onPress={pickImage}
          icon={(props) => (
            <Icon name="camera-plus" {...props} color="#06648E" />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 844,
    backgroundColor: "#F5F5F5",
  },

  title:{
    fontSize: 20,
    marginTop: 5,
    fontWeight:"500",
    color:"#06648E"
  },

  body: {
    marginTop: 25,
    marginBottom: 100,
  },

  linefooter: {
    position: "absolute",
    marginTop: 760,
    height: 1,
    width: "100%",
    backgroundColor: "#333",
  },
  description: {
    width: 342,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C1C1C1",
    padding: 10,
  },

  image: {
    width: 342,
    height: 219,
    borderRadius: 16,
    marginTop: 16,
  },

  line: {
    position: "absolute",
    marginTop: 90,
    height: 1,
    width: "100%",
    backgroundColor: "#333",
    marginBottom: 16,
  },

  footerline: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width: 390,
    height: 85,
    paddingHorizontal: 24,
    marginTop: 760,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },

  btn: {
    width: 30,
    height: 30,
    backgroundColor: "#06648E",
    borderRadius: 28,
    alignSelf: "center",
  },

  footer: {
    marginTop: 50,
    flexDirection: "row",
    width: 340,
    justifyContent: 'space-between',
  },
});

export default AddMemoryPost;
