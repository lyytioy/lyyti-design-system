import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-smartphone_svg__a"
      d="M18.5 19.5h-13M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="touch-id-smartphone_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="touch-id-smartphone_svg__a"
      d="M16.385 12.015A4.5 4.5 0 0112 15.5M7.968 7A4.5 4.5 0 0116.5 9v1M10 15.033A4.5 4.5 0 017.5 11V9"
    />,
    <path
      className="touch-id-smartphone_svg__a"
      d="M12.489 6.548A2.5 2.5 0 0114.5 9v2a2.487 2.487 0 01-.51 1.513M12 13.5A2.5 2.5 0 019.5 11V9a2.5 2.5 0 011-2M12 11v.5M12 8.5v1"
    />
  );

export default SvgTouchIdSmartphone;
