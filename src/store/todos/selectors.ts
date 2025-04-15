import { RootState } from '@/store';

export const groupsSelector = (state: RootState) => state.todos.groups;

export const filteredTasksSelector = (state: RootState) => state.todos.filteredTasks;

export const groupCountSelector = (state: RootState) => state.todos.groupCount;
export const taskCountSelector = (state: RootState) => state.todos.taskCount;
