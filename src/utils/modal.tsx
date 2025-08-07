import AddGroupModal from '@/components/Modal/Content/AddGroupModal/AddGroupModal';
import EditGroupModal from '@/components/Modal/Content/EditGroupModal/EditGroupModal';
import DeleteGroupModal from '@/components/Modal/Content/DeleteGroupModal/DeleteGroupModal';

export const MODAL_TITLE = {
  AddGroupModal: 'Добавить группу',
  EditGroupModal: 'Редактирование группы',
  DeleteGroupModal: 'Удаление группы',
};

export const MODAL_CONTENT = {
  AddGroupModal: <AddGroupModal />,
  EditGroupModal: <EditGroupModal />,
  DeleteGroupModal: <DeleteGroupModal />,
};

export const MODAL_CONFIG = {
  className: 'basic-modal',
  centered: true,
  width: 'fit-content',
  footer: null,
  destroyOnHidden: true,
  styles: { mask: { backdropFilter: 'blur(1px)' } },
};
