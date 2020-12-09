import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRouterSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".router-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="router-signal_svg__a"
      d="M12 15.001v-9.75M8.25 6.751v-3M4.5 2.251v6M.75.751v9M15.75 6.751v-3M19.5 2.251v6M23.25.751v9M4.125 21.751v1.5M19.875 21.751v1.5M9.75 15.001v6.75M14.25 18a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.75 18a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="router-signal_svg__a"
      d="M19.875 21.751a3.375 3.375 0 000-6.75H4.125a3.375 3.375 0 000 6.75z"
    />
  );

export default SvgRouterSignal;
