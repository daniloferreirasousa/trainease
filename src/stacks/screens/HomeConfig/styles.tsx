import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
    },
    textLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    }, 
    nameInput: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        width: '100%',
        height: 50,
        fontSize: 16,
        padding: 10,
    },
    listArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayItem: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#DDD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dayItemText: {

    }
});

export default styles;