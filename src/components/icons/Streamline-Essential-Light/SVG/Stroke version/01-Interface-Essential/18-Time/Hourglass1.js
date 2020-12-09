import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHourglass1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hourglass-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hourglass-1_svg__a"
      d="M19.5.5l-4.307 9.905a4 4 0 000 3.19L19.5 23.5h-15l4.307-9.9a4 4 0 000-3.19L4.5.5"
    />,
    <path
      className="hourglass-1_svg__a"
      d="M9.5 5.5a6.741 6.741 0 005 0L12 11zM3 .501h18M3 23.501h18M15.059 20.501L12 14.001l-3.059 6.5h6.118z"
    />
  );

export default SvgHourglass1;
