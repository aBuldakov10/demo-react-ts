// группа
export interface GroupType {
  id: string;
  groupTitle: string;
  color: string;
}

// добавление группы
export interface AddGroupType {
  groupTitle: string;
  color: string;
}

// редактирование группы
export interface EditGroupType {
  id: string;
  data: AddGroupType;
}

// задача
export interface TaskType {
  id: string;
  taskTitle: string;
  description: string;
  createDate: string;
  editDate: string | null;
  isEdited: boolean;
  isDone: boolean;
  groupId: string;
}

// добавление задачи
export interface AddTaskType {
  taskTitle: string;
  description: string;
  groupId: string;
}
