import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="view-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="view-square_svg__a"
      d="M4.267 10.722a1.825 1.825 0 000 2.544C5.818 14.821 8.591 17.25 12 17.25s6.183-2.428 7.735-3.983a1.825 1.825 0 000-2.544C18.182 9.168 15.406 6.739 12 6.739s-6.181 2.427-7.733 3.983z"
    />,
    <circle className="view-square_svg__a" cx={12} cy={11.991} r={2.25} />
  );

export default SvgViewSquare;
