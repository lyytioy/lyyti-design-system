import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsStop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgControlsStop;
