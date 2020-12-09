import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardCommand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.5 24C2.019 24 0 21.981 0 19.5S2.019 15 4.5 15l3-.001V9h-3C2.019 9 0 6.981 0 4.5S2.019 0 4.5 0 9 2.019 9 4.5v3h6v-3C15 2.019 17.019 0 19.5 0S24 2.019 24 4.5 21.981 9 19.5 9h-3v5.998l3-.001c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5v-2.999l-6 .001V19.5C9 21.981 6.981 24 4.5 24zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3v-3.001l-3 .001zm12 2.997c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3l-3 .001v2.999zM9 14.999l6-.001V9H9v5.999zM19.5 7.5c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3v3h3zm-15-6c-1.654 0-3 1.346-3 3s1.346 3 3 3h3v-3c0-1.654-1.346-3-3-3z" />
  );

export default SvgKeyboardCommand;
