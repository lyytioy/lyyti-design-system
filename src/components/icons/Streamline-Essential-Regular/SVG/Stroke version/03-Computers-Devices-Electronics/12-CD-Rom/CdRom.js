import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdRom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-rom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cd-rom_svg__a"
      d="M2.982 17.151A3 3 0 01.75 14.25a3 3 0 013-3h16.5a3 3 0 013 3 3 3 0 01-2.227 2.9"
    />,
    <path
      className="cd-rom_svg__a"
      d="M16.19 14.25H7.81A4.932 4.932 0 006 18c0 2.9 2.686 5.25 6 5.25s6-2.35 6-5.25a4.932 4.932 0 00-1.81-3.75zM5.25 14.25h13.5M23.175 13.583l-2.394-10.5A3 3 0 0017.856.75H6.144a3 3 0 00-2.925 2.333l-2.394 10.5"
    />,
    <path
      className="cd-rom_svg__a"
      d="M12 17.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgCdRom;
