import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pin_svg__a"
      d="M4.949 8.783a1.5 1.5 0 00-.3 2.356l8.213 8.213a1.5 1.5 0 002.356-.3 7.522 7.522 0 00.81-5.54l6.529-4.155a1.5 1.5 0 00.256-2.326L16.97 1.188a1.5 1.5 0 00-2.326.255l-4.155 6.53a7.522 7.522 0 00-5.54.81zM8.753 15.246L.75 23.249"
    />
  );

export default SvgPin;
