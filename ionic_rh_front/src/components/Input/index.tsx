import { HTMLInputTypeAttribute, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form/dist/types';
import InputMask from 'react-input-mask';

import * as S from './styles';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 'lg' | 'md' | 'sm' | 'xs';
  width: string | number;
  fontSize: number;
  labelText?: string;
  placeholder?: string;
  mask?: string;
  maskChar?: string;
  type?: HTMLInputTypeAttribute | undefined;
  disabled?: boolean;
  error?: string | undefined;
}

function Input({
  size,
  width,
  fontSize,
  labelText,
  placeholder,
  mask,
  maskChar,
  type,
  disabled,
  error,
  ...rest
}: InputProps) {
  return (
    <S.Container disabled={disabled}>
      <S.Label fontSize={fontSize}>{labelText}</S.Label>
      <S.CustomInput
        size={size}
        width={width}
        placeholder={placeholder}
        as={InputMask}
        mask={mask}
        maskChar={maskChar}
        type={type}
        {...rest}
      />
      <span>{error}</span>
    </S.Container>
  );
};

export default Input;
