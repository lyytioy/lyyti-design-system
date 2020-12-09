import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderDash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-dash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-dash_svg__a"
      d="M.75 20.25v.109a1.39 1.39 0 002.634.622l.366-.731M.75 4.5V3.375A1.125 1.125 0 011.875 2.25H3M20.25 6.75V4.875a1.125 1.125 0 00-1.125-1.125H18M22.963 12l.248-.852a1 1 0 00-.238-.965 1.4 1.4 0 00-1.032-.433H21M18.75 21.75h1.1a.964.964 0 00.873-.852L21 19.5M8.25 9.75H6.4a.964.964 0 00-.873.852L5.25 12M4.675 14.873l-.465 2.325M22.114 14.754l-.435 2.176M.75 8.25v2.25M12.75 9.75h-1.5M18 9.75h-1.5M14.25 3.75H12M9 21.75H6.75M15 21.75h-2.25M.75 14.25v2.25"
    />
  );

export default SvgFolderDash;
