import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Button, View} from "react-native";
import styles from "./styles";
import { setWorkoutDays } from "../../../redux/reducers/userReducer";
import DefaultButton from "../../../components/DefaultButton";

const StarterName = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const nextAction = () => {
        if(!props.name || !props.workoutDays.length) {
            alert('Você precisa treinar pelo menos 1 dia!');
            return;
        }
        navigation.navigate('StarterLevel');
    }

    const toggleDay = (d) => {
        let newWorkoutDays = [...props.workoutDays];
        if(!props.workoutDays.includes(d)) {
            // inserir
            newWorkoutDays.push(d);
            
        } else {
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);
        }

        dispatch(setWorkoutDays({workoutDays: newWorkoutDays}));
    }   

    navigation.setOptions({
        title: '',
        headerRight: () => (
            <Button title="Próximo" onPress={nextAction}/>
        ),
        headerRightContainerStyle: {
            marginRight: 10
        }
    });

    let firstName = props.name.split(' ')[0];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Opa, <Text style={styles.boldText}>{firstName}</Text>, tudo bem?</Text>
            <Text style={styles.headerText}>Quais <Text style={styles.boldText}>dias da semana</Text> você pretende treinar?</Text>

            <View style={styles.daysArea}>
                <DefaultButton
                    bgColor={props.workoutDays.includes(1)?'#A5E8BC':'#EEE'}
                    onPress={()=>toggleDay(1)} 
                    width={100}
                    title="Segunda"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.workoutDays.includes(2)?'#A5E8BC':'#EEE'}
                    onPress={()=>toggleDay(2)} 
                    width={100}
                    title="Terça"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.workoutDays.includes(3)?'#A5E8BC':'#EEE'}
                    onPress={()=>toggleDay(3)} 
                    width={100}
                    title="Quarta"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.workoutDays.includes(4)?'#A5E8BC':'#EEE'}
                    onPress={()=>toggleDay(4)} 
                    width={100}
                    title="Quinta"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.workoutDays.includes(5)?'#A5E8BC':'#EEE'}
                    onPress={()=>toggleDay(5)} 
                    width={100}
                    title="Sexta"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.workoutDays.includes(6)?'#A5E8BC':'#EEE'}
                    onPress={()=>toggleDay(6)} 
                    width={100}
                    title="Sábado"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.workoutDays.includes(0)?'#A5E8BC':'#EEE'}
                    onPress={()=>toggleDay(0)} 
                    width={100}
                    title="Domingo"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
            </View>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        workoutDays: state.user.workoutDays ?? [],
    }
}


export default connect(mapStateToProps, { setWorkoutDays })(StarterName);