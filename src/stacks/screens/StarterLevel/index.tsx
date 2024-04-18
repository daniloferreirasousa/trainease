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

    const handleSetLevel = (l:string) => {
        dispatch(setLevel({level: l}));
    }

    const nextAction = () => {
        if(!props.level) {
            alert('Você precisa escolher uma opção!');
        }

        navigation.navigate('StarterRecommendations');
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

    let funnyPhrase = '';
    switch(props.workoutDays.length) {
        case 1:
            funnyPhrase = 'Só 1 dia não vai adiantar muito, mas...';
        break;
        case 2:
            funnyPhrase = '2 dias eu acho pouco, mas quem sou eu pra te julgar?';
        break;
        case 3:
            funnyPhrase = 'Legal, 3 dias da pro gasto...';
        break;
        case 4: 
            funnyPhrase = 'Legal, 4 dias vai ser TOP!';
        break;
        case 5:
            funnyPhrase = 'É isso ai, 5 dias é o mínimo, lets GO!';
        break;
        case 6:
            funnyPhrase = 'É, 6 dias não é pra todo mundo...';
        break;
        case 7:
            funnyPhrase = 'Wooow! Todo dia? WTF?!';
        break;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>{funnyPhrase}</Text>
            <Text style={[styles.headerText, styles.boldText]}>Qual seu nível hoje?</Text>

            <View style={styles.levelArea}>
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
        workoutDays: state.user.workoutDays,
    }
}


export default connect(mapStateToProps, { setLevel })(StarterLevel);