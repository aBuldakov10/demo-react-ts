import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todos {
  groups: string[];
}

const initialState: Todos = {
  groups: [],
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getGroups(state, { payload }: PayloadAction<string>) {
      if (payload) {
        state.groups = [...state.groups, payload];
      }
    },
  },
});

export const { getGroups } = todos.actions;
export default todos.reducer;
