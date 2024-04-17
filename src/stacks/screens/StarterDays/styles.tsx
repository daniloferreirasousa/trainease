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
        fontSize: 16,
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',

    },
    boldText: {
        fontWeight: 'bold',
    },
    daysArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    }

});

export default styles;