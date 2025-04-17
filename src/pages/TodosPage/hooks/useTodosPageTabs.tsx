import { useAppSelector } from '@/store/hooks';
import { groupsSelector } from '@/store/todos/selectors';
import TodosContent from '@/components/TodosContent/TodosContent';

const useTodosPageTabs = () => {
  const groups = useAppSelector(groupsSelector);

  return [
    {
      key: '0',
      label: <span>Все</span>,
      children: <TodosContent tabId="0" />,
    },
    ...groups?.map(({ id, color, groupTitle }, index) => {
      return {
        key: (index + 1).toString(),
        label: <span style={{ color }}>{groupTitle}</span>,
        children: <TodosContent tabId={id} />,
      };
    }),
  ];
};

export default useTodosPageTabs;
