import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-flash_svg__a"
      d="M5.516 17.5h7M.516 11.5h15M8.516 14.5V16a1.5 1.5 0 01-1.5 1.5"
    />,
    <path
      className="monitor-flash_svg__a"
      d="M13.516 14.5h-12a1 1 0 01-1-1v-12a1 1 0 011-1h18a1 1 0 011 1v6M20.516 9.5l-5.911 7.382a.376.376 0 00.286.618h2.625v6l5.911-7.382a.376.376 0 00-.286-.618h-2.625z"
    />
  );

export default SvgMonitorFlash;
