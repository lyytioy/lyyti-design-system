import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="read-email-hand_svg__a"
      d="M16.5 15l-1.673-1.255a1.569 1.569 0 00-2.247.385 1.569 1.569 0 000 1.74l1.645 2.467a4.5 4.5 0 002.075 1.682l2.45.981v2.25M15.75 9.75l3.6 1.541a4.5 4.5 0 012.363 2.364l1.173 2.745a4.5 4.5 0 01.364 1.773v5.077"
    />,
    <path
      className="read-email-hand_svg__a"
      d="M15.75 14.437V8.25L8.25 12 .75 8.25v7.5a1.5 1.5 0 001.5 1.5H13.5"
    />,
    <path
      className="read-email-hand_svg__a"
      d="M14.25 9V2.25a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5V9M5.25 3.75H9M5.25 6.75h6"
    />
  );

export default SvgReadEmailHand;
