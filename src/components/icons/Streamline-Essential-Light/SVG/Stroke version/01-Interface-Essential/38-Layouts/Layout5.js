import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout5 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-5_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout-5_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="layout-5_svg__a"
      d="M.5 6.497h22M7.5 6.497v16M7.5 14.497h15"
    />
  );

export default SvgLayout5;
