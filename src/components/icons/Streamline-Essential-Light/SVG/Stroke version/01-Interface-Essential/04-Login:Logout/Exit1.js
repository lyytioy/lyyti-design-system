import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExit1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".exit-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="exit-1_svg__a"
      d="M14.5 9.5v6M13.5 15.5h2M13.5 9.5h2M8.5 15.5l3-6M11.5 15.5l-3-6M6.5 15.5h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M3.5 12.5h2M17.5 9.5h3M19 9.5v6"
    />,
    <circle className="exit-1_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgExit1;
