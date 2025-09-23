import { createAsyncThunk } from '@reduxjs/toolkit';
import { todosApi } from '@/utils/api';
import { GroupType, AddGroupType, EditGroupType, TaskType, AddTaskType, EditTaskType } from '@/types/todos';

// получение списка групп
export const getGroupsThunk = createAsyncThunk<GroupType[]>(
  'todos/getGroupsThunk',
  async () => await todosApi.get('/group/list')
);

// добавление группы
export const addGroupThunk = createAsyncThunk<GroupType[], AddGroupType>(
  'todos/addGroupThunk',
  async (body) => await todosApi.post('/group', body)
);

// редактирование группы
export const editGroupThunk = createAsyncThunk<GroupType[], EditGroupType>(
  'todos/editGroupThunk',
  async ({ id, data }) => await todosApi.patch(`/group/${id}`, data)
);

// удаление групп
export const deleteGroupThunk = createAsyncThunk<GroupType[], string[]>(
  'todos/deleteGroupsThunk',
  async (data) => await todosApi.delete('/group', { data })
);

// получение списка задач
export const getTasksThunk = createAsyncThunk<TaskType[]>(
  'todos/getTasksThunk',
  async () => await todosApi.get('/task/list')
);

// добавление задачи
export const addTaskThunk = createAsyncThunk<TaskType[], AddTaskType>(
  'todos/addTaskThunk',
  async (body) => await todosApi.post('/task', body)
);

// редактирование задачи
export const editTaskThunk = createAsyncThunk<TaskType[], EditTaskType>(
  'todos/editTaskThunk',
  async ({ taskId, description }) => await todosApi.patch(`/task/${taskId}`, { description })
);

// удаление задачи
export const deleteTaskThunk = createAsyncThunk<TaskType[], string[]>(
  'todos/deleteTaskThunk',
  async (data) => await todosApi.delete('/task', { data })
);

// завершение задачи
export const doneTaskThunk = createAsyncThunk<TaskType[], string>(
  'todos/doneTaskThunk',
  async (taskId) => await todosApi.patch(`/task/done/${taskId}`)
);
