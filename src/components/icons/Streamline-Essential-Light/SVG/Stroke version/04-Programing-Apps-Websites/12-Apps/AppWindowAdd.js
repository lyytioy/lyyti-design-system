import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="app-window-add_svg__a" cx={17.518} cy={17.506} r={6} />,
    <path
      className="app-window-add_svg__a"
      d="M17.518 14.506v6M20.518 17.506h-6M.515 4.504h20M3.515 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.515 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.515 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-add_svg__a"
      d="M8.515 16.5h-6a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />
  );

export default SvgAppWindowAdd;
