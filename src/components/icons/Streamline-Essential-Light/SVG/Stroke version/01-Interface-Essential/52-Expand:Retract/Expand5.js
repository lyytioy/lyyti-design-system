import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand5 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-5_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="expand-5_svg__a"
      x={6.5}
      y={6.499}
      width={11}
      height={11}
      rx={1}
      ry={1}
    />,
    <path
      className="expand-5_svg__a"
      d="M19.5 4.499l4-4M.5 23.499l4-4M5.5 23.499h-5v-5M23.5 5.499v-5h-5M19.5 19.497l4 4.002M.5.499l4 4M.5 5.499v-5h5M18.5 23.499h5v-5"
    />
  );

export default SvgExpand5;
