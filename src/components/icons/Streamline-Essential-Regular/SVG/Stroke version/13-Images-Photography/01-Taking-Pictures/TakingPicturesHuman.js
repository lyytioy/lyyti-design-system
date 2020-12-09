import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="taking-pictures-human_svg__a"
      d="M9.75 3.75L9 2.25H4.5l-.75 1.5h-1.5a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="taking-pictures-human_svg__a"
      cx={6.75}
      cy={7.125}
      r={1.875}
    />,
    <path
      className="taking-pictures-human_svg__a"
      d="M5.25 23.25a9 9 0 0118 0M12 1.255a5.251 5.251 0 014.5 9.49"
    />
  );

export default SvgTakingPicturesHuman;
