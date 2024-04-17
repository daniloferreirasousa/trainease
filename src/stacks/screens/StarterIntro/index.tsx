import React from "react";
import { View, Text, Image, SafeAreaView, TouchableHighlight} from "react-native";
import styles from "./styles";
import DefaultButton from "../../../components/DefaultButton";

export default (props) => {

    const handleStarterName = () => {
        props.navigation.navigate('StarterName');
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeTitle}>Bem vindo(a) ao Traine Ease</Text>
            <View style={styles.welcomeImageArea}>
                <Image style={styles.welcomeImage} source={require('../../../assets/boneco.png')} />
            </View>
            <View style={styles.beginConfigArea}>
                <DefaultButton 
                    title="Iniciar Configuração"
                    width="200"
                    bgColor="#0072C0"
                    fontColor="#FFF"
                    underlayColor="#0B7AC6"
                    onPress={handleStarterName}
                    marginBottom={50}
                />
            </View>
        </SafeAreaView>
    );
}