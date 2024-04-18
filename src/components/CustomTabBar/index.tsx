import React from "react";
import styles from "./styles";
import { SafeAreaView, View, TouchableHighlight, Image, Text} from "react-native";

export default (props) => {

    return (
        <SafeAreaView style={styles.tabBarArea}>
            {props.items.map(item=>(
                <View key={item.route} style={styles.tabBarItem}>
                    {item.type == 'regular' &&
                        <TouchableHighlight underlayColor="transparent" style={styles.tabRegular} onPress={()=> props.navigation.navigate(item.route)}>
                            <>
                                <Image source={item.icon} style={styles.tabRegularImage} />
                                <Text>{item.text}</Text>
                            </>
                        </TouchableHighlight>
                    }

                    {item.type == 'big' &&
                        <TouchableHighlight underlayColor="#00FF00" style={styles.tabBig} onPress={()=> props.navigation.navigate(item.route)}>
                            <Image source={item.icon} style={styles.tabBigImage} />
                        </TouchableHighlight>
                    }
                </View>
            ))}
        </SafeAreaView>
    )
}  