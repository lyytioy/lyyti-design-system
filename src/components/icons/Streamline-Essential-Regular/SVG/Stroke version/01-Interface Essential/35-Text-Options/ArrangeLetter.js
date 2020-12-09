import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArrangeLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arrange-letter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="arrange-letter_svg__a"
      d="M8.25 23.248V.748M3.75 18.748l4.5 4.5 4.5-4.5M15.75 14.248h3.6a.9.9 0 01.836 1.234l-4.372 6.531a.9.9 0 00.836 1.235h3.6M20.25 9.748V3a2.25 2.25 0 00-4.5 0v6.75M15.75 6.748h4.5"
    />
  );

export default SvgArrangeLetter;
