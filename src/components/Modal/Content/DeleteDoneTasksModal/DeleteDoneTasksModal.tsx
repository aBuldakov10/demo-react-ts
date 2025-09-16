import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deleteTaskThunk } from '@/store/todos/thunks';
import { closeModal } from '@/store/common/reducers';
import { selectGroup } from '@/store/todos/reducers';
import {
  filteredTasksSelector,
  groupsSelector,
  selectedGroupIdSelector,
  selectedTabSelector,
} from '@/store/todos/selectors';
import * as S from './style';

const DeleteDoneTasksModal: FC = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);
  const selectedGroupId = useAppSelector(selectedGroupIdSelector);
  const selectedTab = useAppSelector(selectedTabSelector);
  const filteredTasks = useAppSelector(filteredTasksSelector);

  const selectedGroup = selectedGroupId && groups.find(({ id }) => id === selectedGroupId);

  const handleSubmit = async () => {
    const deleteTasks = filteredTasks.reduce((accum: any, current) => {
      if (current.isDone) accum.push(current.id);

      return accum;
    }, []);

    await dispatch(deleteTaskThunk(deleteTasks));
    await dispatch(selectGroup(selectedTab));

    dispatch(closeModal());
  };

  return (
    <S.Wrapper>
      <S.FormGroup>
        <S.Warning>
          <span>Внимание!</span> Подтвердить удаление всех завершенных задач
          {selectedGroup && ` для группы ${selectedGroup.groupTitle}`}?
        </S.Warning>
      </S.FormGroup>

      <S.Submit onClick={handleSubmit}>Удалить</S.Submit>
    </S.Wrapper>
  );
};

export default DeleteDoneTasksModal;
