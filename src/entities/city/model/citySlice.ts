import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { resetState } from '@/shared/lib';
import { INITIAL_CITY } from '../const';


type initialStateType = {
  currentCity: CitiesType;
}

const initialState: initialStateType = {
  currentCity: INITIAL_CITY,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<{ city: CitiesType }>) {
      state.currentCity = action.payload.city;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetState, (state) => {
        state.currentCity = INITIAL_CITY;
      });
  }
});

export const { changeCity } = citySlice.actions;
