import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTouch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-touch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-touch_svg__a"
      d="M9 23.25l.75-4.5M6.75 23.25h4.5M9.75 18.75h-6a3 3 0 01-3-3v-12a3 3 0 013-3h16.5a3 3 0 013 3v10.5"
    />,
    <path
      className="monitor-touch_svg__a"
      d="M16.61 23.25l-3.789-3.094a1.637 1.637 0 01-.566-1.675 1.637 1.637 0 012.321-1.068L15.75 18v-5.25a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v3l1.993.332a3 3 0 012.507 2.959v4.209M.75 15.75h9"
    />
  );

export default SvgMonitorTouch;
