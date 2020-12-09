import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-warning_svg__a"
      d="M12.028 1C5.676 1 .528 5.253.528 10.5a8.74 8.74 0 003.4 6.741L1.528 23 7.9 19.359a13.608 13.608 0 004.128.641c6.351 0 11.5-4.253 11.5-9.5S18.379 1 12.028 1zM12.028 12.001v-7"
    />,
    <path
      className="messages-bubble-warning_svg__a"
      d="M12.028 14.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleWarning;
