import React from "react";
import { TouchableHighlight, Text} from "react-native";
import styles from "./styles";

export default (props) => {
    const width = props.width ?? 'auto' ;
    const bgColor = props.bgColor?? '#EEE';
    const fontColor = props.fontColor ?? "#000";
    const underlayColor = props.underlayColor ?? '#000';
    const marginBottom = props.marginBottom ?? 0;
    const marginTop = props.marginTop ?? 0;

    return (
        <TouchableHighlight 
            onPress={props.onPress}
            style={
                [
                    styles.defaultButton,
                    {
                        width: width,
                        backgroundColor: bgColor,
                        marginBottom: marginBottom,
                        marginTop: marginTop
                    }
                ]
            }
            underlayColor={underlayColor}
        >

            <Text style={
                [
                    styles.buttonText,
                    {color: fontColor}
                ]
            }>
                {props.title}
            </Text>

        </TouchableHighlight>
    )
}