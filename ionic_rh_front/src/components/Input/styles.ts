import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react';
import { theme } from 'theme';

interface LabelProps {
  fontSize: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomInput = styled(Input)`
  border-radius: 10px;

  border-color: ${theme.colors.border};

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

export const Label = styled.label<LabelProps>`
  font-size: ${(props) => ( props.fontSize )}px;
  font-weight: bold;
  color: ${theme.colors.font};
`;
