import {
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { usePassWordField } from './hooks/use-password-field';

export const PassWordField = () => {
    const {pwError,handlePwChange,pw,handleRePwChange,rePw,rePwError} = usePassWordField();
  return (
    <>
      <Stack>
        <Typography>비밀번호</Typography>
        <TextField
          error={pwError}
          onChange={(e) => handlePwChange(e.target.value)}
          value={pw}
          helperText={pwError && "비밀번호를 5자 이상 입력해 주세요."}
        />
      </Stack>
      <Stack>
        <Typography>비밀번호 확인</Typography>
        <TextField
          onChange={(e) => handleRePwChange(e.target.value)}
          value={rePw}
          error={rePwError}
          helperText={rePwError && "비밀번호가 일치하지 않습니다."}
        />
      </Stack>
    </>
  );
};
