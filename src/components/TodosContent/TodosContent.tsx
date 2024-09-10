import { FC } from 'react';

const TodosContent: FC<{ id: string }> = ({ id }) => {
  return (
    <div id={id}>
      {id === '0' ? 'Список всех групп и всех задач' : `Список всех групп и всех задач для вкладки ${id}`}
    </div>
  );
};

export default TodosContent;
