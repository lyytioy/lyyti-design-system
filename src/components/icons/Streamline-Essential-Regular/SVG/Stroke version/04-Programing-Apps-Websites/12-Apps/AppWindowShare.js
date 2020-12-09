import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-share_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21"
    />,
    <circle
      className="app-window-share_svg__a"
      cx={13.51}
      cy={18.003}
      r={2.25}
    />,
    <circle
      className="app-window-share_svg__a"
      cx={21.01}
      cy={21.003}
      r={2.25}
    />,
    <circle
      className="app-window-share_svg__a"
      cx={21.01}
      cy={13.503}
      r={2.25}
    />,
    <path
      className="app-window-share_svg__a"
      d="M15.435 16.849l3.65-2.19M15.598 18.839l3.324 1.329"
    />
  );

export default SvgAppWindowShare;
