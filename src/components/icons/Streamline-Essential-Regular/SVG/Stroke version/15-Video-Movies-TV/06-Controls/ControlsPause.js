import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsPause = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-pause_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="controls-pause_svg__a"
      x={5.25}
      y={3.75}
      width={4.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="controls-pause_svg__a"
      x={14.25}
      y={3.75}
      width={4.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgControlsPause;
