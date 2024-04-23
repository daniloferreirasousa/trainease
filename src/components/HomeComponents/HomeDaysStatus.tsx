import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import DefaultButton from "../DefaultButton";


export default (props) => {

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), props.selectedMonth, props.selectedDay);
    
    let thisYear = thisDate.getFullYear();
    let thisMonth = thisDate.getMonth() + 1;
    let thisDay = thisDate.getDate();
    thisMonth = (thisMonth<10)? `0${thisMonth}` : thisMonth ;
    thisDay = (thisDay<10)? `0${thisDay}` : thisDay;
    let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

    let dayOff = false;
    let isToday = false;
    let isFuture = false;
    let isDone = false;    

    if(!props.workoutDays.includes(thisDate.getDay())) {
        dayOff = true;
    } else if(thisDate.getTime() > today.getTime()) {
        isFuture = true;
    } else {
        if(props.dailyProgress.includes(dFormated)) {
            isDone = true;
        } else {
            isDone = false;
        }
    }

    if(thisDate.getTime() == today.getTime()) {
        isToday = true;
    }

    const setDone = () => {
        props.addProgress({date: dFormated});
    }

    const setUnDone = () => {
        props.delProgress({date: dFormated});
    }


    const [timeLeft, setTimeLeft] = useState('');

    useEffect(()=> {
        const timerFunction = () => {
            let now = Date.now();
            let endToday = new Date();
            endToday.setHours(23);
            endToday.setMinutes(59);
            endToday.setSeconds(59);
            endToday = endToday.getTime();

            let diff = endToday - now;

            let h = Math.floor(diff / (1000 * 60 * 60));
            let m = Math.floor((diff / (1000 * 60) - (h * 60)));
            let s = Math.floor((diff/1000) - (m*60) - ((h*60)*60));

            h = h<10?`0${h}`:h;
            m = m<10?`0${m}`:m;
            s = s<10?`0${s}`:s;

            setTimeLeft(`${h}h ${m}m ${s}s`)
        }
        let timer = setInterval(timerFunction, 1000);
        timerFunction();

        return () => clearInterval(timer);

    }, []);

    return (
        <> 
            <View style={styles.triangle}></View>
            <View style={styles.ballonArea}>
                {dayOff &&
                    <Text style={styles.ballonBigText}>Dia de Descanso</Text>
                }
                {isFuture &&
                    <Text style={styles.ballonBigText}>Data no Futuro</Text>
                }
                {!dayOff && !isFuture && isDone &&
                    <>
                        <Text style={styles.ballonBigText}><Text style={styles.textBold}>Parabéns</Text>, você treinou!</Text>
                        <DefaultButton
                            title="DESMARCAR"
                            fontColor="#FFF"
                            bgColor="#4AC34E" 
                            marginTop={20}
                            underlayColor="#4AC34E"
                            onPress={setUnDone}
                        />
                    </>
                }
                {!dayOff && !isFuture && !isDone && !isToday &&
                    <>
                        <Text style={styles.ballonBigText}><Text style={styles.textBold}>Fraco!</Text> Você falhou neste dia.</Text>
                        <DefaultButton
                            title="MARCAR COMO FEITO"
                            fontColor="#FFF"
                            bgColor="#4AC34E" 
                            marginTop={20}
                            onPress={setDone}
                            underlayColor="#4AC34E"
                        />
                    </>
                    
                }
                {!dayOff && !isFuture && !isDone && isToday &&
                    <>
                        <Text style={[styles.ballonBigText, styles.textBold]}>HOJE TEM TREINO 🚀</Text>
                        <Text style={styles.ballonText}>Você tem {timeLeft} para treinar</Text>
                        <DefaultButton
                            title="INICIAR TREINO"
                            fontColor="#FFF"
                            bgColor="#4AC34E" 
                            marginTop={20}
                            onPress={props.gotToWorkout}
                            underlayColor="#4AC34E"
                        />
                    </>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        borderLeftColor: 'transparent',
        borderLeftWidth: 15,
        borderBottomWidth: 15,
        borderBottomColor: '#D5D5D5',
        borderRightWidth: 15,
        borderRightColor: 'transparent',
    },
    ballonArea: {
        width: '90%',
        padding: 20,
        backgroundColor: '#D5D5D5',
        borderRadius: 10,
    },
    ballonBigText: {
        fontSize: 15,
        alignSelf: 'center',

    },
    ballonText: {
        fontSize: 13,
        alignSelf: 'center',
        marginTop: 10
    },
    ballonButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    textBold: {
        fontWeight: 'bold'
    }
    
});
