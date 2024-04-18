import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabBarArea: {
        flexDirection: 'row',
        backgroundColor: '#EEE',
    },
    tabBarItem: {
        flex: 1,
        height: 65,
        alignItems: 'center'
    },
    tabRegular: {
        alignItems: 'center',
    },
    tabRegularImage: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginBottom: 5
    },
    tabBig: {
        width: 100,
        height: 100,
        backgroundColor: '#3ba237',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#FFF',
        marginTop: -50
    },
    tabBigImage: {
        width: 40,
        height: 40
    }
});

export default styles;