import styled from '@emotion/styled';
import { Input, Flex } from '@chakra-ui/react';
import { theme } from 'theme';

interface LabelProps {
  fontSize: number;
}

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled(Flex)<ContainerProps>`
  flex-direction: column;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  span {
    display: flex;
    justify-content: flex-end;

    margin-right: 1rem;
    margin-top: 0rem;

    color: ${theme.colors.red};
  }
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
