import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgKeyboardButton;
