import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }, 
    configButton: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    configButtonImage: {
        width: 25,
        height: 25
    },
    legendArea: {
        width: '90%',
        alignItems: 'flex-start',
        marginTop: 30,

    },
    legendText: {
        color: '#555'
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    legendBox: {
        width: 15,
        height: 15,
        backgroundColor: '#CCC',
        marginRight: 5
    }
});

export default styles;