import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-shield_svg__a"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.669 7.669 0 01-6-7.5v-3.541a1.5 1.5 0 01.915-1.382 12.543 12.543 0 0110.17 0 1.5 1.5 0 01.915 1.382zM17.25 12.75v6M14.25 15.75h6"
    />,
    <path
      className="video-file-shield_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.75"
    />,
    <path
      className="video-file-shield_svg__a"
      d="M8.269 11.664l-2.028 1.014a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.366 2.183"
    />
  );

export default SvgVideoFileShield;
