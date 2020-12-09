import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRouterSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".router-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="router-signal_svg__a"
      d="M14.061 5.243a1.5 1.5 0 010 2.121M16.182 3.121a4.5 4.5 0 010 6.364M16.182 3.121a4.5 4.5 0 010 6.364M18.3 1a7.5 7.5 0 010 10.607M18.3 1a7.5 7.5 0 010 10.607M9.939 5.243a1.5 1.5 0 000 2.121M7.818 3.121a4.5 4.5 0 000 6.364M7.818 3.121a4.5 4.5 0 000 6.364M5.7 1a7.5 7.5 0 000 10.607M5.7 1a7.5 7.5 0 000 10.607M23.5 19a2 2 0 01-2 2h-19a2 2 0 01-2-2v-2a2 2 0 012-2h19a2 2 0 012 2z"
    />,
    <path
      className="router-signal_svg__a"
      d="M4.75 17.75A.25.25 0 105 18a.25.25 0 00-.25-.25M8.25 17.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 15v-5M4 21l-1.5 2M20 21l1.5 2"
    />
  );

export default SvgRouterSignal;
