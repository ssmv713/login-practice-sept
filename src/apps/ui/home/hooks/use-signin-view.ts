import { useState } from 'react';

import { termsModels } from '../terms-form/model/terms.model';

export const useSignInView = () => {
  const [email, setEmail] = useState("");

  const emailRegExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const handleEmailChange = (v: string) => {
    setEmail(v);
  };
  const isValidEmail = emailRegExp.test(email) && !!email;
  const emailError = !isValidEmail && !!email;
  //패스워드
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

  //약관동의

  //전체동의 체크박스 누르는 경우
  const handleAllBoxCheck = (checked: boolean) => {
    if (checked) {
      const idArray: number[] = [];
      termsModels.forEach((__, index) => idArray.push(index));
      setCheckLists(idArray);
    } else {
      setCheckLists([]);
    }
  };
  const [checkLists, setCheckLists] = useState<number[]>([]);
  const handleCheck = (checked: boolean, id: number) => {
    checked
      ? setCheckLists([...checkLists, id])
      : setCheckLists(checkLists.filter((it) => it !== id));
  };
  const requiredIds = termsModels
    .filter((term) => term.isRequired === true)
    .map((term) => term.id);

  const isAllRequiredChecked = requiredIds.every((id) =>
    checkLists.includes(id)
  );
  //전체 유효성 검사
  const isAllValid =
    isValidEmail && isPwValid && isValidRePw && isAllRequiredChecked;
  //제출하기
  const onSubmit = () => {
    alert(`회원가입 완료 , 이메일: ${email} `);
  };

  return {
    handleEmailChange,
    emailError,
    email,
    pwError,
    handlePwChange,
    pw,
    handleRePwChange,
    rePw,
    rePwError,
    checkLists,
    handleAllBoxCheck,
    handleCheck,
    isAllValid,
    onSubmit,
  };
};
