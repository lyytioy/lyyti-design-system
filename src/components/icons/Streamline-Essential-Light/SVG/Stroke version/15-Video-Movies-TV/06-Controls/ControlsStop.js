import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsStop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect
      x={2.5}
      y={2.5}
      width={19}
      height={19}
      rx={1}
      ry={1}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgControlsStop;
