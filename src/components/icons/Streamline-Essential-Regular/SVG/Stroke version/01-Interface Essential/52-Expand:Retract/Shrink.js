import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shrink_svg__a"
      d="M23.25.748l-7.5 7.5M8.25 21.748v-6h-6M15.75 2.248v6h6M8.25 15.748l-7.5 7.5M.75.748l7.5 7.5M15.75 21.748v-6h6M8.25 2.248v6h-6M15.75 15.748l7.5 7.5"
    />,
    <circle className="shrink_svg__a" cx={12} cy={11.998} r={2.25} />
  );

export default SvgShrink;
