import { configureStore } from '@reduxjs/toolkit';
// import { persistedReducer } from './AppSlice';


export const store = configureStore({
  reducer: 	{
		// phonebook: persistedReducer,
	},
});

