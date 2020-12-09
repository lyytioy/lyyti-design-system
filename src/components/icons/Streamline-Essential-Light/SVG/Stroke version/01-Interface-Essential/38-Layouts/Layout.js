import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="layout_svg__a" d="M6.5.497v22M22.5 11.497h-16" />
  );

export default SvgLayout;
