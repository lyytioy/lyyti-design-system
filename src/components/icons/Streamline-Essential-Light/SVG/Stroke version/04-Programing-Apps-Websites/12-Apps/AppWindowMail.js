import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-mail_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-mail_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="app-window-mail_svg__a"
      x={7.5}
      y={11.004}
      width={10}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="app-window-mail_svg__a"
      d="M7.5 12.5l4 2.3a2 2 0 001.994 0l4-2.3"
    />
  );

export default SvgAppWindowMail;
