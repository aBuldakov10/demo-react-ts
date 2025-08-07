import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';
import { GroupsType, AddGroup, EditGroup } from '@/types/todos';

// получение списка групп
export const getGroupsThunk = createAsyncThunk<GroupsType[]>(
  'todos/getGroupsThunk',
  async () => await api.get('/group/list')
);

// добавление группы
export const addGroupThunk = createAsyncThunk<GroupsType[], AddGroup>(
  'todos/addGroupThunk',
  async (body) => await api.post('/group', body)
);

// редактирование группы
export const editGroupThunk = createAsyncThunk<GroupsType[], EditGroup>(
  'todos/editGroupThunk',
  async ({ id, data }) => await api.patch(`/group/${id}`, data)
);

// удаление групп
export const deleteGroupThunk = createAsyncThunk<GroupsType[], string[]>(
  'todos/deleteGroupsThunk',
  async (data) => await api.delete('/group', { data })
);
