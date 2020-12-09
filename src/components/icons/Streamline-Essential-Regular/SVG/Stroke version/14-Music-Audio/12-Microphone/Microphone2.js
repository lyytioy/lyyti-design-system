import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-2_svg__a"
      d="M7.5 11.25V7.501M16.5 7.501v3.749M7.5 4.5V2.25A1.5 1.5 0 019 .75h6a1.5 1.5 0 011.5 1.5V4.5"
    />,
    <path
      className="microphone-2_svg__a"
      d="M17.25 7.5a1.5 1.5 0 000-3H6.75a1.5 1.5 0 000 3h3.75v3.75h-3a1.5 1.5 0 00-1.5 1.5V15a1.5 1.5 0 001.5 1.5h9A1.5 1.5 0 0018 15v-2.25a1.5 1.5 0 00-1.5-1.5h-3V7.5zM8.25 16.5l.466 1.864a1.5 1.5 0 001.455 1.136h3.658a1.5 1.5 0 001.455-1.136l.466-1.864M12 19.5v3.75"
    />
  );

export default SvgMicrophone2;
