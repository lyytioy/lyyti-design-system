import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPenWrite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pen-write-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pen-write-1_svg__a"
      d="M8.492 12.764l-1.061 4.243 4.243-1.061 6.364-6.364L14.856 6.4l-6.364 6.364zM21.75 5.87l1.061 1.061a1.5 1.5 0 010 2.121L19.5 12.363"
    />,
    <path
      className="pen-write-1_svg__a"
      d="M18.038 9.582L21.75 5.87a1.5 1.5 0 000-2.121l-1.061-1.061a1.5 1.5 0 00-2.121 0L14.856 6.4M4.5 15.749H2.25a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5H16.5"
    />
  );

export default SvgPenWrite1;
