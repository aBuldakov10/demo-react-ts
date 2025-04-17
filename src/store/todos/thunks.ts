import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';
import { GroupsType } from '@/types/todos';

// получение списка групп
export const getGroupsThunk = createAsyncThunk<GroupsType[]>(
  'todos/getGroupsThunk',
  async () => await api.get('/groups')
);
