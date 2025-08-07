import { FC } from 'react';
import useEditGroupModal from './useEditGroupModal';
import * as S from './style';

const EditGroupModal: FC = () => {
  const {
    manyGroups,
    isEditForm,
    selectRef,
    options,
    groupName,
    errorMsg,
    format,
    setFormat,
    color,
    setColor,
    props,
    handleChangeGroup,
    handleChangeGroupName,
    handleSubmit,
  } = useEditGroupModal();

  return (
    <S.Wrapper>
      {manyGroups && (
        <S.FormGroup>
          <S.Title>Группа</S.Title>
          <S.SelectGroup
            ref={selectRef}
            options={options}
            onChange={handleChangeGroup}
            placeholder="Выберите группу для редактирования"
          />
        </S.FormGroup>
      )}

      {isEditForm && (
        <>
          <S.FormGroup>
            <S.Label htmlFor="group-name">
              Название группы <span style={{ color: 'red' }}>*</span>
            </S.Label>
            <S.Input
              id="group-name"
              type="text"
              value={groupName}
              onChange={handleChangeGroupName}
              placeholder="Название группы"
              isError={!!errorMsg}
            />
            {errorMsg && <S.Error>{errorMsg}</S.Error>}
          </S.FormGroup>

          <S.FormGroup>
            <S.Title>Цвет</S.Title>
            <S.Color
              format={format}
              value={color}
              onChange={setColor}
              onFormatChange={setFormat}
              size="large"
              showText
              {...props}
            />
          </S.FormGroup>

          <S.Submit onClick={handleSubmit}>Сохранить</S.Submit>
        </>
      )}
    </S.Wrapper>
  );
};

export default EditGroupModal;
