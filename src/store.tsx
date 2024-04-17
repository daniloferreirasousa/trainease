import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RootReducer from "./redux/reducers";


const configPersist = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(configPersist, RootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;