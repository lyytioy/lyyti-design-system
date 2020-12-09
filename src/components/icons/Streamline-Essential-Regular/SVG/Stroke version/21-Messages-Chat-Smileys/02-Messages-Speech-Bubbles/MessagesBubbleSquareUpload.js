import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-upload_svg__a"
      d="M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5"
    />,
    <circle
      className="messages-bubble-square-upload_svg__a"
      cx={17.247}
      cy={17.25}
      r={6}
    />,
    <path
      className="messages-bubble-square-upload_svg__a"
      d="M17.247 20.25v-6M17.247 14.25l-2.25 2.25M17.247 14.25l2.25 2.25"
    />
  );

export default SvgMessagesBubbleSquareUpload;
