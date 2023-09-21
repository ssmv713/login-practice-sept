import { useState } from 'react';

export const useEmailField = () => {
  const [email, setEmail] = useState("");

  const emailRegExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const handleEmailChange = (v: string) => {
    setEmail(v);
  };
  const isValidEmail = emailRegExp.test(email) && !!email;
  const emailError = !isValidEmail && !!email;
  return {
    emailError,
    email,
    handleEmailChange,
  };
};
