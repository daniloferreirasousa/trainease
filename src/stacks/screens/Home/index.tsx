import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Button, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";

const Home = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

   
    const ConfigButton = () => {
        const btnAction = () => {
            navigation.navigate('HomeConfig');
        }

        return (
            <TouchableHighlight style={styles.configButton} onPress={btnAction} underlayColor="transparent" >
                <Image source={require('../../../assets/config.png')} style={styles.configButtonImage}/>
            </TouchableHighlight>
        )
    }
    

    navigation.setOptions({
        title: 'Seu progresso diário',
        headerRight: () => (<ConfigButton />)
    });

    

    return (
        <View></View>
    );
}

const mapStateToProps = (state) => {
    return {
    
    }
}


export default connect(mapStateToProps, {  })(Home);