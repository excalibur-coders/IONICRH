import * as S from './styles';


interface ButtonProps {
  text: string;
  color: string;
}

function Button({ text, color }: ButtonProps) {
  return (
    <S.Container>
      <S.CustomButton variant="outline" color={color} >
        <span>
          {text}
        </span>
      </S.CustomButton>
    </S.Container>
  );
};

export default Button;
