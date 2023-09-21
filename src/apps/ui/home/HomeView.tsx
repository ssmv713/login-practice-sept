import { css } from '@emotion/react';
import {
  Button,
  Stack,
  Typography,
} from '@mui/material';

import { EmailField } from './email-field/EmailField';
import { useSignInView } from './hooks/use-signin-view';
import { PassWordField } from './password-field/PasswordField';
import { TermsForm } from './terms-form/TermsForm';

export const HomeView = () => {
  //이메일
  const { isAllValid, onSubmit } = useSignInView();
  return (
    <Stack css={st.root} gap="12px">
      <Typography variant="h4">회원가입 페이지</Typography>

      <EmailField />
      <PassWordField />
      <TermsForm />
      <Button
        variant="contained"
        disabled={!isAllValid}
        sx={{ width: "500px" }}
        onClick={onSubmit}
      >
        {"회원가입 하기"}
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
