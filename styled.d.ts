import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      main: string;
      text: string;
      complementary: string;
      primary_background: string;
      secondary_background: string;
    };
  }
}
