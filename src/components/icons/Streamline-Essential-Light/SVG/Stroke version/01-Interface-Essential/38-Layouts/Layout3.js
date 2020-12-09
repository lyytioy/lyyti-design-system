import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout-3_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="layout-3_svg__a"
      d="M7.5 6.497v16M15.5 6.513v15.984M.5 6.497h22"
    />
  );

export default SvgLayout3;
