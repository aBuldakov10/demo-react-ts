import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';
import { GroupsType, AddGroup, EditGroup } from '@/types/todos';

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

// редактирование группы
export const editGroupThunk = createAsyncThunk<GroupsType[], EditGroup>(
  'todos/editGroupThunk',
  async ({ id, data }) => await api.patch(`/groups/${id}`, data)
);
