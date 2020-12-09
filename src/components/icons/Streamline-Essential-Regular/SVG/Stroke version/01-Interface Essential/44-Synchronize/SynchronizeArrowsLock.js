import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-lock_svg__a"
      d="M18.707 6.246A9 9 0 003 12.247V13M5.293 18.249a9 9 0 0015.707-6V11.5"
    />,
    <path
      className="synchronize-arrows-lock_svg__a"
      d="M18.75 13.747l2.25-2.25 2.25 2.25M5.25 10.747L3 12.997l-2.25-2.25"
    />,
    <rect
      className="synchronize-arrows-lock_svg__a"
      x={8.25}
      y={9.997}
      width={7.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="synchronize-arrows-lock_svg__a"
      d="M12 12.622a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.75 10v-.75a2.25 2.25 0 014.5 0V10"
    />
  );

export default SvgSynchronizeArrowsLock;
