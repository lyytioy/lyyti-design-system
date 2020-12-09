import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdRom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-rom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cd-rom_svg__a"
      d="M4.516 14.5H19.5M3.5 18.5a2.006 2.006 0 01-2-2v-3a2.006 2.006 0 012-2h17a2.006 2.006 0 012 2v3a2.006 2.006 0 01-2 2"
    />,
    <path
      className="cd-rom_svg__a"
      d="M22.447 13.043l-2.49-10.6A2.523 2.523 0 0017.5.5h-11a2.523 2.523 0 00-2.457 1.947l-2.49 10.6M6.986 14.5A5 5 0 005.5 18c0 3.038 2.91 5.5 6.5 5.5s6.5-2.462 6.5-5.5a5 5 0 00-1.486-3.5"
    />,
    <ellipse className="cd-rom_svg__a" cx={12} cy={18} rx={1.25} ry={1} />
  );

export default SvgCdRom;
