import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardCommand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20 24c-2.206 0-4-1.794-4-4v-3.003H8V20c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4h3V8H4C1.794 8 0 6.206 0 4s1.794-4 4-4 4 1.794 4 4v2.997h8V4c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4h-3v8h3c2.206 0 4 1.794 4 4s-1.794 4-4 4zm-3-4c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3h-3v3zM4 17c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3v-3H4zm12-1.003v-8H8v8h8zM20 7c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3v3h3zM4 1C2.346 1 1 2.346 1 4s1.346 3 3 3h3V4c0-1.654-1.346-3-3-3z" />
  );

export default SvgKeyboardCommand;
