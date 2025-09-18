import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deleteTaskThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { groupTasks, selectGroup } from '@/store/todos/reducers';
import { groupedTasksSelector, selectedTabSelector, selectedTaskIdSelector } from '@/store/todos/selectors';
import * as S from './style';

const DeleteTaskModal: FC = () => {
  const dispatch = useAppDispatch();
  const selectedTaskId = useAppSelector(selectedTaskIdSelector)!;
  const selectedTab = useAppSelector(selectedTabSelector);
  const groupedTasks = useAppSelector(groupedTasksSelector);

  const handleSubmit = async () => {
    await dispatch(deleteTaskThunk([selectedTaskId]));

    if (groupedTasks) {
      await dispatch(groupTasks(true));
    } else {
      await dispatch(selectGroup(selectedTab));
    }

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

export default DeleteTaskModal;
