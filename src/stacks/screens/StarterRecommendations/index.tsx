import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation, StackActions } from "@react-navigation/native";
import { SafeAreaView, Text, Button, View} from "react-native";
import styles from "./styles";
import { addWorkout, delWorkout } from "../../../redux/reducers/userReducer";
import workoutJson from "../../../assets/data/presetWorkouts.json";
import { FlatList } from "react-native-gesture-handler";
import Workout from "../../../components/Workout";

const StarterRecommendations = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const nextAction = () => {
        navigation.dispatch(StackActions.replace('AppTab'));
    }

    let btnNext = 'Ignorar';
    if(props.myWorkouts && props.myWorkouts.length > 0) {
        btnNext = 'Concluir';
    }

    navigation.setOptions({
        title: '',
        headerRight: () => (
            <Button title={btnNext} onPress={nextAction}/>
        ),
        headerRightContainerStyle: {
            marginRight: 10
        }
    });

    const handleChangeWorkout = (workout) => {

        if(props.myWorkouts.findIndex(i => i.id === workout.id) < 0) {
            dispatch(addWorkout({workout}));
        } else {
            dispatch(delWorkout({workout}))
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Opções de treino com base no seu nível.</Text>
            <Text style={styles.headerText}>Vovê selecionou {props.myWorkouts.length} treinos</Text>

            <FlatList
                data={workoutJson}
                renderItem={({item})=><Workout 
                    data={item}
                    addAction={()=>handleChangeWorkout(item)} 
                />}
                keyExtractor={item=>item.id}   
                style={styles.workoutsList} 
            />
            
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        myWorkouts: state.user.myWorkouts
    }
}


export default connect(mapStateToProps, { addWorkout, delWorkout })(StarterRecommendations);