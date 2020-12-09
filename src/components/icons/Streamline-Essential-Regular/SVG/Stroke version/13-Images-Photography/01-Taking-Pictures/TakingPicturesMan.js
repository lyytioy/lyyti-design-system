import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="taking-pictures-man_svg__a"
      d="M15.75 6H16a8.725 8.725 0 003.452-.71M13.5.8a5.251 5.251 0 013 9.942M5.25 23.25a9 9 0 0118 0M9.75 3.75L9 2.25H4.5l-.75 1.5h-1.5a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="taking-pictures-man_svg__a"
      cx={6.75}
      cy={7.125}
      r={1.875}
    />
  );

export default SvgTakingPicturesMan;
