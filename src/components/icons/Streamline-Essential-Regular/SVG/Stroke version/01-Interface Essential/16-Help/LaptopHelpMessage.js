import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopHelpMessage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-help-message_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-help-message_svg__a"
      d="M21.75 15.75v3M2.25 18.75V8.25a1.5 1.5 0 011.5-1.5H7.5M14.584 18.75a2.976 2.976 0 01-5.168 0H.75v1.5a3 3 0 003 3h16.5a3 3 0 003-3v-1.5zM18.659 1.011a6.363 6.363 0 00-7.582 8.8L9.013 14l4.723-1.29a6.293 6.293 0 001.319.567 6.392 6.392 0 003.6-12.265zM15.007 5.657a1.875 1.875 0 111.875 1.875"
    />,
    <path
      className="laptop-help-message_svg__a"
      d="M16.882 9.782a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgLaptopHelpMessage;
