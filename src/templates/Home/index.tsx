import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "components/TextField";
import Checkbox from "components/Checkbox";
import { useUser } from "contexts/user";

const Home = () => {
   const [user, setUser] = useState<string>("");
   const [isOverAge, setIsOverAge] = useState<boolean>(false);
   const { addUser, isAuthenticated } = useUser();
   const navigate = useNavigate();

   useEffect(() => {
      if (isAuthenticated) {
         navigate("/list");
      }
   }, [isAuthenticated, navigate]);

   const validateFullName = (name: string): boolean => {
      const fullName = name.trim().split(" ");
      return fullName.length >= 2;
   };

   const nameValidation = validateFullName(user);

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      const regex = /[^a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/;
      const cleanText = value.replace(regex, "");
      setUser(cleanText);
   };

   const handleCheckbox = (value: boolean) => {
      setIsOverAge(value);
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addUser(user);
      navigate("/list");
   };

   const TextFieldProps = {
      placeholder: "Nome",
      label: "Nome",
      type: "text",
      name: "name",
      value: user,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
         handleOnChange(event),
   };

   const CheckboxProps = {
      label: "Are you older than 18 years old?",
      labelFor: "overage",
      onCheck: (value: boolean) => handleCheckbox(value),
   };

   return (
      <form onSubmit={handleSubmit}>
         <TextField {...TextFieldProps} />
         <Checkbox {...CheckboxProps} />
         <button type="submit" disabled={!isOverAge || !nameValidation}>
            Enter
         </button>
      </form>
   );
};

export default Home;
