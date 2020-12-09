import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLiveNotice = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".live-notice_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="live-notice_svg__a"
      d="M9 15.75v-7.5M12 8.25v2.55a8.932 8.932 0 001.5 4.954A8.932 8.932 0 0015 10.8V8.25M3 8.25v6a1.5 1.5 0 001.5 1.5H6M21 15.75h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5H21M18 12.75h3M23.25 20.25H.75M.75 3.75h22.5"
    />
  );

export default SvgLiveNotice;
