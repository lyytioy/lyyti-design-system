import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="layout-2_svg__a" d="M.5 14.497h22" />,
    <rect
      className="layout-2_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="layout-2_svg__a" d="M.5 6.497h22M11.5 6.529v15.968" />
  );

export default SvgLayout2;
