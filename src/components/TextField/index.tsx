import { useState, InputHTMLAttributes } from "react";
import * as S from "./styles";

type TextFieldProps = {
   onInputChange?: (value: string) => void;
   label?: string;
   initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
   label,
   name,
   initialValue = "",
   onInputChange,
   ...props
}: TextFieldProps) => {
   const [value, setValue] = useState(initialValue);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      setValue(newValue);
      !!onInputChange && onInputChange(newValue);
   };

   return (
      <>
         {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
         <S.InputWrapper>
            <S.Input
               type="text"
               onChange={onChange}
               value={value}
               name={name}
               {...(label ? { id: name } : {})}
               {...props}
            />
         </S.InputWrapper>
      </>
   );
};

export default TextField;
