import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shrink_svg__a"
      d="M15.5 8.499l8-8M.5 23.499l8-8M20.5 8.499h-5v-5M8.5 20.499v-5h-5M15.5 15.499l8 8M.5.499l8 8M15.5 20.499v-5h5M3.5 8.499h5v-5"
    />,
    <circle className="shrink_svg__a" cx={12} cy={11.999} r={2} />
  );

export default SvgShrink;
