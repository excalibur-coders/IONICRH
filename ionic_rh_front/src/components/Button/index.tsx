import { DOMAttributes, MouseEventHandler } from 'react';
import * as S from './styles';

interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function Button({
  text,
  color,
  onClick,
  type,
  ...rest
}: ButtonProps) {
  return (
    <S.Container>
      <S.CustomButton
        variant="outline"
        color={color}
        onClick={onClick}
        type={type}
        {...rest}
      >
        <span>
          {text}
        </span>
      </S.CustomButton>
    </S.Container>
  );
};

export default Button;
