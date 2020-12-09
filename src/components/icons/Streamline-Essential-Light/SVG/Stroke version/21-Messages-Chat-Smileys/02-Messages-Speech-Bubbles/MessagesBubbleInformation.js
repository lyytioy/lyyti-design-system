import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-information_svg__a"
      d="M12.083 1C5.732 1 .583 5.253.583 10.5a8.738 8.738 0 003.4 6.741L1.583 23l6.372-3.641a13.608 13.608 0 004.128.641c6.352 0 11.5-4.253 11.5-9.5S18.435 1 12.083 1z"
    />,
    <path
      className="messages-bubble-information_svg__a"
      d="M12.583 15V9a1 1 0 00-1-1h-1M10.583 15h4M12.333 5.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleInformation;
