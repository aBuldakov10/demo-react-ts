import AddTaskModal from '@/components/Modal/Content/AddTaskModal/AddTaskModal';
import AddGroupModal from '@/components/Modal/Content/AddGroupModal/AddGroupModal';
import EditGroupModal from '@/components/Modal/Content/EditGroupModal/EditGroupModal';
import DeleteGroupModal from '@/components/Modal/Content/DeleteGroupModal/DeleteGroupModal';
import ConfirmDeleteTaskModal from '@/components/Modal/Content/ConfirmDeleteTaskModal/ConfirmDeleteTaskModal';

export const MODAL_TITLE = {
  AddGroupModal: 'Добавить группу',
  EditGroupModal: 'Редактирование группы',
  DeleteGroupModal: 'Удаление группы',
  AddTaskModal: 'Добавить задачу',
  ConfirmDeleteTaskModal: 'Удаление задачи',
};

export const MODAL_CONTENT = {
  AddGroupModal: <AddGroupModal />,
  EditGroupModal: <EditGroupModal />,
  DeleteGroupModal: <DeleteGroupModal />,
  AddTaskModal: <AddTaskModal />,
  ConfirmDeleteTaskModal: <ConfirmDeleteTaskModal />,
};

export const MODAL_CONFIG = {
  className: 'basic-modal',
  centered: true,
  width: 'fit-content',
  footer: null,
  destroyOnHidden: true,
  styles: { mask: { backdropFilter: 'blur(1px)' } },
};
