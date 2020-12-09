import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutNone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgLayoutNone;
