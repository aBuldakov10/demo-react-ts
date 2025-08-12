import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';
import { GroupType, AddGroupType, EditGroupType, TaskType, AddTaskType, EditTaskType } from '@/types/todos';

// получение списка групп
export const getGroupsThunk = createAsyncThunk<GroupType[]>(
  'todos/getGroupsThunk',
  async () => await api.get('/group/list')
);

// добавление группы
export const addGroupThunk = createAsyncThunk<GroupType[], AddGroupType>(
  'todos/addGroupThunk',
  async (body) => await api.post('/group', body)
);

// редактирование группы
export const editGroupThunk = createAsyncThunk<GroupType[], EditGroupType>(
  'todos/editGroupThunk',
  async ({ id, data }) => await api.patch(`/group/${id}`, data)
);

// удаление групп
export const deleteGroupThunk = createAsyncThunk<GroupType[], string[]>(
  'todos/deleteGroupsThunk',
  async (data) => await api.delete('/group', { data })
);

// получение списка задач
export const getTasksThunk = createAsyncThunk<TaskType[]>(
  'todos/getTasksThunk',
  async () => await api.get('/task/list')
);

// добавление задачи
export const addTaskThunk = createAsyncThunk<TaskType[], AddTaskType>(
  'todos/addTaskThunk',
  async (body) => await api.post('/task', body)
);

// редактирование задачи
export const editTaskThunk = createAsyncThunk<TaskType[], EditTaskType>(
  'todos/editTaskThunk',
  async ({ taskId, description }) => await api.patch(`/task/${taskId}`, { description })
);

// удаление задачи
export const deleteTaskThunk = createAsyncThunk<TaskType[], string>(
  'todos/deleteTaskThunk',
  async (taskId) => await api.delete(`/task/${taskId}`)
);

// завершение задачи
export const doneTaskThunk = createAsyncThunk<TaskType[], string>(
  'todos/doneTaskThunk',
  async (taskId) => await api.patch(`/task/done/${taskId}`)
);
