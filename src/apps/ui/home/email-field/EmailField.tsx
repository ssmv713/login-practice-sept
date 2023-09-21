import {
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';

import { useEmailField } from './hooks/use-email-field';

export const EmailField = () => {
  const { emailError, email, handleEmailChange } = useEmailField();
  return (
    <Stack>
      <Typography>이메일</Typography>
      <TextField
        error={emailError}
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
        helperText={emailError && "이메일 형식이 틀립니다."}
      />
    </Stack>
  );
};
