import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#DDD',
    },
        workoutInfo: {
            flex: 1,
        },
            workoutTitle:{
                fontSize: 17,
                margin: 10
            },
            muscleSroll: {
                margin: 10
            },
                muscleGroup: {
                    width: 40,
                    height: 40,
                    backgroundColor: '#FFCC98',
                    borderRadius: 5,
                    marginRight: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                    muscleImage: {
                        width: 30,
                        height: 30,
                    },
        workoutActions: {
            justifyContent: 'center'
        },
            workoutButton: {
                width: 25,
                height: 25,
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center'
            },
            workoutImage: {
                width: 25,
                height: 25
            }
});

export default styles;