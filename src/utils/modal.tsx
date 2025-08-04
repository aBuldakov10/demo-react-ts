import AddGroupModal from '@/components/Modal/Content/AddGroupModal/AddGroupModal';

export const MODAL_TITLE = {
  AddGroupModal: 'Добавить группу',
};

export const MODAL_CONTENT = {
  AddGroupModal: <AddGroupModal />,
};

export const MODAL_CONFIG = {
  className: 'basic-modal',
  centered: true,
  width: 'fit-content',
  footer: null,
  destroyOnHidden: true,
  styles: { mask: { backdropFilter: 'blur(1px)' } },
};
