import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 35,
        backgroundColor: '#FFF'
    },
    headerText: {
        fontSize: 22,
        color: '#333',
        marginVertical: 50,

    },
    nameInput: {
        borderWidth: 1,
        borderColor: '#CCC',
        width: '100%',
        height: 50,
        borderRadius: 10,
        fontSize: 16,
        padding: 10
    }

});

export default styles;