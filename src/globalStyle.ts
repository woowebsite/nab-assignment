import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from 'styles/defaultTheme.styles';
import 'bootstrap-css-only/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  body,
  #root {
    margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: ${defaultTheme.colors.GRAY1};
  }

  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    font-size: 14px;
    line-height: 20px;
  }

  button, i {
    cursor: pointer;
  }

  button {
    outline: none;
  }

  body * {
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: ${defaultTheme.colors.PRIMARY};
    &:hover,
    &:active,
    &:focus {
      color: ${defaultTheme.colors.RED2}
    }
  }



  // CSS for NProgress
  #nprogress {
    pointer-events: none;
    z-index: 1201;
    position: absolute;
    width: 100%;
    top: 0;
  }
  #nprogress .bar {
    background: ${defaultTheme.colors.PRIMARY};
    height: 3px;
  }
  #nprogress .spinner {
    display: none;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px ${defaultTheme.colors.PRIMARY}, 0 0 5px ${defaultTheme.colors.PRIMARY};
  }
`;

export default GlobalStyle;
