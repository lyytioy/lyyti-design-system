import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain_svg__a"
      d="M1.125 7.5l15.75 15.75M1.875 8.25l6.311-6.311a1.5 1.5 0 012.121 0l6.439 6.44-7.371 7.371z"
    />,
    <path
      className="flag-plain_svg__a"
      d="M12.246 3.879L15.375.75l7.5 7.5-6.063 6.063a1.5 1.5 0 01-2.122 0l-1.937-1.937M17.256 13.869a4.2 4.2 0 01-.51-5.49"
    />
  );

export default SvgFlagPlain;
