import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgJs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".js_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="js_svg__a"
      x={0.563}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="js_svg__a"
      d="M10.562 9v4.5a1.5 1.5 0 01-3 0M15.562 9h-1.7a1.3 1.3 0 00-.722 2.386l1.839 1.227A1.3 1.3 0 0114.26 15h-1.7"
    />
  );

export default SvgJs;
