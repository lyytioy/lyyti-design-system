import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-information_svg__a"
      d="M23.522 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="messages-bubble-square-information_svg__a"
      d="M12.522 14.5v-6a1 1 0 00-1-1h-1M10.522 14.5h4M12.272 5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleSquareInformation;
