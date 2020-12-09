import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapClock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-clock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-clock-1_svg__a"
      d="M9.11 23.248l-3.789-3.093a1.639 1.639 0 01-.566-1.676 1.638 1.638 0 012.321-1.068L8.25 18v-6.75a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v4.5l1.993.333a3 3 0 012.507 2.957v4.208M17.379 14.486a9.258 9.258 0 00.844-1.736"
    />,
    <circle
      className="gesture-tap-clock-1_svg__a"
      cx={18.75}
      cy={5.248}
      r={4.5}
    />,
    <path
      className="gesture-tap-clock-1_svg__a"
      d="M18.75 5.248v-1.5M12 1.065A8.9 8.9 0 009.75.748 8.979 8.979 0 002.44 14.97"
    />
  );

export default SvgGestureTapClock1;
