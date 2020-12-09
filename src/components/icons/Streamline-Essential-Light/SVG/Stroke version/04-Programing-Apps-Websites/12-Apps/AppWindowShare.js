import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="app-window-share_svg__a"
      cx={13.78}
      cy={18.254}
      r={2.25}
    />,
    <circle
      className="app-window-share_svg__a"
      cx={21.28}
      cy={21.254}
      r={2.25}
    />,
    <circle
      className="app-window-share_svg__a"
      cx={21.28}
      cy={13.754}
      r={2.25}
    />,
    <path
      className="app-window-share_svg__a"
      d="M15.705 17.099l3.65-2.19M15.868 19.089l3.325 1.33M.53 4.504h20M3.53 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.53 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.53 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-share_svg__a"
      d="M9.53 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v7"
    />
  );

export default SvgAppWindowShare;
