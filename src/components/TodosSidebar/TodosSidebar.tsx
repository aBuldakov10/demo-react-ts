import { FC } from 'react';
import { Collapse } from 'antd';
import useTodosSidebar from './useTodosSidebar';
import * as S from './style';

const TodosSidebar: FC = () => {
  const { sidebarItems } = useTodosSidebar();

  return (
    <S.Wrapper>
      <Collapse items={sidebarItems} defaultActiveKey={['1', '2']} expandIconPosition="end" />
    </S.Wrapper>
  );
};

export default TodosSidebar;
