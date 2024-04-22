import React, { useState, useEffect, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, View,  Text, TouchableHighlight } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);
let dayW = Math.round(screenWidth / 9);
let offsetW = Math.round((screenWidth - dayW) / 2);

const Day = ({day, month, dailyProgress, workoutDays, onPress}) => {
    let bgColor = '#D4D4D4';
    let opacity = 1;


    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), month, day);

    if(workoutDays.includes( thisDate.getDay() )) {

        if(thisDate.getTime() < today.getTime()) {
            let thisYear = thisDate.getFullYear();
            let thisMonth = thisDate.getMonth() + 1;
            let thisDay = thisDate.getDate();
            thisMonth = (thisMonth<10)? `0${thisMonth}` : thisMonth ;
            thisDay = (thisDay<10)? `0${thisDay}` : thisDay;
            let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

            if(dailyProgress.includes(dFormated)) {
                bgColor = '#B5FFB8'; // Treinou
            } else {
                bgColor = '#FFB5B5'; // Não treinou
            }
        }

    } else {
        opacity = 0.2;
    }


    if(thisDate.getTime() == today.getTime()) {
        bgColor = '#B5EEFF';
        opacity = 1;
    }

    return (
        <TouchableHighlight
            style={styles.dayButton}
            onPress={onPress}
            underlayColor="transparent"
        >
            <View style={[styles.dayItem, {opacity, backgroundColor: bgColor}]}>
                <Text style={styles.dayText}>{day}</Text>
            </View>
        </TouchableHighlight>
    );
}


export default (props) => {
    const DayRef = useRef();

    const [selectedDay, setSelectedDay] = useState(props.selectedDay);

    const scrollToDay = (d) => {
        let posX = (d - 1) * dayW;
        DayRef.current.scrollTo({x:posX, y: 0, animated: true});
        props.setSelectedDay(d)
    }

    const daysScrollEndAction = (e) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetDay = Math.round(posX / dayW) + 1;
        setSelectedDay(targetDay);
    };

    let days = [];
    let daysInMonth = new Date(new Date().getFullYear(), (props.selectedMonth+1), 0).getDate();
    for(let i=1;i<=daysInMonth;i++) {
        days.push(i);
    }

    useEffect(()=>{
        props.setSelectedDay(selectedDay);
    }, [selectedDay]);

    useEffect(()=>{
        setTimeout(()=>{
            if(props.selectedMonth == new Date().getMonth()) {
                scrollToDay(new Date().getDate());
            } else {
                scrollToDay(1);
            }
        }, 10);
    }, [props.selectedMonth]);

    return (
        <ScrollView
            ref={DayRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={dayW}
            style={styles.scrollArea}
            contentContainerStyle={{paddingHorizontal: offsetW}}
            onMomentumScrollEnd={daysScrollEndAction}
        >
            {days.map((d, k)=> (
                <Day 
                    key={k}
                    day={d}
                    month={props.selectedMonth}
                    dailyProgress={props.dailyProgress}
                    workoutDays={props.workoutDays}
                    onPress={()=>scrollToDay(d)}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollArea: {
        width: '100%',
        height: 60
    },
    dayButton: {
        width: dayW,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayItem: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#EEE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {

    }
})