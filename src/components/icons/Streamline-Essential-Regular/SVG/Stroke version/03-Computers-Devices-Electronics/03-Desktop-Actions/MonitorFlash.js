import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-flash_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h6.75M.75 12.75h12M10.5 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v9"
    />,
    <path
      className="monitor-flash_svg__a"
      d="M20.25 9.75l-5.911 6.882a.376.376 0 00.286.618h2.625v6l5.911-6.882a.376.376 0 00-.286-.618H20.25z"
    />
  );

export default SvgMonitorFlash;
