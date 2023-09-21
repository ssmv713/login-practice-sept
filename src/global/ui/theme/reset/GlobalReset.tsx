import {
  css,
  Global,
} from '@emotion/react';

// 전역 CSS 설정
export const GlobalReset = () => (
  <Global
    styles={css`
      @import url("https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.css");
      @import url("https://webfontworld.github.io/pretendard/Pretendard.css");

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth !important;

        min-width: 1080px;

        font-family: "Pretendard";
      }

      html,
      body,
      #__next {
        width: 100%;
      }

      a {
        text-decoration: none;
      }

      strong {
        font-weight: bold;
      }

      li {
        list-style-type: none;
      }

      button {
        border: 0;
        background-color: transparent;
        padding: 0;
      }

      /* Safari에서 video 태그에 border 생기는 부분 제거 */
      video {
        mask-image: -webkit-radial-gradient(#fff, #000);
        backface-visibility: hidden;
      }

      /* 스크롤바 숨기기 */
      /* * {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      *::-webkit-scrollbar {
        display: none;
      } */
    `}
  />
);
