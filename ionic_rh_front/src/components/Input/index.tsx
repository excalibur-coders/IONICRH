import InputMask from 'react-input-mask';

import * as S from './styles';

interface InputProps {
  size: 'lg' | 'md' | 'sm' | 'xs';
  width: string | number;
  fontSize: number;
  labelText: string;
  placeholder?: string;
  mask?: string;
  maskChar?: string;
}

function Input({
  size,
  width,
  fontSize,
  labelText,
  placeholder,
  mask,
  maskChar
}: InputProps) {
  return (
    <S.Container>
      <S.Label fontSize={fontSize}>{labelText}</S.Label>
      <S.CustomInput
        size={size}
        width={width}
        placeholder={placeholder}
        as={InputMask}
        mask={mask}
        maskChar={maskChar}
      />
    </S.Container>
  );
};

export default Input;
