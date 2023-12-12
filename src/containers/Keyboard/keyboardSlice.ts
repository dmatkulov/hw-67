import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DoorState {
  input: string;
  password: string;
  success: boolean;
  error: boolean;
}

const initialState: DoorState = {
  input: '',
  password: '1234',
  success: false,
  error: false,
};

export const keyboardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    pressKey: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
    },
    removeLastChar: (state) => {
      state.input = state.input.slice(0, -1);
    },
    checkPassword: (state) => {
      if (state.input === state.password) {
        state.success = true;
      } else {
        state.error = true;
      }
    },
    clearInput: (state) => {
      state.input = '';
      state.success = false;
      state.error = false;
    }
  }
});

export const keyboardReducer = keyboardSlice.reducer;

export const {
  pressKey,
  removeLastChar,
  checkPassword,
  clearInput
} = keyboardSlice.actions;