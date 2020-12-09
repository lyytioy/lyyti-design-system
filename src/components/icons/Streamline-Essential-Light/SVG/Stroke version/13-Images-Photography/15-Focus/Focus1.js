import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocus1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="focus-1_svg__a" cx={12} cy={12} r={4.5} />,
    <path
      className="focus-1_svg__a"
      d="M23.5 5.5v-2a1 1 0 00-1-1h-2M23.5 18.5v2a1 1 0 01-1 1h-2M.5 5.5v-2a1 1 0 011-1h2M.5 18.5v2a1 1 0 001 1h2"
    />
  );

export default SvgFocus1;
