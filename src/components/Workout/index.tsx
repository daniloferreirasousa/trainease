import React, { useState } from "react";
import { View, Text, ScrollView, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import useMuscleImage from "./useMuscleImage";

const Workout = (props) => {

    const [included, setIncluded] = useState(false);

    let muscleGroup = [];
    for(i in props.data.exercises) {
        if(!muscleGroup.includes(props.data.exercises[i].muscle)) {
            muscleGroup.push(props.data.exercises[i].muscle);
        }
    }

    const addWorkout = () => {
        setIncluded(!included);
        props.addAction();
    }

    return (
        <View style={styles.container}>
            <View style={styles.workoutInfo}>
                <Text style={styles.workoutTitle}>{props.data.name}</Text>
                <ScrollView horizontal={true} style={styles.muscleSroll}>
                    {muscleGroup.map((muscle, index)=>(
                        <View style={styles.muscleGroup} key={index}>
                            <Image source={useMuscleImage(muscle)} style={styles.muscleImage} />
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.workoutActions}>
                <TouchableHighlight style={styles.workoutButton} underlayColor='transparent' onPress={()=>addWorkout()}>
                    <Image source={included?require('../../assets/check-black.png'):require('../../assets/add.png')} style={styles.workoutImage}/>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default Workout;