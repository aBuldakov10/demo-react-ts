import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { startServerThunk } from '@/store/common/thunks';

const useLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const demoSeverFlag = sessionStorage.getItem('demo_sever');

    if (!demoSeverFlag) {
      dispatch(startServerThunk()); // запуск сервера
      sessionStorage.setItem('demo_sever', 'started');
    }
  }, []);
};

export default useLayout;
