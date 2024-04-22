import React, { useState, useEffect, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, View,  Text, TouchableHighlight } from "react-native";

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth /3;

export default (props) => {

    const MonthRef = useRef();

    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

    const handleScrollEnd = (e) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetMonth = Math.round(posX / thirdW);
        setSelectedMonth(targetMonth);
    }

    const scrollToMonth = (m) => {
        let posX = m * thirdW;
        MonthRef.current.scrollTo({x:posX, y:0, animated:true});
    }

    useEffect(()=> {
        setTimeout(()=> {
            props.setSelectedMonth(selectedMonth);
        }, 10);
    }, [selectedMonth]);

    useEffect(() => {
        scrollToMonth(selectedMonth);
    }, [props.selectedMonth]);

    return (
        <ScrollView
            ref={MonthRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdW}
            style={styles.scrollArea}
            contentContainerStyle={{paddingHorizontal: thirdW}}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, k)=> (
                <TouchableHighlight key={k} style={styles.monthButton} onPress={()=>setSelectedMonth(k)} underlayColor="transparent">
                    <View style={[styles.monthItem, k===selectedMonth?{
                        backgroundColor: '#BBB',
                        width: '100%',
                        height: 40
                    }:{}]}>
                        <Text>{m}</Text>
                    </View>
                </TouchableHighlight>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollArea: {
        width: '100%',
        height: 60
    },
    monthButton: {
        width: thirdW,
        justifyContent: 'center',
        alignItems: 'center'
    },
    monthItem: {
        width: '90%',
        height: 30,
        backgroundColor: '#DDD',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})