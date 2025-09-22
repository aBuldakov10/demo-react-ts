import { FC } from 'react';
import { Collapse } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import useTodosSidebar from './useTodosSidebar';
import * as S from './style';

const TodosSidebar: FC = () => {
  const { openState, sidebarItems, selectedTab, groupedTasks, handleGroupTasks, handleToggleMenu } = useTodosSidebar();

  return (
    <S.Wrapper isOpen={openState}>
      <S.SideMenuWrapper>
        <Collapse items={sidebarItems} defaultActiveKey={['1', '2']} expandIconPosition="end" />

        {selectedTab === '0' && <S.GroupCheck label="Группировать" value={groupedTasks} onChange={handleGroupTasks} />}
      </S.SideMenuWrapper>

      <S.SideMenuBtn isOpen={openState} onClick={handleToggleMenu}>
        <LeftOutlined />
      </S.SideMenuBtn>
    </S.Wrapper>
  );
};

export default TodosSidebar;
