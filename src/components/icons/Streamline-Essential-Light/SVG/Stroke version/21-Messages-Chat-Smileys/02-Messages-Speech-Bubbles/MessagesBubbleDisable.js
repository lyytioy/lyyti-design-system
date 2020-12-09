import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-disable_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path
      className="messages-bubble-disable_svg__a"
      d="M13.258 21.744l8.485-8.485M21.331 10.477A6.974 6.974 0 0021.5 9C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.74 7.74 0 003.018 5.959L1.5 19.5l5.637-2.6a12.548 12.548 0 002.368.5"
    />
  );

export default SvgMessagesBubbleDisable;
