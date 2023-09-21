type TextStyle = {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
};

export type TypoKeys =
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "headlineLarge"
  | "headlineMedium"
  | "headlineSmall"
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall";

export class TypoHelper {
  // display
  static displayLarge: TextStyle = {
    fontSize: "57px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  static displayMedium: TextStyle = {
    fontSize: "45px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  static displaySmall: TextStyle = {
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  // headline
  static headlineLarge: TextStyle = {
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  static headlineMedium: TextStyle = {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  static headlineSmall: TextStyle = {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  // title
  static titleLarge: TextStyle = {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  static titleMedium: TextStyle = {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  static titleSmall: TextStyle = {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "1.5",
  };

  // body
  static bodyLarge: TextStyle = {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",
  };

  static bodyMedium: TextStyle = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
  };

  static bodySmall: TextStyle = {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1.5",
  };

  // label
  static labelLarge: TextStyle = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
  };

  static labelMedium: TextStyle = {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1.5",
  };

  static labelSmall: TextStyle = {
    fontSize: "11px",
    fontWeight: "400",
    lineHeight: "1.5",
  };

  //
  static findByKey(key: TypoKeys): TextStyle {
    return TypoHelper[key];
  }
}
