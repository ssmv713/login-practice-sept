import { css } from '@emotion/react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { useSignInView } from './hooks/use-signin-view';
import { termsModels } from './model/terms.model';

export const HomeView = () => {
  //이메일
  const {
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
  } = useSignInView();
  return (
    <Stack css={st.root} gap="12px">
      <Typography variant="h4">회원가입 페이지</Typography>
      <Stack>
        <Typography>이메일</Typography>
        <TextField
          error={emailError}
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          helperText={emailError && "이메일 형식이 틀립니다."}
        />
      </Stack>
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
      <div>
        {/* 전체동의 */}
        <FormControlLabel
          label="전체동의"
          control={
            <Checkbox
              checked={termsModels.length === checkLists.length}
              onChange={(e) => handleAllBoxCheck(e.target.checked)}
            />
          }
        />
        {/* 개별동의 */}
        <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
          {termsModels.map((it, index) => (
            <FormControlLabel
              label={it.term}
              key={index}
              control={
                <Checkbox
                  name="term1"
                  checked={checkLists.includes(index)}
                  onChange={(e) => handleCheck(e.target.checked, index)}
                />
              }
            />
          ))}
        </Box>
      </div>
      <Button
        variant="contained"
        disabled={!isAllValid}
        sx={{ width: "500px" }}
        onClick={onSubmit}
      >
        {"회원가입하기"}
      </Button>
    </Stack>
  );
};

const st = {
  root: css`
    padding: 40px;
    .MuiInputBase-root {
      width: 500px;
    }

    & span: {
      width: 80px;
    }
  `,
};
