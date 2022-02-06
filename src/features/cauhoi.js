import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Math.random(),
    cauHoi: "Hôm nay là thứ mấy?",
    cauDung: "Thứ high",
    cauSai: ["Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu"],
  },
];

export const cauhoi = createSlice({
  name: "cauhoi",
  initialState,
  reducers: {
    save: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { save } = cauhoi.actions;

export default cauhoi.reducer;
