// список групп
export type GroupsType = { id: string; groupTitle: string; color: string };

// список задач
export type TaskType = {
  id: string;
  taskTitle: string;
  description: string;
  createData: string;
  createTime: string;
  isEdited: boolean;
  isDone: boolean;
  groupId: string;
};
