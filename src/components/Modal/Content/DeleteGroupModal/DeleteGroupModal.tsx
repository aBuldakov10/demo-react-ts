import { FC } from 'react';
import useDeleteGroupModal from './useDeleteGroupModal';
import * as S from './style';

const DeleteGroupModal: FC = () => {
  const {
    manyGroups,
    allowDelete,
    selectRef,
    options,
    filterOptions,
    handleChangeGroup,
    handleDeselect,
    handleOpenChange,
    handleSubmit,
  } = useDeleteGroupModal();

  return (
    <S.Wrapper>
      {manyGroups && (
        <S.FormGroup>
          <S.Title>Группа</S.Title>
          <S.SelectGroup
            ref={selectRef}
            options={options}
            filterOption={filterOptions}
            onOpenChange={handleOpenChange}
            onChange={handleChangeGroup}
            onDeselect={handleDeselect}
            mode="multiple"
            placeholder="Выберите группу для удаления"
          />
        </S.FormGroup>
      )}

      {allowDelete && (
        <>
          <S.FormGroup>
            <S.Warning>
              <span>Внимание!</span> Удаление группы приведет к удалению всех связанных с ней задач
            </S.Warning>
          </S.FormGroup>

          <S.Submit onClick={handleSubmit}>Удалить</S.Submit>
        </>
      )}
    </S.Wrapper>
  );
};

export default DeleteGroupModal;
