import { RootState } from '../index';

export const getGroupsSelector = (state: RootState) => state.todos.groups;
