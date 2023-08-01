import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_CITY } from '../const';

type initialStateType = {
  city: CityTypes;
}

const initialState: initialStateType = {
  city: INITIAL_CITY,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCurrentCity(state, action: { type: string; payload: { city: CityTypes } }) {
      state.city = action.payload.city;
    },
    resetCurrentCity(state) {
      state.city = INITIAL_CITY;
    }
  }
});

export const { changeCurrentCity, resetCurrentCity } = citySlice.actions;
