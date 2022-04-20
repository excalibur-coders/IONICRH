import { ForwardRefRenderFunction, forwardRef,  } from 'react';
import InputMask from 'react-input-mask';
import { InputProps as ChakraInputProps } from "@chakra-ui/react";

import * as S from './styles';

interface InputProps extends ChakraInputProps {
  fontSize: number;
  labelText?: string;
  mask?: string;
  maskChar?: string;
  disabled?: boolean;
  error?: string | undefined;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({
    fontSize,
    labelText,
    disabled,
    error,
    ...rest
  }, ref) => {
    return (
      <S.Container disabled={disabled}>
        <S.Label fontSize={fontSize}>{labelText}</S.Label>
        <S.CustomInput
          id={rest.name}
          ref={ref}
          {...rest.mask && {as: InputMask}}
          {...rest}
          disabled={disabled}
        />
        <span>{error}</span>
      </S.Container>
    );
  }

export default forwardRef(Input);
