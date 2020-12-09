import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.5} y={0.497} width={23} height={23} rx={4} ry={4} />
  );

export default SvgKeyboardButton;
