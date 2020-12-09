import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgToolBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tool-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="tool-box_svg__a"
      x={0.75}
      y={6.751}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="tool-box_svg__a"
      d="M16.5 6.751a4.5 4.5 0 00-9 0M.75 12.751h9.75M13.5 12.751h9.75M12 15a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 113 0v1.5A1.5 1.5 0 0112 15z"
    />
  );

export default SvgToolBox;
