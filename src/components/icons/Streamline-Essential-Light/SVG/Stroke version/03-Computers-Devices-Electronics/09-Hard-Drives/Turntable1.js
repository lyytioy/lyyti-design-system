import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTurntable1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".turntable-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="turntable-1_svg__a"
      x={2.5}
      y={0.5}
      width={19}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="turntable-1_svg__a"
      d="M7.072 15.739a6.5 6.5 0 111.256 1.125M5 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M19 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="turntable-1_svg__a"
      d="M12 11.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 20.5v1M19.5 20.5v1M4.805 17.3a.659.659 0 00-.1 1.014l.984.984A.659.659 0 006.7 19.2l3.8-5.7z"
    />
  );

export default SvgTurntable1;
