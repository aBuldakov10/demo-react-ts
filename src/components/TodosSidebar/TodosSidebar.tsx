import { FC } from 'react';
import { Collapse } from 'antd';
import useTodosSidebar from './useTodosSidebar';
import * as S from './style';

const TodosSidebar: FC = () => {
  const { sidebarItems, selectedTab, groupedTasks, handleGroupTasks } = useTodosSidebar();

  return (
    <S.Wrapper>
      <Collapse items={sidebarItems} defaultActiveKey={['1', '2']} expandIconPosition="end" />

      {selectedTab === '0' && <S.GroupCheck label="Группировать" value={groupedTasks} onChange={handleGroupTasks} />}
    </S.Wrapper>
  );
};

export default TodosSidebar;
