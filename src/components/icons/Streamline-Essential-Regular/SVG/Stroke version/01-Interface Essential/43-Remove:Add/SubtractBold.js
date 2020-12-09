import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect
      x={0.75}
      y={8.25}
      width={22.5}
      height={7.5}
      rx={3}
      ry={3}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgSubtractBold;
