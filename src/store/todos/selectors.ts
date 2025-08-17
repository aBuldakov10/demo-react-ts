import { RootState } from '../store';

export const groupsSelector = (state: RootState) => state.todos.groups;

export const filteredTasksSelector = (state: RootState) => state.todos.filteredTasks;

export const selectedTaskIdSelector = (state: RootState) => state.todos.selectedTaskId;
export const selectedGroupIdSelector = (state: RootState) => state.todos.selectedGroupId;
export const selectedTabSelector = (state: RootState) => state.todos.selectedTab;

export const filteredSelector = (state: RootState) => state.todos.filtered;
export const sortedSelector = (state: RootState) => state.todos.sorted;

export const groupCountSelector = (state: RootState) => state.todos.groupCount;
export const taskCountSelector = (state: RootState) => state.todos.taskCount;
