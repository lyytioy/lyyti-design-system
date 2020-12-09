import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-shield_svg__a"
      d="M6.4 15.3a9.112 9.112 0 003.973 3l.8.308a2.306 2.306 0 001.656 0l.8-.308a9.117 9.117 0 003.973-3M19.405 10.993A9.138 9.138 0 0019.5 9.75V4.691a1.145 1.145 0 00-.667-1.048A16.713 16.713 0 0012 2.25a16.713 16.713 0 00-6.833 1.393A1.145 1.145 0 004.5 4.691V9.75a9.138 9.138 0 00.1 1.243M4.555 13.342S3.75 16.5.75 16.5L3 18 .75 21.75a8.111 8.111 0 006-2.986M19.445 13.342s.8 3.158 3.805 3.158L21 18l2.25 3.75a8.111 8.111 0 01-6-2.986"
    />,
    <path
      className="computer-shield_svg__a"
      d="M12 12.75a8.1 8.1 0 016 3L20.25 12S18 8.25 12 8.25 3.75 12 3.75 12L6 15.75a8.1 8.1 0 016-3z"
    />
  );

export default SvgComputerShield;
