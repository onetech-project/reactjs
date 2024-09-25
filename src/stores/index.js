import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import reducers from './reducers';
import { encryptTransform } from 'redux-persist-transform-encrypt';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
  transforms: [
    createFilter('authReducer', ['auth']),
    encryptTransform({
      secretKey: process.env.REACT_APP_KEY_STORE,
      onError: function (error) {
        console.log(error);
      }
    }),
  ]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
