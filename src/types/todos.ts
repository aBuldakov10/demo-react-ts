// список групп
export interface GroupsType {
  id: string;
  groupTitle: string;
  color: string;
}

// добавление группы
export interface AddGroup {
  groupTitle: string;
  color: string;
}

// редактирование группы
export interface EditGroup {
  id: string;
  data: AddGroup;
}

// список задач
export interface TaskType {
  id: string;
  taskTitle: string;
  description: string;
  createData: string;
  createTime: string;
  isEdited: boolean;
  isDone: boolean;
  groupId: string;
}
