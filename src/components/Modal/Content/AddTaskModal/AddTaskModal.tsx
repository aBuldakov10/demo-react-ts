import { FC } from 'react';
import * as S from './style';
import useAddTaskModal from './useAddTaskModal';

const AddTaskModal: FC = () => {
  const {
    manyGroups,
    selectRef,
    options,
    taskName,
    taskDesc,
    errorMsg,
    handleChangeGroup,
    handleChangeTaskName,
    handleChangeTaskDescription,
    handleSubmit,
  } = useAddTaskModal();

  return (
    <S.Wrapper>
      {manyGroups && (
        <S.FormGroup>
          <S.Title>
            Группа <span>*</span>
          </S.Title>
          <S.SelectGroup
            ref={selectRef}
            options={options}
            onChange={handleChangeGroup}
            placeholder="Выберите группу для задачи"
            status={!!errorMsg.group ? 'error' : ''}
          />
          {errorMsg.group && <S.Error>{errorMsg.group}</S.Error>}
        </S.FormGroup>
      )}

      <S.FormGroup>
        <S.Label htmlFor="task-name">
          Название задачи <span>*</span>
        </S.Label>
        <S.Input
          id="task-name"
          type="text"
          value={taskName}
          onChange={handleChangeTaskName}
          placeholder="Введите название задачи"
          isError={!!errorMsg.taskName}
        />
        {errorMsg.taskName && <S.Error>{errorMsg.taskName}</S.Error>}
      </S.FormGroup>

      <S.FormGroup>
        <S.Label htmlFor="task-description">
          Описание задачи <span>*</span>
        </S.Label>

        <S.Textarea
          id="task-description"
          value={taskDesc}
          onChange={handleChangeTaskDescription}
          cols={30}
          rows={5}
          placeholder="Введите описание задачи"
          isError={!!errorMsg.taskDesc}
        />

        {errorMsg.taskDesc && <S.Error>{errorMsg.taskDesc}</S.Error>}
      </S.FormGroup>

      <S.Submit onClick={handleSubmit}>Добавить</S.Submit>
    </S.Wrapper>
  );
};

export default AddTaskModal;
