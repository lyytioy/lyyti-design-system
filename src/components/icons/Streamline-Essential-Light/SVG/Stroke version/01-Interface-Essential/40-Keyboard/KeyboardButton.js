import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect
      x={0.498}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgKeyboardButton;
