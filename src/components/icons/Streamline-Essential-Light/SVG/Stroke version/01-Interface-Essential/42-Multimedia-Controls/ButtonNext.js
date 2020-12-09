import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="button-next_svg__a" cx={12} cy={11.999} r={11.5} />,
    <rect
      className="button-next_svg__a"
      x={14.5}
      y={7.499}
      width={2}
      height={9}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="button-next_svg__a"
      d="M7.5 15.376a.5.5 0 00.834.372l3.753-3.378a.5.5 0 000-.743L8.334 8.25a.5.5 0 00-.834.371z"
    />
  );

export default SvgButtonNext;
