import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deleteTaskThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { selectedTaskIdSelector } from '@/store/todos/selectors';
import * as S from './style';

const ConfirmDeleteTaskModal: FC = () => {
  const dispatch = useAppDispatch();
  const selectedTaskId = useAppSelector(selectedTaskIdSelector)!;

  const handleSubmit = () => {
    dispatch(deleteTaskThunk(selectedTaskId));
    dispatch(closeModal());
  };

  return (
    <S.Wrapper>
      <S.FormGroup>
        <S.Warning>
          <span>Внимание!</span> Подтвердить удаление задачи?
        </S.Warning>
      </S.FormGroup>

      <S.Submit onClick={handleSubmit}>Удалить</S.Submit>
    </S.Wrapper>
  );
};

export default ConfirmDeleteTaskModal;
