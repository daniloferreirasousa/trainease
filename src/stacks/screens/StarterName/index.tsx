import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TextInput, Button} from "react-native";
import styles from "./styles";
import { setName } from "../../../redux/reducers/userReducer";

const StarterName = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const nextAction = () => {
        if(!props.name) {
            alert('Você precisa de um nome!');
            return;
        }

        navigation.navigate('StarterDays');
    }

    const handleChangeName = (t) => {
        dispatch(setName({name: t}));
        props.navigation.setParams({name: t})
    }

    navigation.setOptions({
        title: '',
        headerRight: () => (
            <Button title="Próximo" onPress={nextAction}/>
        ),
        headerRightContainerStyle: {
            marginRight: 10
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Qual é o seu nome?</Text>
            <TextInput 
                style={styles.nameInput}
                value={props.name}
                onChangeText={handleChangeName}
                autoFocus={true}
                autoCapitalize="words"
                onSubmitEditing={nextAction}
            />
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.user.name
    }
}


export default connect(mapStateToProps, { setName })(StarterName);