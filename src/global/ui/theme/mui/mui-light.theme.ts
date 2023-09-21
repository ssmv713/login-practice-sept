import { createTheme } from "@mui/material/styles";
import { ColorHelper } from "../items/colors";

export const muiLightTheme = createTheme({
  // 전역 컬러 설정
  palette: {
    primary: {
      main: ColorHelper.brandMain1,
    },
  },

  // 전역 서체 설정
  // (M2 Typo 시스템을 따르지 않는 디자인의 경우 CustomTypography 컴포넌트 만들어서 별도로 사용)
  typography: {
    allVariants: {
      whiteSpace: "pre-wrap",
      fontFamily: "Pretendard",
    },
  },

  // 컴포넌트 테두리 둥글기 설정
  shape: {},

  // 컴포넌트별 옵션 설정
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          color: ColorHelper.white,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          color: ColorHelper.text2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: ColorHelper.text2,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDialog: {
      defaultProps: {
        disableEscapeKeyDown: true,
      },
    },
  },
});
