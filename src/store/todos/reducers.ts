import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addGroupThunk, addTaskThunk, deleteGroupThunk, editGroupThunk, getGroupsThunk, getTasksThunk } from './thunks';
import { GroupType, TaskType } from '@/types/todos';
import { formatFromUTC } from '@/utils/functions';

interface Todos {
  groups: GroupType[];
  selectedGroupId: string | null;
  tasks: TaskType[];
  filteredTasks: TaskType[];
  groupCount: null | number;
  taskCount: null | number;
}

const initialState: Todos = {
  groups: [
    { id: 'c5f7385d-7ffd-46de-bd88-0839feb0989a', groupTitle: 'group 1', color: '#f5222d' },
    { id: '8f2b59c9-3939-4634-bbc1-473101ed89dc', groupTitle: 'group 2', color: '#52c41a' },
    { id: '7b5b3506-f7b9-4836-ba2a-aae695eb87db', groupTitle: 'group 3', color: '#1890ff' },
    { id: '2d373765-d9c7-4415-b664-689e6d0b6bb7', groupTitle: 'group 4', color: '#fa8c16' },
    { id: 'e65e626c-cb2b-497c-a3f6-24dd80476366', groupTitle: 'group 5', color: '#722ed1' },
    { id: '352d9d12-0d72-4947-854a-b485c2c8f44b', groupTitle: 'group 6', color: '#722ed1' },
    { id: 'a21c589a-bd7e-4dbe-b872-49ec138524a4', groupTitle: 'group 7', color: '#722ed1' },
    { id: 'f3522b47-0929-4ef2-a10e-2b8e801aeb50', groupTitle: 'group 8', color: '#722ed1' },
    { id: 'fa458613-d480-42eb-823b-825e7f722554', groupTitle: 'group 9', color: '#722ed1' },
    { id: '83941240-81e7-4b23-928c-3a6881bb3e1e', groupTitle: 'group 10', color: '#722ed1' },
    { id: '933ef861-d4c2-4401-a556-d4b31e0ca3c6', groupTitle: 'group 11', color: '#722ed1' },
  ],
  selectedGroupId: null, // понадобится потом при редактировании, удалении, создании задачи
  tasks: [
    {
      id: 'a001142e-16aa-4593-81d1-79a5c3e3716c',
      taskTitle: 'task 11',
      description: 'description 11',
      createDate: '12/12/1212',
      editDate: '10.52',
      isEdited: false,
      isDone: false,
      groupId: 'c5f7385d-7ffd-46de-bd88-0839feb0989a',
    },
    {
      id: 'd72a4109-5b8e-421a-94c5-027f5ade8ec5',
      taskTitle: 'task 22',
      description: 'description 22',
      createDate: '12/12/1212',
      editDate: '11.52',
      isEdited: true,
      isDone: false,
      groupId: 'c5f7385d-7ffd-46de-bd88-0839feb0989a',
    },
    {
      id: 'cc5a6b38-a4db-40b7-9498-1c668aeff545',
      taskTitle: 'task 33',
      description: 'description 33',
      createDate: '12/12/1212',
      editDate: '12.52',
      isEdited: false,
      isDone: true,
      groupId: '8f2b59c9-3939-4634-bbc1-473101ed89dc',
    },
    {
      id: '7e698821-8606-45af-84f0-26c70c2b580f',
      taskTitle: 'task 44',
      description: 'description 44',
      createDate: '12/12/1212',
      editDate: '13.52',
      isEdited: true,
      isDone: true,
      groupId: '8f2b59c9-3939-4634-bbc1-473101ed89dc',
    },
    {
      id: '1fa24c94-e984-41f1-94c3-6d17bfb490d0',
      taskTitle: 'task 55',
      description: 'description 55',
      createDate: '12/12/1212',
      editDate: '14.52',
      isEdited: false,
      isDone: false,
      groupId: '7b5b3506-f7b9-4836-ba2a-aae695eb87db',
    },
    {
      id: '814b6db8-7439-44e3-a968-ebd01b7a280d',
      taskTitle: 'task 66',
      description: 'description 66',
      createDate: '12/12/1212',
      editDate: '15.52',
      isEdited: false,
      isDone: true,
      groupId: '7b5b3506-f7b9-4836-ba2a-aae695eb87db',
    },
    {
      id: '48b4e1db-84d3-4f95-b30a-570c17040025',
      taskTitle: 'task 77',
      description: 'description 77',
      createDate: '12/12/1212',
      editDate: '16.52',
      isEdited: false,
      isDone: false,
      groupId: '2d373765-d9c7-4415-b664-689e6d0b6bb7',
    },
    {
      id: '23af2cf1-3546-47b9-bb01-99e51217e817',
      taskTitle: 'task 88',
      description: 'description 88',
      createDate: '12/12/1212',
      editDate: '17.52',
      isEdited: true,
      isDone: false,
      groupId: '2d373765-d9c7-4415-b664-689e6d0b6bb7',
    },
    {
      id: '475163f2-cb66-4aa3-9689-736ba0a2fadc',
      taskTitle: 'task 99',
      description: 'description 99',
      createDate: '12/12/1212',
      editDate: '18.52',
      isEdited: false,
      isDone: false,
      groupId: 'e65e626c-cb2b-497c-a3f6-24dd80476366',
    },
    {
      id: '7b0f350c-8656-4ae8-b504-73a9e4b98925',
      taskTitle: 'task 100',
      description: 'description 100',
      createDate: '12/12/1212',
      editDate: '19.52',
      isEdited: true,
      isDone: true,
      groupId: 'e65e626c-cb2b-497c-a3f6-24dd80476366',
    },
  ],
  filteredTasks: [
    {
      id: 'a001142e-16aa-4593-81d1-79a5c3e3716c',
      taskTitle: 'task 11',
      description: 'description 11',
      createDate: '12/12/1212',
      editDate: '10.52',
      isEdited: false,
      isDone: false,
      groupId: 'c5f7385d-7ffd-46de-bd88-0839feb0989a',
    },
    {
      id: 'd72a4109-5b8e-421a-94c5-027f5ade8ec5',
      taskTitle: 'task 22',
      description: 'description 22',
      createDate: '12/12/1212',
      editDate: '11.52',
      isEdited: true,
      isDone: false,
      groupId: 'c5f7385d-7ffd-46de-bd88-0839feb0989a',
    },
    {
      id: 'cc5a6b38-a4db-40b7-9498-1c668aeff545',
      taskTitle: 'task 33',
      description: 'description 33',
      createDate: '12/12/1212',
      editDate: '12.52',
      isEdited: false,
      isDone: true,
      groupId: '8f2b59c9-3939-4634-bbc1-473101ed89dc',
    },
    {
      id: '7e698821-8606-45af-84f0-26c70c2b580f',
      taskTitle: 'task 44',
      description: 'description 44',
      createDate: '12/12/1212',
      editDate: '13.52',
      isEdited: true,
      isDone: true,
      groupId: '8f2b59c9-3939-4634-bbc1-473101ed89dc',
    },
    {
      id: '1fa24c94-e984-41f1-94c3-6d17bfb490d0',
      taskTitle: 'task 55',
      description: 'description 55',
      createDate: '12/12/1212',
      editDate: '14.52',
      isEdited: false,
      isDone: false,
      groupId: '7b5b3506-f7b9-4836-ba2a-aae695eb87db',
    },
    {
      id: '814b6db8-7439-44e3-a968-ebd01b7a280d',
      taskTitle: 'task 66',
      description: 'description 66',
      createDate: '12/12/1212',
      editDate: '15.52',
      isEdited: false,
      isDone: true,
      groupId: '7b5b3506-f7b9-4836-ba2a-aae695eb87db',
    },
    {
      id: '48b4e1db-84d3-4f95-b30a-570c17040025',
      taskTitle: 'task 77',
      description: 'description 77',
      createDate: '12/12/1212',
      editDate: '16.52',
      isEdited: false,
      isDone: false,
      groupId: '2d373765-d9c7-4415-b664-689e6d0b6bb7',
    },
    {
      id: '23af2cf1-3546-47b9-bb01-99e51217e817',
      taskTitle: 'task 88',
      description: 'description 88',
      createDate: '12/12/1212',
      editDate: '17.52',
      isEdited: true,
      isDone: false,
      groupId: '2d373765-d9c7-4415-b664-689e6d0b6bb7',
    },
    {
      id: '475163f2-cb66-4aa3-9689-736ba0a2fadc',
      taskTitle: 'task 99',
      description: 'description 99',
      createDate: '12/12/1212',
      editDate: '18.52',
      isEdited: false,
      isDone: false,
      groupId: 'e65e626c-cb2b-497c-a3f6-24dd80476366',
    },
    {
      id: '7b0f350c-8656-4ae8-b504-73a9e4b98925',
      taskTitle: 'task 100',
      description: 'description 100',
      createDate: '12/12/1212',
      editDate: '19.52',
      isEdited: true,
      isDone: true,
      groupId: 'e65e626c-cb2b-497c-a3f6-24dd80476366',
    },
  ],
  groupCount: null,
  taskCount: null,
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    selectGroup(state, { payload }: PayloadAction<string>) {
      if (payload === '0') {
        state.filteredTasks = state.tasks;
        state.selectedGroupId = null;
        state.taskCount = state.tasks.length;
      } else {
        const id = state.groups[+payload - 1].id; // id выбранной группы

        state.filteredTasks = state.tasks.filter(({ groupId }) => groupId === id);
        state.selectedGroupId = id;
        state.taskCount = state.filteredTasks.length;
      }
    },
  },
  extraReducers: (builder) => {
    // получение списка групп
    builder
      .addCase(getGroupsThunk.pending, () => {})
      .addCase(getGroupsThunk.fulfilled, (state, { payload }) => {
        state.groups = payload;
        state.groupCount = payload?.length;
      })
      .addCase(getGroupsThunk.rejected, () => {});

    // добавление группы
    builder
      .addCase(addGroupThunk.pending, () => {})
      .addCase(addGroupThunk.fulfilled, (state, { payload }) => {
        state.groups = payload;
        state.groupCount = payload?.length;
      })
      .addCase(addGroupThunk.rejected, () => {});

    // редактирование группы
    builder
      .addCase(editGroupThunk.pending, () => {})
      .addCase(editGroupThunk.fulfilled, (state, { payload }) => {
        state.groups = payload;
      })
      .addCase(editGroupThunk.rejected, () => {});

    // удаление группы
    builder
      .addCase(deleteGroupThunk.pending, () => {})
      .addCase(deleteGroupThunk.fulfilled, (state, { payload }) => {
        state.groups = payload;
        state.groupCount = payload?.length;
      })
      .addCase(deleteGroupThunk.rejected, () => {});

    // получение списка задач
    builder
      .addCase(getTasksThunk.pending, () => {})
      .addCase(getTasksThunk.fulfilled, (state, { payload }) => {
        state.tasks = formatFromUTC(payload);
        state.filteredTasks = formatFromUTC(payload); // поменять ?
        state.taskCount = formatFromUTC(payload)?.length;
      })
      .addCase(getTasksThunk.rejected, () => {});

    // добавление задачи
    builder
      .addCase(addTaskThunk.pending, () => {})
      .addCase(addTaskThunk.fulfilled, (state, { payload }) => {
        state.tasks = formatFromUTC(payload);
        state.filteredTasks = formatFromUTC(payload); // поменять ?
        state.taskCount = formatFromUTC(payload)?.length;
      })
      .addCase(addTaskThunk.rejected, () => {});
  },
});

export const { selectGroup } = todos.actions;

export default todos.reducer;
