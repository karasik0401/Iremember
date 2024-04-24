import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import AddFriends from "../widget/AddFriends";

function AddMemory({ navigation }) {
  const [number, onChangeNumber] = React.useState("");
  const [userData, setUserData] = React.useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

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

  const [modalVisible, setModalVisible] = useState(false);

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
          onPress={() => navigation.navigate("Home_page")}
          icon={(props) => <Icon name="close" {...props} color="#FEFEFE" />}
        />
        <IconButton
          style={styles.btn}
          onPress={() => navigation.navigate("Memory")}
          icon={(props) => <Icon name="arrow-up" {...props} color="#FEFEFE" />}
        />
      </View>
      <View style={styles.header_column}>
        <TextInput
          style={styles.title}
          onChange={(e) => onChangeInput(e)}
          placeholder="Введите название воспомианния"
          fontSize={18}
          type="text"
          placeholderTextColor="#828282"
          id={1}
        />

        <TextInput
          style={styles.address}
          onChange={(e) => onChangeInput(e)}
          placeholder="Введите адрес"
          fontSize={18}
          type="text"
          placeholderTextColor="#828282"
          id={2}
        />

        <TouchableOpacity
          onPress={showDatePicker}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: -10,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "normal" }}>
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : "No date selected"}
          </Text>
          <IconButton
            style={styles.icondate}
            onPress={showDatePicker}
            icon={(props) => (
              <Icon name="calendar" {...props} color="#06648E" />
            )}
          />
        </TouchableOpacity>

        <View>
          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            display="inline"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
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
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
          icon={(props) => (
            <Icon name="account-plus" {...props} color="#06648E" />
          )}
        />

        <IconButton
          onPress={pickImage}
          icon={(props) => (
            <Icon name="camera-plus" {...props} color="#06648E" />
          )}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AddFriends />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Сохранить</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  icondate: {
    merginTop: 20,
  },

  title: {
    marginTop: 50,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#333",
    marginBottom: 16,
  },
  linefooter: {
    position: "absolute",
    marginTop: 760,
    height: 1,
    width: "100%",
    backgroundColor: "#333",
  },

  modalView: {
    marginTop: 200,
    marginHorizontal: 31,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: "#06648E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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

  header_column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: -40,
    gap: 5,
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
    backgroundColor: "#fff"
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

  icon_footer: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

export default AddMemory;
