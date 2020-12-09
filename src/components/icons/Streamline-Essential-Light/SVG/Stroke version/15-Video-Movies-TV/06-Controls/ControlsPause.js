import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsPause = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-pause_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="controls-pause_svg__a"
      x={4}
      y={2.5}
      width={6}
      height={19}
      rx={1}
      ry={1}
    />,
    <rect
      className="controls-pause_svg__a"
      x={14}
      y={2.5}
      width={6}
      height={19}
      rx={1}
      ry={1}
    />
  );

export default SvgControlsPause;
