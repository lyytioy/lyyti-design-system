import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneSingMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-sing-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-sing-man_svg__a"
      d="M9.75 23.247a6.75 6.75 0 0113.5 0M12.958 8.79a6.853 6.853 0 007.612 1.531"
    />,
    <circle
      className="microphone-sing-man_svg__a"
      cx={16.5}
      cy={10.872}
      r={4.125}
    />,
    <path
      className="microphone-sing-man_svg__a"
      d="M9.747 9.382a2.827 2.827 0 00-2.985-2.635 2.828 2.828 0 00-3 2.614l-.019 5.25a2.828 2.828 0 002.986 2.635 2.829 2.829 0 003-2.614zM3.743 13.497h2.996M3.75 10.497h2.989M6.739 3.747L6.75.754"
    />,
    <path
      className="microphone-sing-man_svg__a"
      d="M.75 12V9.747a6 6 0 016-6 5.985 5.985 0 014.45 1.975"
    />
  );

export default SvgMicrophoneSingMan;
