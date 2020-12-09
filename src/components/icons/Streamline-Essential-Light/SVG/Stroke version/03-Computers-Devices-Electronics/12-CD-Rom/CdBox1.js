import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdBox1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-box-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cd-box-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="cd-box-1_svg__a" cx={12} cy={12} r={8.5} />,
    <path
      className="cd-box-1_svg__a"
      d="M13.5 12a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5zM10 16.033A4.5 4.5 0 017.5 12M14 7.967A4.5 4.5 0 0116.5 12"
    />
  );

export default SvgCdBox1;
