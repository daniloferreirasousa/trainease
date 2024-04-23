import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Button, View, TouchableHighlight, Image, TextInput} from "react-native";

import styles from "./styles";
import { setLevel, setName, setWorkoutDays } from "../../../redux/reducers/userReducer";

const Home = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    

    navigation.setOptions({
        title: 'Configurações',
    });

    

    return (
        <View style={styles.container}>

            <Text style={styles.textLabel}>Seu nome completo:</Text>
            <TextInput style={styles.nameInput} value={props.name} onChangeText={e=>props.setName({name: e})} />

            <Text style={styles.textLabel}>Dias em que você treina:</Text>
            <View style={styles.listArea}>
                <TouchableHighlight style={styles.dayItem}>
                    <Text style={styles.dayItemText}>S</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.dayItem}>
                    <Text style={styles.dayItemText}>T</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.dayItem}>
                    <Text style={styles.dayItemText}>Q</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.dayItem}>
                    <Text style={styles.dayItemText}>Q</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.dayItem}>
                    <Text style={styles.dayItemText}>S</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.dayItem}>
                    <Text style={styles.dayItemText}>S</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.dayItem}>
                    <Text style={styles.dayItemText}>D</Text>
                </TouchableHighlight>
            </View>

            <Text style={styles.textLabel}></Text>

        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        workoutDays: state.user.workoutDays,
        level: state.user.level,
    }
}


export default connect(mapStateToProps, { setName, setWorkoutDays, setLevel })(Home);