import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowPasswordCorrect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-password-correct_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-password-correct_svg__a"
      x={0.5}
      y={3.004}
      width={23}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-password-correct_svg__a"
      d="M.5 8.004h23M4 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="app-window-password-correct_svg__a"
      x={3.5}
      y={12.006}
      width={10}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="app-window-password-correct_svg__a"
      d="M6 13.756a.25.25 0 11-.25.25.25.25 0 01.25-.25M9 13.756a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 13.5l1.646 1.646a.5.5 0 00.708 0L21 12"
    />
  );

export default SvgAppWindowPasswordCorrect;
