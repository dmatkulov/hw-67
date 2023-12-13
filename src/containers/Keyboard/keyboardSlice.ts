import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DoorState {
  input: string;
  password: string;
  success: boolean;
  error: boolean;
  warning: boolean;
}

const initialState: DoorState = {
  input: '',
  password: '1234',
  success: false,
  error: false,
  warning: false,
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    pressKey: (state, action: PayloadAction<string>) => {
      if (state.warning) {
        return;
      }
      if (state.error) {
        return;
      }
      
      state.input += action.payload;
      state.warning = state.input.length > 4;
    },
    removeLastChar: (state) => {
      state.input = state.input.slice(0, -1);
      state.warning = false;
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
      state.warning = false;
    },
  }
});

export const keyboardReducer = keyboardSlice.reducer;

export const {
  pressKey,
  removeLastChar,
  checkPassword,
  clearInput,
} = keyboardSlice.actions;