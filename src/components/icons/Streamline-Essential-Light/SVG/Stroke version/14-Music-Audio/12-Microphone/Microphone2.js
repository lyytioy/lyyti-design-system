import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="microphone-2_svg__a"
      d="M8 6.5v4M16 4.5v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M16 10.5v-4"
    />,
    <path
      className="microphone-2_svg__a"
      d="M16 6.5a1 1 0 000-2H8a1 1 0 000 2h3v4H8a1 1 0 00-1 1v4a1 1 0 001 1h8a1 1 0 001-1v-4a1 1 0 00-1-1h-3v-4zM12 21.5v2M13.3 18.5l-.2 2a1.106 1.106 0 01-2.2 0l-.2-2M14.8 18.1a1 1 0 01-.8.4h-4a1 1 0 01-.8-.4L8 16.5h8z"
    />
  );

export default SvgMicrophone2;
