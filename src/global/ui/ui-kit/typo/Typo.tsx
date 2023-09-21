import { Typography, TypographyProps } from "@mui/material";
import { css } from "@emotion/react";

import { TypoHelper, TypoKeys } from "../../theme/items/typo";

export type TypoProps = {
  variant?: TypoKeys;
} & Omit<TypographyProps, "variant">;

export const Typo = ({ variant = "bodyMedium", ...rest }: TypoProps) => {
  const style = TypoHelper.findByKey(variant);

  return (
    <Typography
      css={css`
        font-size: ${style?.fontSize};
        font-weight: ${style?.fontWeight};
        line-height: ${style?.lineHeight};
      `}
      {...rest}
    />
  );
};
