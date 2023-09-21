import { useState } from 'react';

import { termsModels } from '../model/terms.model';

export const useTemrsForm = () => {
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
  return {
    checkLists,
    handleAllBoxCheck,
    handleCheck,
  };
};
