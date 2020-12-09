import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgToolBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tool-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="tool-box_svg__a" d="M.5 13.501h10M13.5 13.501h10" />,
    <rect
      className="tool-box_svg__a"
      x={0.5}
      y={8.501}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="tool-box_svg__a"
      d="M13.5 15a1.5 1.5 0 01-3 0v-2.5h3zM8 8.5a4 4 0 018 0"
    />
  );

export default SvgToolBox;
