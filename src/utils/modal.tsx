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
  destroyOnClose: true,
  maskStyle: { backdropFilter: 'blur(2px)' },
};
