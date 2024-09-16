import { configureStore } from "@reduxjs/toolkit";
import { REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistStore, persistReducer, FLUSH } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReduser from "./contactsSlice";
import filtersReduser from "./filtersSlice";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReduser),
  filters: filtersReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
