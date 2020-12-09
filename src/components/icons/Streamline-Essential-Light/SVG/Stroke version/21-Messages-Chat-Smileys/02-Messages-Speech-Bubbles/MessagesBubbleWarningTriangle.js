import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleWarningTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-warning-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-warning-triangle_svg__a"
      d="M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="messages-bubble-warning-triangle_svg__a"
      d="M18.338 12.5a.949.949 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />,
    <path
      className="messages-bubble-warning-triangle_svg__a"
      d="M20.579 12.47A7.122 7.122 0 0021.5 9C21.5 4.307 16.8.5 11 .5S.5 4.307.5 9a7.744 7.744 0 003.018 5.96L1.5 19.5l5.637-2.6a12.668 12.668 0 003.863.6c.269 0 .534-.017.8-.033"
    />
  );

export default SvgMessagesBubbleWarningTriangle;
