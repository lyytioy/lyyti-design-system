import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-target_svg__a"
      d="M11.999.747v22.5M23.249 11.997H.749"
    />,
    <circle className="cursor-target_svg__a" cx={11.999} cy={11.997} r={9} />,
    <circle className="cursor-target_svg__a" cx={11.999} cy={11.997} r={4.5} />
  );

export default SvgCursorTarget;
