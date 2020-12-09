import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopComputer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-computer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="desktop-computer_svg__a"
      x={2.25}
      y={0.75}
      width={19.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="desktop-computer_svg__a"
      d="M20.767 22.318a.749.749 0 01-.728.932H3.961a.749.749 0 01-.728-.932l1.125-4.5a.749.749 0 01.728-.568h13.828a.751.751 0 01.728.568zM2.25 11.25h19.5M6.75 20.25h1.5M15.75 20.25h1.5M11.25 20.25h1.5"
    />
  );

export default SvgDesktopComputer;
