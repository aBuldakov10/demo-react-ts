import styled from 'styled-components';
import CustomRadio from '../../components/Form/CustomRadio/CustomRadio';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Sidebar = styled.div`
  width: 20%;
`;

export const RadioGroup = styled(CustomRadio)`
  margin-left: 10px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const ContentHeading = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 30px;
`;

export const GroupNav = styled.nav`
  display: flex;
  gap: 60px;
`;
