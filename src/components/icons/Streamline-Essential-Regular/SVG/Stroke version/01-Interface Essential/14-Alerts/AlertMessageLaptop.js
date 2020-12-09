import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertMessageLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-message-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alert-message-laptop_svg__a"
      d="M21.75 15.75v3M2.25 18.75V8.25a1.5 1.5 0 011.5-1.5H7.5M14.584 18.75a2.976 2.976 0 01-5.168 0H.75v1.5a3 3 0 003 3h16.5a3 3 0 003-3v-1.5zM18.658 1.011a6.363 6.363 0 00-7.582 8.8L9.013 14l4.722-1.29a6.387 6.387 0 104.923-11.7z"
    />,
    <path
      className="alert-message-laptop_svg__a"
      d="M16.875 9.032a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />,
    <path
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.875 6.782v-3"
    />
  );

export default SvgAlertMessageLaptop;
