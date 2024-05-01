import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  // other user properties...
};

const userReducer = createSlice({
  name: "user",
  initialState: {
    value: null,
  },

  reducers: {
    saveuser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveuser } = userReducer.actions;

export default userReducer.reducer;
