import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTouch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-touch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-touch_svg__a"
      d="M16 22l-3.06-4.592c-1.215-1.855 1.789-2.48 3.17.612V10a1 1 0 012 0v4.754l3.963 1.146a1.284 1.284 0 01.894 1.522l-.085.367L22.117 22"
    />,
    <path
      className="monitor-touch_svg__a"
      d="M11.1 17H2.6a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 012.6 2h18a1.5 1.5 0 011.5 1.5V14M6.597 20h5M10.097 17v3"
    />
  );

export default SvgMonitorTouch;
