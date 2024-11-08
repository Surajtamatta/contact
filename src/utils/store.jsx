import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../redux/contact/formSlice';

const store = configureStore({
  reducer: {
    contact: formReducer
  }
});

export default store;
