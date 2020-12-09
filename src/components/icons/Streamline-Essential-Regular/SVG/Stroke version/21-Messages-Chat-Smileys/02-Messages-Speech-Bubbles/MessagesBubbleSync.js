import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-sync_svg__a"
      d="M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.739.733"
    />,
    <path
      className="messages-bubble-sync_svg__a"
      d="M23.009 9.006a10.5 10.5 0 10-19.176 7.769L.75 23.25l6.474-3.084a10.709 10.709 0 001.02.559"
    />
  );

export default SvgMessagesBubbleSync;
