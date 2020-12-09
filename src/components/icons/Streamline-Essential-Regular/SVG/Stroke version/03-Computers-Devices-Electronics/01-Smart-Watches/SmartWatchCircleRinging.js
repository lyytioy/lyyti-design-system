import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleRinging = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-ringing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-ringing_svg__a"
      d="M13.782 14.475A6.747 6.747 0 119.43 5.53M3 6.97V2.25A1.5 1.5 0 014.5.75H9"
    />,
    <path
      className="smart-watch-circle-ringing_svg__a"
      d="M12 17.031v4.719a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.719M14.25 6.37v3.38a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V9.1a1.5 1.5 0 01.728-1.286A9.969 9.969 0 0116.875 6a10.031 10.031 0 015.647 1.813A1.5 1.5 0 0123.25 9.1v.65a1.5 1.5 0 01-1.5 1.5H21a1.5 1.5 0 01-1.5-1.5V6.38M17.25 3V.75M21 3.75l1.5-1.5M13.5 3.75L12 2.25"
    />
  );

export default SvgSmartWatchCircleRinging;
