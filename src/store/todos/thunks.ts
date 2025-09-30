import { createAsyncThunk } from '@reduxjs/toolkit';
import { todosApi } from '@/utils/api';
import { TODOS_KEY } from '@/store/store-keys';
import { GroupType, AddGroupType, EditGroupType, TaskType, AddTaskType, EditTaskType } from '@/types/todos';

// получение списка групп
export const getGroupsThunk = createAsyncThunk<GroupType[]>(
  `${TODOS_KEY}/getGroupsThunk`,
  async () => await todosApi.get('/group/list')
);

// добавление группы
export const addGroupThunk = createAsyncThunk<GroupType[], AddGroupType>(
  `${TODOS_KEY}/addGroupThunk`,
  async (body) => await todosApi.post('/group', body)
);

// редактирование группы
export const editGroupThunk = createAsyncThunk<GroupType[], EditGroupType>(
  `${TODOS_KEY}/editGroupThunk`,
  async ({ id, data }) => await todosApi.patch(`/group/${id}`, data)
);

// удаление групп
export const deleteGroupThunk = createAsyncThunk<GroupType[], string[]>(
  `${TODOS_KEY}/deleteGroupsThunk`,
  async (data) => await todosApi.delete('/group', { data })
);

// получение списка задач
export const getTasksThunk = createAsyncThunk<TaskType[]>(
  `${TODOS_KEY}/getTasksThunk`,
  async () => await todosApi.get('/task/list')
);

// добавление задачи
export const addTaskThunk = createAsyncThunk<TaskType[], AddTaskType>(
  `${TODOS_KEY}/addTaskThunk`,
  async (body) => await todosApi.post('/task', body)
);

// редактирование задачи
export const editTaskThunk = createAsyncThunk<TaskType[], EditTaskType>(
  `${TODOS_KEY}/editTaskThunk`,
  async ({ taskId, description }) => await todosApi.patch(`/task/${taskId}`, { description })
);

// удаление задачи
export const deleteTaskThunk = createAsyncThunk<TaskType[], string[]>(
  `${TODOS_KEY}/deleteTaskThunk`,
  async (data) => await todosApi.delete('/task', { data })
);

// завершение задачи
export const doneTaskThunk = createAsyncThunk<TaskType[], string>(
  `${TODOS_KEY}/doneTaskThunk`,
  async (taskId) => await todosApi.patch(`/task/done/${taskId}`)
);
