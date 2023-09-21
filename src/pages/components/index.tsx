import { css } from "@emotion/react";
import {
  Button,
  Checkbox,
  Chip,
  Radio,
  Switch,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";

export default function Page() {
  return (
    <div css={st.root}>
      <div css={st.section}>
        <Button>{"Button"}</Button>
        <Button variant="contained">{"Button"}</Button>
        <Button variant="outlined">{"Button"}</Button>
      </div>

      <div css={st.section}>
        <Checkbox />
        <Radio />
        <Switch />
      </div>

      <div css={st.section}>
        <Chip label={"text"} />
        <Chip label={"text"} variant="filled" color={"primary"} />
        <Chip label={"text"} variant="outlined" color={"primary"} />
      </div>

      <div css={st.section}>
        <TextField variant="filled" />
        <TextField variant="outlined" />
        <TextField variant="standard" />
      </div>

      <div css={st.section}>
        <Tabs value={1}>
          <Tab label="tab1" value={1} />
          <Tab label="tab2" value={2} />
        </Tabs>
      </div>
    </div>
  );
}

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 24px;
  `,
  section: css`
    display: flex;
    gap: 24px;
    padding: 24px;

    border: 1px solid #ccc;

    width: fit-content;
  `,
};
