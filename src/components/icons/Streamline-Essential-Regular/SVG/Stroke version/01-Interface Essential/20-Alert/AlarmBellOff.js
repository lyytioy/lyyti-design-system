import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-off_svg__a"
      d="M22.501 2.25l-21 21M10 21.75a2.087 2.087 0 004.005 0M12.001 3V.75M10.5 18.75H21s-1.5-1.2-1.5-8.25a7.271 7.271 0 00-.093-.915M16.212 4.3A7.5 7.5 0 004.5 10.5v5.25"
    />
  );

export default SvgAlarmBellOff;
