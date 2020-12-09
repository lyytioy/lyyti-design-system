import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopComputer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-computer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="desktop-computer_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="desktop-computer_svg__a"
      d="M21.847 22.879a.5.5 0 01-.485.621H2.643a.5.5 0 01-.485-.621l1.25-5a.5.5 0 01.485-.379h16.219a.5.5 0 01.485.379zM.5 11.5h23M5.5 19.5h1M4.5 21.5h1M8.5 19.5h1M11.5 19.5h1M14.5 19.5h1M17.5 19.5h1M7.5 21.5h9M18.5 21.5h1"
    />
  );

export default SvgDesktopComputer;
