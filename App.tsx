import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import MainStack from "./src/stacks/navigators/MainStack";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <MainStack />
      </PersistGate>
    </Provider>
  );
}

export default App;