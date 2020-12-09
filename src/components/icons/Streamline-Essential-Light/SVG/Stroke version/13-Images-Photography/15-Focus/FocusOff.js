import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="focus-off_svg__a" cx={12} cy={12.5} r={5} />,
    <path
      className="focus-off_svg__a"
      d="M8.477 16.022l7.045-7.044M23.5 5.5v-2a1 1 0 00-1-1h-2M23.5 18.5v2a1 1 0 01-1 1h-2M.5 5.5v-2a1 1 0 011-1h2M.5 18.5v2a1 1 0 001 1h2"
    />
  );

export default SvgFocusOff;
