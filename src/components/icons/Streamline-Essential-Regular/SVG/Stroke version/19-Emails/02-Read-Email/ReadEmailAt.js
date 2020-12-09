import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailAt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-at_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="read-email-at_svg__a"
      d="M17.25 12A5.25 5.25 0 1112 6.75 5.25 5.25 0 0117.25 12z"
    />,
    <path
      className="read-email-at_svg__a"
      d="M17.25 12v2.25a3 3 0 006 0V12a11.249 11.249 0 10-4.5 9"
    />
  );

export default SvgReadEmailAt;
