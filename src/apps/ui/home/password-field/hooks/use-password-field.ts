import { useState } from 'react';

export const usePassWordField = () => {
  const [pw, setPw] = useState("");
  const handlePwChange = (v: string) => {
    setPw(v);
  };
  const pwError = pw.length < 5 && !!pw;
  const isPwValid = !pwError && !!pw;
  const [rePw, setRePw] = useState("");
  const handleRePwChange = (v: string) => {
    setRePw(v);
  };
  const isValidRePw = pw === rePw && !!rePw;
  const rePwError = !isValidRePw && !!rePw;
  return { pwError, handlePwChange, pw, handleRePwChange, rePw, rePwError };
};
