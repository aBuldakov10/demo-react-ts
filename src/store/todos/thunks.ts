import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';

// получение списка групп
export const getGroupsThunk = createAsyncThunk<{ id: string; groupTitle: string; color: string }[]>(
  'todos/getGroupsThunk',
  async () => await api.get(`/groups`)
);
