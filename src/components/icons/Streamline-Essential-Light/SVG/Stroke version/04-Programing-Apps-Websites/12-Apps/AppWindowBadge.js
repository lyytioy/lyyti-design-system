import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-badge_svg__a,.app-window-badge_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}.app-window-badge_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="app-window-badge_svg__a"
      d="M11.5 21.071h-9a2 2 0 01-2-2v-16a2 2 0 012-2h19a2 2 0 012 2v7"
    />,
    <path
      className="app-window-badge_svg__a"
      d="M4 3.321a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 6.071h23"
    />,
    <path
      className="app-window-badge_svg__b"
      d="M7 3.321a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 3.321a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="app-window-badge_svg__a"
      d="M20.5 17.142V22.5a.5.5 0 01-.82.384l-2.18-1.813-2.18 1.817a.5.5 0 01-.82-.384v-5.362"
    />,
    <circle
      className="app-window-badge_svg__a"
      cx={17.5}
      cy={14.071}
      r={1.5}
    />,
    <path
      className="app-window-badge_svg__a"
      d="M21.221 14.071a2 2 0 00-1.861-3.222 1.993 1.993 0 00-3.719 0 2 2 0 00-1.862 3.221 2 2 0 001.862 3.223 1.994 1.994 0 003.72 0 2 2 0 001.86-3.222z"
    />
  );

export default SvgAppWindowBadge;
