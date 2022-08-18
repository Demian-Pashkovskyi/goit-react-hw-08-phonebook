import styled from '@emotion/styled';
import { font } from '../Styled/Mixins';

export const AddButton = styled.button`
  padding: 10px 20px;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 20px;
  ${font({ fs: 16, fw: 600, lh: 20 })};
  background-color: #ebedf3;
  color: #353e42;
  box-shadow: -1px -1px 5px #ffffff,
    5px 5px 10px #a1a6b8;
  transition: all 0.2s ease-in-out;
  }
`;

export const DelButton = styled.button`
  padding: 10px;
  min-width: 40px;
  border-radius: 20px;
  background-color: #ebedf3;
  fill: #353e42;
  box-shadow: -1px -1px 5px #ffffff,
    5px 5px 10px #a1a6b8;
  transition: all 0.2s ease-in-out;
  }
  inset -1px -1px 2px #a1a6b8;
`;