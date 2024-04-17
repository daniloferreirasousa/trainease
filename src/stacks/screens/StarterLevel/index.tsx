import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Button, View} from "react-native";
import styles from "./styles";
import { setLevel } from "../../../redux/reducers/userReducer";
import DefaultButton from "../../../components/DefaultButton";

const StarterLevel = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const nextAction = () => {
        if(!props.name || !props.workoutDays.length) {
            alert('Você precisa treinar pelo menos 1 dia!');
            return;
        }
        navigation.navigate('StarterNivel');
    }

    const handleSetLevel = (l:string) => {
        dispatch(setLevel({level: l}));
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

    let funnyPhrase = '...';

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>{funnyPhrase}</Text>
            <Text style={styles.headerText}>Qual seu nível hoje?</Text>

            <View style={styles.daysArea}>
                <DefaultButton
                    bgColor={props.level=='beginner'?'#A5E8BC':'#EEE'}
                    onPress={()=>handleSetLevel('beginner')} 
                    title="Iniciante / Frangote"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.level=='intermediate'?'#A5E8BC':'#EEE'}
                    onPress={()=>handleSetLevel('intermediate')} 
                    title="Intermediário / Me viro bem"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
                <DefaultButton
                    bgColor={props.level=='advanced'?'#A5E8BC':'#EEE'}
                    onPress={()=>handleSetLevel('advanced')} 
                    title="Avançado / Primo(a) do The Rock"
                    marginBottom={20}
                    underlayColor="#CCC"
                />
            </View>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        level: state.user.level,
        workoutDays: state.user.workoutDays ?? [],
    }
}


export default connect(mapStateToProps, { setLevel })(StarterLevel);