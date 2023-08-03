import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { resetState } from '@/shared/lib';
import { INITIAL_CITY } from '../const';


type initialStateType = {
  city: CitiesType;
}

const initialState: initialStateType = {
  city: INITIAL_CITY,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<{ city: CitiesType }>) {
      state.city = action.payload.city;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, (state) => {
      state.city = INITIAL_CITY;
    });
  }
});

export const { changeCity } = citySlice.actions;
