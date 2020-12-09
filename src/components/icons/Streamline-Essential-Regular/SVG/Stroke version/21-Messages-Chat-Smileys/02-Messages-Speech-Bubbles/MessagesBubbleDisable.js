import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-disable_svg__a"
      cx={17.25}
      cy={17.248}
      r={6}
    />,
    <path
      className="messages-bubble-disable_svg__a"
      d="M13.008 21.489l8.484-8.484M23.223 10.5a10.5 10.5 0 10-19.39 6.275L.75 23.25l6.474-3.084A10.652 10.652 0 009 21.05"
    />
  );

export default SvgMessagesBubbleDisable;
