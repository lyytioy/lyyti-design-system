import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cog-desktop_svg__a"
      d="M13.5 18.751a8.934 8.934 0 001.5 4.5H9a8.934 8.934 0 001.5-4.5M6.75 23.251h10.5M.75 15.751h22.5"
    />,
    <path
      className="cog-desktop_svg__a"
      d="M16.5.751h5.25a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5H7.5"
    />,
    <circle className="cog-desktop_svg__a" cx={12} cy={7.201} r={3.75} />,
    <path
      className="cog-desktop_svg__a"
      d="M12 3.451v-1.8M12 12.751v-1.8M15.75 7.201h1.8M6.45 7.201h1.8M8.459 3.242l1.107 1.106M15.541 3.242l-1.107 1.106M8.459 11.16l1.107-1.107M15.541 11.16l-1.107-1.107M12 6.451a.75.75 0 11-.75.75.75.75 0 01.75-.75"
    />
  );

export default SvgCogDesktop;
