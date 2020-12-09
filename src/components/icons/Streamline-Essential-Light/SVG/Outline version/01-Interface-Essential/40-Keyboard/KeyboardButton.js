import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.498 23.997a4.505 4.505 0 01-4.5-4.5v-15c0-2.481 2.019-4.5 4.5-4.5h15c2.481 0 4.5 2.019 4.5 4.5v15c0 2.481-2.019 4.5-4.5 4.5h-15zm0-23c-1.93 0-3.5 1.57-3.5 3.5v15c0 1.93 1.57 3.5 3.5 3.5h15c1.93 0 3.5-1.57 3.5-3.5v-15c0-1.93-1.57-3.5-3.5-3.5h-15z" />
  );

export default SvgKeyboardButton;
