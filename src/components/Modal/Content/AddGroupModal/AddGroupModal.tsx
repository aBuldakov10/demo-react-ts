import { FC } from 'react';
import useAddGroupModal from './useAddGroupModal';
import * as S from './style';

const AddGroupModal: FC = () => {
  const {
    inputRef,
    groupName,
    errorMsg,
    format,
    setFormat,
    color,
    setColor,
    props,
    handleChangeGroupName,
    handleSubmit,
  } = useAddGroupModal();

  return (
    <S.Wrapper>
      <S.FormGroup>
        <S.Label htmlFor="group-name">
          Название группы <span>*</span>
        </S.Label>
        <S.Input
          id="group-name"
          ref={inputRef}
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

      <S.Submit onClick={handleSubmit}>Добавить</S.Submit>
    </S.Wrapper>
  );
};

export default AddGroupModal;
