import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-sync_svg__a"
      d="M15 18.499h-3.5v3.5M22.917 19.732A5.572 5.572 0 0112.1 18.5M20 16.499h3.5v-3.5M12.083 15.266A5.572 5.572 0 0122.9 16.5"
    />,
    <path
      className="messages-bubble-sync_svg__a"
      d="M21.331 10.477A6.974 6.974 0 0021.5 9C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.74 7.74 0 003.018 5.959L1.5 19.5l5.637-2.6a12.548 12.548 0 002.368.5"
    />
  );

export default SvgMessagesBubbleSync;
