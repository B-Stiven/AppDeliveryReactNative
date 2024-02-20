import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ToastAndroid,
    TouchableOpacity,
} from "react-native";
import { RoundeButton } from '../../components/RoundeButton';
import { StatusBar } from 'expo-status-bar';

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>

            <Image
                source={require("../../../assets/chef.jpg")}
                style={styles.imageBaground}
            />

            <View style={styles.logoContainer}>
                <Image source={require("../../../assets/user_image.png")} style={styles.logoImage} />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>

            <View style={styles.form}>

                <Text style={styles.formText}>INGRESA</Text>

                <View style={styles.formInput}>
                    <Image
                    style={styles.formIcon}
                    source={require("../../../assets/user.png")}
                    />

                    <TextInput
                    style={styles.forTtextInput}
                    placeholder="Nombres"
                    keyboardType="default"
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                    style={styles.formIcon}
                    source={require("../../../assets/my_user.png")}
                    />

                    <TextInput
                    style={styles.forTtextInput}
                    placeholder="Apellidos"
                    keyboardType="default"
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                    style={styles.formIcon}
                    source={require("../../../assets/email.png")}
                    />

                    <TextInput
                    style={styles.forTtextInput}
                    placeholder="Correo electronico"
                    keyboardType="email-address"
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                    style={styles.formIcon}
                    source={require("../../../assets/phone.png")}
                    />

                    <TextInput
                    style={styles.forTtextInput}
                    placeholder="Correo electronico"
                    keyboardType="numeric"
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                    style={styles.formIcon}
                    source={require("../../../assets/password.png")}
                    />

                    <TextInput
                    style={styles.forTtextInput}
                    placeholder="Contraseña"
                    keyboardType="default"
                    secureTextEntry={true}
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                    style={styles.formIcon}
                    source={require("../../../assets/confirm_password.png")}
                    />

                    <TextInput
                    style={styles.forTtextInput}
                    placeholder="Confirmar Contraseña"
                    keyboardType="default"
                    secureTextEntry={true}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundeButton
                    text="Confirmar"
                    onPress={() => ToastAndroid.show("Hoal", ToastAndroid.SHORT)}
                    />
                </View>

            </View>

            <StatusBar style="auto" />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "black",
      },
      imageBaground: {
        width: "100%",
        height: "100%",
        opacity: 0.7,
        bottom: "30%",
      },
      form: {
        width: "100%",
        height: "70%",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
      },
      logoContainer: {
        position: "absolute",
        alignSelf: "center",
        top: "5%",
        alignItems: 'center'
      },
      logoImage: {
        width: 100,
        height: 100,
      },
      logoText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold",
      },
      formText: {
        fontWeight: "bold",
        fontSize: 16,
      },
      forTtextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#AAAAAA",
        marginLeft: 15,
      },
      formInput: {
        flexDirection: "row",
        marginTop: 30,
      },
      formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
      },
      formRegister: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
      },
      formRegisterText: {
        color: "orange",
        fontStyle: "italic",
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontWeight: "bold",
        marginLeft: 10,
      },
    });