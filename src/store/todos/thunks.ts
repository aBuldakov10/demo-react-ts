import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';
import { AddGroup, GroupsType } from '@/types/todos';

// получение списка групп
export const getGroupsThunk = createAsyncThunk<GroupsType[]>(
  'todos/getGroupsThunk',
  async () => await api.get('/groups')
);

// добавление группы
export const addGroupThunk = createAsyncThunk<GroupsType[], AddGroup>(
  'todos/addGroupThunk',
  async (body) => await api.post('/groups', body)
);
