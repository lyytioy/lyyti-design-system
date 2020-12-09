import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-warning_svg__a"
      d="M23.565 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1V2.482a1 1 0 011-1h21a1 1 0 011 1zM12.567 12V5"
    />,
    <path
      className="messages-bubble-square-warning_svg__a"
      d="M12.565 14.232a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleSquareWarning;
