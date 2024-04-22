import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Button, View, TouchableHighlight, Image } from "react-native";

import styles from "./styles";
import HomeMonthScroll from "../../../components/HomeComponents/HomeMonthScroll";
import HomeDaysScroll from "../../../components/HomeComponents/HomeDaysScroll";
import HomeDaysStatus from "../../../components/HomeComponents/HomeDaysStatus";

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
        headerRight: () => (<ConfigButton />),
        headerRightContainerStyle: {
            marginRight: 10
        }
    });


    let today = new Date();
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today.getDate());
    

    return (
        <View style={styles.container}>
            <HomeMonthScroll  
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />
            <HomeDaysScroll 
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}

                dailyProgress={props.dailyProgress}
                workoutDays={props.workoutDays}
            />
            <HomeDaysStatus />

            <Text>Mês: {selectedMonth}</Text>
            <Text>Dia: {selectedDay}</Text>

            <View style={styles.legendArea}>
                <Text style={styles.legendText}>Legenda:</Text>
                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, {backgroundColor: '#B5EEFF'}]}></View>
                    <Text style={styles.legendText}>Hoje</Text>
                </View>

                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, {backgroundColor: '#B5FFB8'}]}></View>
                    <Text style={styles.legendText}>Treino Feito</Text>
                </View>

                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, {backgroundColor: '#FFB5B5'}]}></View>
                    <Text style={styles.legendText}>Treino Perdido</Text>
                </View>

                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, {backgroundColor: '#D4D4D4', opacity: 0.2}]}></View>
                    <Text style={styles.legendText}>Dia de descanso</Text>
                </View>

                <View style={styles.legendItem}>
                    <View style={[styles.legendBox, {backgroundColor: '#D4D4D4'}]}></View>
                    <Text style={styles.legendText}>Dia futuro</Text>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        dailyProgress: state.user.dailyProgress,
        workoutDays: state.user.workoutDays
    }
}


export default connect(mapStateToProps)(Home);