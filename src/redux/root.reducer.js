import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { streetReducer } from "./reducers/street/street.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

export const rootReducer = combineReducers({
  street: streetReducer,
});

export default persistReducer(persistConfig, rootReducer);
