import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-user_svg__a,.app-window-user_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}.app-window-user_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="app-window-user_svg__a"
      d="M11.5 20.5h-9a2 2 0 01-2-2v-16a2 2 0 012-2h19a2 2 0 012 2v7"
    />,
    <path
      className="app-window-user_svg__a"
      d="M4 2.754A.25.25 0 113.75 3 .25.25 0 014 2.754M.5 5.504h23"
    />,
    <path
      className="app-window-user_svg__b"
      d="M7 2.754A.25.25 0 116.75 3 .25.25 0 017 2.754M10 2.754A.25.25 0 119.75 3a.25.25 0 01.25-.25"
    />,
    <path className="app-window-user_svg__a" d="M23.5 23.5a5 5 0 00-10 0z" />,
    <circle className="app-window-user_svg__a" cx={18.5} cy={14.004} r={3} />,
    <path
      className="app-window-user_svg__a"
      d="M7 9.504h5M7 14.004h3M4 9.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M4 13.754a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgAppWindowUser;
