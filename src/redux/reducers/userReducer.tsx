import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    name: string,
    level: string, //beginner' | 'intermediate' | 'advanced'
    workoutDays: number[], // 0-6 (Semana começa no Domingo)
    myWorkouts: [],
    lastWorkout: string | null, // ID
    dailyProgress: string[],
}
const initialState: User = {
    name: '',
    level: '',
    workoutDays: [],
    myWorkouts: [],
    lastWorkout: null,
    dailyProgress: []
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<{name: string}>) => {
            state.name = action.payload.name;
        },
        setWorkoutDays: (state, action: PayloadAction<{workoutDays: number[]}>) => {
            state.workoutDays = action.payload.workoutDays;
        },
        setLevel: (state, action: PayloadAction<{level: string}>) => {
            state.level = action.payload.level;
        },
        addWorkout: (state, action: PayloadAction<{workout}>) => {
            if(state.myWorkouts.findIndex(i => i.id === action.payload.workout.id) < 0) {
                state.myWorkouts.push(action.payload.workout);
            }
        },
        delWorkout: (state, action: PayloadAction<{workout}>) => {
            state.myWorkouts = state.myWorkouts.filter(i => i.id != action.payload.workout.id);
        },
        addProgress: (state, action: PayloadAction<{date}>) => {
            if(!state.dailyProgress.includes(action.payload.date)) {
                state.dailyProgress.push(action.payload.date);
            }
        },
        delProgress: (state, action: PayloadAction<{date}>) => {
            state.dailyProgress = state.dailyProgress.filter(i => i != action.payload.date);
        }
    }
});

export const { setName, setWorkoutDays, setLevel, addWorkout, delWorkout, addProgress, delProgress } = slice.actions;

export default slice.reducer;