import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgJs1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".js-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="js-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="js-1_svg__a"
      d="M10.5 11.5v6a2 2 0 01-4 0M16.5 11.5h-2.146a1.854 1.854 0 00-.829 3.512l1.95.975a1.854 1.854 0 01-.829 3.513H12.5"
    />
  );

export default SvgJs1;
