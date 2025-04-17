import { FC } from 'react';
import { Modal as AntModal } from 'antd';
// Store
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal } from '@/store/common/reducers';
import { modalNameSelector } from '@/store/common/selectors';
// Utils
import { ModalTitle, ModalContent } from '@/types/modal';
import { MODAL_CONFIG, MODAL_CONTENT, MODAL_TITLE } from '@/utils/modal';

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const modalName = useAppSelector(modalNameSelector);

  const handleClose = () => dispatch(closeModal());

  return (
    <AntModal title={MODAL_TITLE[modalName as ModalTitle]} open={!!modalName} onCancel={handleClose} {...MODAL_CONFIG}>
      {MODAL_CONTENT[modalName as ModalContent]}
    </AntModal>
  );
};

export default Modal;
