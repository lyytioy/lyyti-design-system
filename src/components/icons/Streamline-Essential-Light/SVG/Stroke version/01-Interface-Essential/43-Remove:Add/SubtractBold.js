import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect
      x={0.5}
      y={8.5}
      width={23}
      height={7}
      rx={1}
      ry={1}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgSubtractBold;
